# Setting up and using ESLint

Install eslint dependencies.
```
npm install
```

Run eslint over the example source.
```
eslint main.js
```

Run eslint with the --fix option enabled.
```
eslint --fix main.js
```

Try creating a custom linting config.
```
rm .eslintrc.json
eslint --init
```