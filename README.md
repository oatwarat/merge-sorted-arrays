# ts-merge-three

A tiny, human-style TypeScript project that merges three sorted integer arrays into one ascending array — without using `.sort()`.

**Contract**
```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```
- `collection_1` is **descending** (max → min)
- `collection_2` and `collection_3` are **ascending** (min → max)
- Returns a single **ascending** array

## Requirements
- Node.js **18+**

## Setup
```bash
npm install
```

## Build
```bash
npm run build
```

## Run demo
```bash
npm run demo
# → Merged ascending: [...]
```

## Run tests
Uses Node’s built-in test runner (no extra libs).
```bash
npm test
```

## Approach
Three pointers:
- `i` moves from the **end** of `collection_1` (because it’s descending — smallest values are at the end)
- `j` and `k` move from the **start** of `collection_2` and `collection_3`
At each step pick the smallest available value and push to the result.
Time: **O(n1 + n2 + n3)**, Space: **O(n1 + n2 + n3)**.
