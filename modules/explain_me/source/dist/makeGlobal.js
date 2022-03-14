const ccc = require("clear_concise_creative")

function makeGlobal() {

    ccc.mergeJSONObject("./package.json", ["scripts"], {
        "compile": "rimraf dist && babel src -d dist",
        "build": "rimraf dist/ && webpack",
    })
    ccc.mergeJSONObject("./package.json", ["devDependencies"], {
        "rimraf": "latest",
        "webpack": "latest",
        "webpack-cli": "latest",
        "copy-webpack-plugin": "latest",
        "@babel/polyfill": "latest",
        "@babel/preset-env": "latest",
        "@babel/cli": "latest",
        "@babel/plugin-proposal-class-properties": "latest",
        "@babel/core": "latest",
        "@babel/node": "latest",
        "babel-loader": "latest"
    })
    let getBabel = ccc.readJSON("./node_modules/explain_me/.babelrc")
    ccc.writeJSON("./.babelrc", getBabel)
    let getWebpack = ccc.readFile("./node_modules/explain_me/webpack.config.js")
    ccc.writeFile("./webpack.config.js", getWebpack)
}

function addIndex(moduleName) {
    let string = `const ${moduleName} = require("./dist/index.js")\n
  module.exports =  ${moduleName} `
    ccc.writeFile("./index.js", string)
}

module.exports = { makeGlobal, addIndex }