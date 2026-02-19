# How to run code
To run TypeScript (`.ts`) files in this project:

1. **Install TypeScript globally (if not already installed):**

    ```
    npm install -g typescript
    ```

2. **Compile your TypeScript file to JavaScript:**

    ```
    tsc your-file.ts
    ```

    This will generate a `your-file.js` file in the same directory.

3. **Run the compiled JavaScript file using Node.js:**

    ```
    node your-file.js
    ```

For example, to run `methods.ts`:

```
tsc methods.ts
node methods.js
```

*If you want to compile all `.ts` files at once:*

```
tsc
```

This will compile all TypeScript files in the folder (requires a `tsconfig.json` if you need project-wide config).