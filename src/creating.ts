import { Effect } from "effect"

// creating success promise
const success =  Promise.resolve(2)
console.log(success)

// creating failure promise
const failure = Promise.reject("oh no")
console.log(failure)

// creating succes Effect
const effectSuccess = Effect.succeed(2)
console.log(effectSuccess)

// creating failure Effect
const effectFailure = Effect.fail("oh no")
console.log(effectFailure)
