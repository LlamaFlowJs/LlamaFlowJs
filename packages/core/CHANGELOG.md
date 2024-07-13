# @llamaflow/core

## 0.1.0

### Minor Changes

- 16ef5dd: refactor: simplify callback manager

  Change `event.detail.payload` to `event.detail`

### Patch Changes

- 16ef5dd: refactor: move callback manager & llm to core module

  For people who import `llamaindex/llms/base` or `llamaindex/llms/utils`,
  use `@llamaflow/core/llms` and `@llamaflow/core/utils` instead.

## 0.0.3

### Patch Changes

- f326ab8: chore: bump version
- Updated dependencies [f326ab8]
  - @llamaflow/env@0.1.8

## 0.0.2

### Patch Changes

- f10b41d: fix: release files
- Updated dependencies [41fe871]
  - @llamaflow/env@0.1.7
