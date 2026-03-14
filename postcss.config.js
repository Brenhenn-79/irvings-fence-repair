module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

Then also open `package.json` → find this line:
```
"tailwindcss": "^3.4.0",
```
Change it to:
```
"tailwindcss": "^4.0.0",
"@tailwindcss/postcss": "^4.0.0",
