import { Effect, Random } from "effect";

// creating operations with custom logic in promise
const task = new Promise<number>((resolve, reject) => {
   setTimeout(
    () => (Math.random() > 0.5 ? resolve(2) : reject("oh no")),
    300
  );
  
});

console.log(task);

const task1 = Effect.gen(function*(){
    yield* Effect.sleep("300 millis")
    return Math.random() > 0.5 ? 2 : yield* Effect.fail("oh no")
})

Effect.runPromise(task1).then(console.log)