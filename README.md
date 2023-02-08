##

run 'yarn build' and 'yarn preview' to get the shared component to be exposed on "http://localhost:5000/assets/shared.js" in the host project,
point to this uri in the vite config like:

```
federation({
      remotes: {
        shared: "http://localhost:5000/assets/shared.js",
      },
      shared: ["react"],
    }),
```
