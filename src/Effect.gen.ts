import { Effect } from "effect";

const increment = (x:number) => x+1 

const divide = (a:number, b:number) =>
    b === 0 ? Effect.fail(new Error("Unable to divide by zero"))
    :Effect.succeed(a/b)

const task1 = Effect.promise(()=> Promise.resolve(10))
const task2 = Effect.promise(()=> Promise.resolve(2))

const program = Effect.gen(function*(){
    const a = yield* task1
    const b = yield* task2
    const n1 = yield* divide(a, b)
    const result = increment(n1)
    return result
})

Effect.runPromise(program).then(console.log)