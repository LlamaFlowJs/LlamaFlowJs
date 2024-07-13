import { AsyncLocalStorage, CustomEvent } from "@llamaflowjs/env";
import type {
  ChatMessage,
  ChatResponse,
  ChatResponseChunk,
  ToolCall,
  ToolOutput,
} from "../../llms";
import { EventCaller, getEventCaller } from "../../utils/event-caller";
import type { UUID } from "../type";

export type LLMStartEvent = {
  id: UUID;
  messages: ChatMessage[];
};

export type LLMToolCallEvent = {
  toolCall: ToolCall;
};

export type LLMToolResultEvent = {
  toolCall: ToolCall;
  toolResult: ToolOutput;
};

export type LLMEndEvent = {
  id: UUID;
  response: ChatResponse;
};

export type LLMStreamEvent = {
  id: UUID;
  chunk: ChatResponseChunk;
};

export interface LlamaFlowEventMaps {
  "llm-start": LLMStartEvent;
  "llm-end": LLMEndEvent;
  "llm-tool-call": LLMToolCallEvent;
  "llm-tool-result": LLMToolResultEvent;
  "llm-stream": LLMStreamEvent;
}

export class LlamaFlowCustomEvent<T = any> extends CustomEvent<T> {
  reason: EventCaller | null = null;
  private constructor(
    event: string,
    options?: CustomEventInit & {
      reason?: EventCaller | null;
    },
  ) {
    super(event, options);
    this.reason = options?.reason ?? null;
  }

  static fromEvent<Type extends keyof LlamaFlowEventMaps>(
    type: Type,
    detail: LlamaFlowEventMaps[Type],
  ) {
    return new LlamaFlowCustomEvent(type, {
      detail: detail,
      reason: getEventCaller(),
    });
  }
}

type EventHandler<Event> = (event: LlamaFlowCustomEvent<Event>) => void;

export class CallbackManager {
  #handlers = new Map<keyof LlamaFlowEventMaps, EventHandler<any>[]>();

  on<K extends keyof LlamaFlowEventMaps>(
    event: K,
    handler: EventHandler<LlamaFlowEventMaps[K]>,
  ) {
    if (!this.#handlers.has(event)) {
      this.#handlers.set(event, []);
    }
    this.#handlers.get(event)!.push(handler);
    return this;
  }

  off<K extends keyof LlamaFlowEventMaps>(
    event: K,
    handler: EventHandler<LlamaFlowEventMaps[K]>,
  ) {
    if (!this.#handlers.has(event)) {
      return this;
    }
    const cbs = this.#handlers.get(event)!;
    const index = cbs.indexOf(handler);
    if (index > -1) {
      cbs.splice(index, 1);
    }
    return this;
  }

  dispatchEvent<K extends keyof LlamaFlowEventMaps>(
    event: K,
    detail: LlamaFlowEventMaps[K],
  ) {
    const cbs = this.#handlers.get(event);
    if (!cbs) {
      return;
    }
    queueMicrotask(() => {
      cbs.forEach((handler) =>
        handler(LlamaFlowCustomEvent.fromEvent(event, structuredClone(detail))),
      );
    });
  }
}

export const globalCallbackManager = new CallbackManager();

const callbackManagerAsyncLocalStorage =
  new AsyncLocalStorage<CallbackManager>();

let currentCallbackManager: CallbackManager | null = null;

export function getCallbackManager(): CallbackManager {
  return (
    callbackManagerAsyncLocalStorage.getStore() ??
    currentCallbackManager ??
    globalCallbackManager
  );
}

export function setCallbackManager(callbackManager: CallbackManager) {
  currentCallbackManager = callbackManager;
}

export function withCallbackManager<Result>(
  callbackManager: CallbackManager,
  fn: () => Result,
): Result {
  return callbackManagerAsyncLocalStorage.run(callbackManager, fn);
}
