const ccc = require("clear_concise_creative")


function addHomePageRepo(moduleName) {
    let readFile = ccc.readJSON("./package.json")
    if (!readFile["homepage"]) {
        ccc.appendToJSON("./package.json", "homepage", `https://zen-out.github.io/packages/${moduleName}`)
    }
    if (!readFile["repository"]) {
        ccc.mergeJSONObject("./package.json", ["repository"], {
            "type": "git",
            "url": `https://github.com/zen-out/${moduleName}.git`
        })
    }
    if (!readFile["author"]) {
        ccc.appendToJSON("./package.json", "author", `Lesley Cheung (www.github.com/zen-out)`)
    }
}

function addScript(moduleName = undefined) {
    addHomePageRepo(moduleName)
    ccc.mergeJSONObject("./package.json", ["scripts"], {
        "docs": "rm -rf docs && ./node_modules/.bin/jsdoc --configure ./jsdoc.json -d docs --verbose",
        "play": "node playground.js",
        "deploy": "npm run play && git add . && git commit -m 'updated' && git push && npm version patch && npm publish",
        "upgrade": "ncu --upgrade"
    })
    ccc.mergeJSONObject("./package.json", ["devDependencies"], {
        "gulp": "latest",
        "gulp-mocha": "latest",
        "code_clarity": "latest",
        "node_basetest": "latest",
    })
    ccc.mergeJSONObject("./package.json", ["dependencies"], {
        "whats_wrong": "latest",
        "explain_me": "latest"
    })
}

module.exports = { addScript }