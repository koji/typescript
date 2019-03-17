## init

```
$ yarn init -y
```


## add packages

```
$ yarn add webpack webpack-cli       # dependencies     
$ yarn add webpack webpack-cli --dev # devDependencies
```

## add packages globally
```
$ yarn global add create-react-app

# with option 
$ yarn global add create-react-app --prefix /usr/local
```


## remove packages

```
$ yarn remove packageName
```


## run scripts

```
$ yarn run scriptName
```



#### webpack.config.js

```js
const path = require('path');

module.exports = {
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development',

    // https://webpack.js.org/configuration/entry-context/#entry
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        // https://webpack.js.org/configuration/output/#outputpath
        path: path.join(__dirname, 'public/js')
    },
    // https://webpack.js.org/configuration/module/#rule-conditions
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        // https://webpack.js.org/configuration/module/#ruleuse
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { modules: false }]]
                        }
                    }
                ]
            }
        ]
    }
};
```

### build
```
$ yarn run webpack
```

## `Babel`
```
$ yarn add babel-loader @babel/core @babel/preset-env --dev
```

