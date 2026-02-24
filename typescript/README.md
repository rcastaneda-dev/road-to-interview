# How to run code

To run TypeScript (`.ts`) files in this project:

1. **Install TypeScript globally (if not already installed):**

   ```
   npm install -g typescript
   ```

2. **Compile from the project root:**

   ```
   tsc
   ```

   This uses the root `tsconfig.json` and compiles all `.ts` files. Output `.js` files are written next to their sources.

   > Do not run `tsc your-file.ts` — that skips `tsconfig.json` and can cause lib errors (e.g. `Map`, `flatMap`, `Array.from`, `console`).

3. **Run the compiled JavaScript file:**

   ```
   node typescript/your-file.js
   ```

**Example — run `array_reduce_by_intervals.ts`:**

```
tsc
node typescript/array_reduce_by_intervals.js
```

**Files in this folder:**

| File | Description |
|------|-------------|
| `array_reduce_by_intervals.ts` | Count numbers by predefined intervals (1–5, 6–8, 9–10) |
| `interface.ts` | Basic interface and function types |
| `interface-2.ts` | Extended interface examples |
| `lists.ts` | Array/list utilities |
| `methods.ts` | Object methods and examples |