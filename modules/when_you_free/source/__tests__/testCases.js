let getThis = getDate(".git");
console.log("🚀 ~ file: getType.js ~ line 32 ~ getThis", getThis)

let shouldPass = getDate("Mar 20, 2020")
console.log("🚀 ~ file: getType.js ~ line 44 ~ shouldPass", shouldPass)

let checkDate = getDate("March 20 2012")
console.log("🚀 ~ file: getType.js ~ line 33 ~ checkDate", checkDate)
let getTime = getDate("14:22:00")
console.log("🚀 ~ file: getType.js ~ line 49 ~ getTime", getTime)

let output3 = getDate("22:44")


console.log("🚀 ~ file: getType.js ~ line 34 ~ output3", output3)
let output10 = getDate("01/12/2022")
console.log("🚀 ~ file: getType.js ~ line 35 ~ output10", output10)
let output11 = getDate("2022/02/02")
console.log("🚀 ~ file: getType.js ~ line 36 ~ output11", output11)
let output6 = getDate("14-1-2022")
console.log("🚀 ~ file: getType.js ~ line 37 ~ output6", output6)
let output7 = getDate("13-01-2018")
console.log("🚀 ~ file: getType.js ~ line 38 ~ output7", output7)
let output5 = getDate("2019-2-10")
console.log("🚀 ~ file: getType.js ~ line 39 ~ output5", output5)
let output4 = getDate("2020-02-22")
console.log("🚀 ~ file: getType.js ~ line 40 ~ output4", output4)
let output12 = getDate("Mar 2 2019")
console.log("🚀 ~ file: getType.js ~ line 41 ~ output12", output12)
let output14 = getDate("Mar 2 2022")
console.log("🚀 ~ file: getType.js ~ line 42 ~ output14", output14)
let falseThis = getDate("digital")
console.log("🚀 ~ file: getType.js ~ line 42 ~ trueThis", falseThis)
let output15 = getDate(new Date())
console.log("🚀 ~ file: getType.js ~ line 65 ~ output15", output15)