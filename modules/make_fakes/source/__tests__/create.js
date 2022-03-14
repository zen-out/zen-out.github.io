const makeFakes = require("../dist/index.js")
const t = require("node_basetest")
let hourglass = {
    public: "boolean",
    seconds: "number",
    start: "past_date",
    end: "future_date",
    status: ["to do", "doing", "done"],
    title: "string",
    email: "email",
    created: "number_date"
}
describe("create accurately grabs data", () => {
    it("can generate data based on object and number", () => {

        let getOne = makeFakes.createOne(hourglass)

        let startDate = typeof getOne.start === "object"
        let numberDate = typeof getOne.created === "number"
        let number = typeof getOne.seconds === "number"
        let getRandom = typeof getOne.status === "string"
        t.T(startDate)
        t.T(numberDate)
        t.T(number)
        t.T(getRandom)


    })
    it("can generate an array of objects", () => {
        let getMany = makeFakes.createMany(hourglass, 10, {})
        let length = getMany.length === 10
        t.T(length)
    })
    it("can also get an array of objects", () => {
        let getOne = makeFakes.createOne(hourglass, { merged: "item" })
        console.log(getOne)
        t.HAS(getOne, "item")

        let getMany = makeFakes.createMany(hourglass, 2, true, { merged: "item" })
        console.log(getMany)

        t.HAS(getMany, "item")
    })
    it("can also get an array of objects", () => {
        let getOne = makeFakes.createOneDirty(hourglass, { merged: "item" })
        console.log(getOne)
        t.HAS(getOne, "item")

        let getMany = makeFakes.createManyDirty(hourglass, 2, true, { merged: "item" })
        console.log(getMany)

        t.HAS(getMany, "item")
    })
})