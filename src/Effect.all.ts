import { Effect } from "effect";

const Task1 = Effect.gen(function*(){
    console.log("Task1 Executing")
    yield* Effect.sleep("100 millis")
    console.log("Tas1 done")
    return 1
})

const Task2 = Effect.gen(function*(){
    console.log("Task2 Executing")
    yield* Effect.sleep("100 millis")
    console.log("Task 2 done")
    return yield* Effect.fail("u oh no!")
})

const Task3 = Effect.gen(function*(){
    console.log("Task3 Executing")
    yield* Effect.sleep("100 millis")
    console.log("Task 3 done")
    return(2)
})

const program = Effect.all([Task1, Task2, Task3],{
    concurrency: "unbounded"
})

Effect.runPromise(program).then(console.log, console.error)