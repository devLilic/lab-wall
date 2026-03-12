# Repository Structure

This repository is organized as a multi-app workspace for Wall Transport Lab.

## Apps

- `apps/wall-controller`: baseline Electron + React app migrated from the original template.
- `apps/wall-preview`: second Electron + React app skeleton for preview workflows.

Each app has:

- `electron/main`: Electron main process entrypoints.
- `electron/preload`: preload bridge scripts.
- `src`: renderer code.
- `public`: static assets.

## Packages

- `packages/shared`: shared cross-app utilities and types.
- `packages/network`: network-layer logic placeholder.
- `packages/thumbnail-plugin`: thumbnail plugin logic placeholder.

All package source files live under `packages/*/src`.

## Tests

Test folders are grouped by domain:

- `test/shared`
- `test/network`
- `test/wall-controller`
- `test/wall-preview`
- `test/thumbnail-plugin`

Vitest is configured to discover tests from those folders.
