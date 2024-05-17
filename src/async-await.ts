const increment = (x:number) => x+1
const divide = (a:number, b:number) =>
    b === 0 ? Promise.reject(new Error("Cannot divide by zero"))
    :Promise.resolve(a/b)

const task1 = Promise.resolve(10)
const task2 = Promise.resolve(2)

const program = async function(){
    const a = await task1
    const b = await task2
    const n1 = await divide(a, b)
    const result = increment(n1)
    return result
}

program().then(console.log)