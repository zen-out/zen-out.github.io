```js
const make_fakes = require("make_fakes")

let hourglass = {
    public: "boolean",
    seconds: "number",
    start: "past_date",
    description: "paragraph",
    edit: "date",
    end: "future_date",
    status: ["to do", "doing", "done"],
    title: "string",
    email: "email",
    created: "number_date"
}

let getOne = make_fakes.createOne(hourglass, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 17 ~ getOne", getOne)

let getMany = make_fakes.createMany(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 17 ~ getOne", getMany)

let getOneDirty = make_fakes.createOneDirty(hourglass, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getOneDirty)

let getManyDirty = make_fakes.createManyDirty(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getManyDirty)
```