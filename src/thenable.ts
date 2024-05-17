import { Effect } from "effect"

// mapping the result of the operation promise
const result = Promise.resolve("Hello").then((s)=> console.log(s.length))
console.log(result)

const effectResult = Effect.succeed("Hello").pipe(
    Effect.map((s)=> s.length)
)
console.log(Effect.runSync(effectResult))

 Promise.resolve("Hello").then((s)=> console.log(Promise.resolve(s.length-1)))

 const effectFlatMapped = Effect.succeed("hello").pipe(
    Effect.flatMap((s)=> Effect.succeed(s.length-2))

 )

console.log(Effect.runSync(effectFlatMapped))

