const make_fakes = require("./dist/index.js")

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


// let getManyDirty = makeFakes.createManyDirty(hourglass, 2, true)
// console.log("🚀 ~ file: playground.js ~ line 18 ~ getManyDirty", getManyDirty)
let getOne = make_fakes.createOne(hourglass)
console.log("🚀 ~ file: playground.js ~ line 16 ~ getOne", getOne)
    // let getOneDirty = makeFakes.createOneDirty(hourglass)
    // console.log("🚀 ~ file: playground.js ~ line 18 ~ getOneDirty", getOneDirty)

// let getMany = makeFakes.createMany(hourglass, 2, true)
// console.log(getMany)
// let date = makeFakes.createOne({ hello: "date" })
// console.log("🚀 ~ file: playground.js ~ line 21 ~ date", date)
// let date2 = makeFakes.createOneDirty({ hello: "date" })
// console.log(date2)