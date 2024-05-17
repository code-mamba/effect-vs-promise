const one = new Promise<number>((resolve, reject)=>{
    console.log("executing task1..")
    setTimeout(()=>{
        console.log("task1 done")
        resolve(1)
    },100)
})

const two = new Promise<number>((resolve, reject)=>{
    console.log("executing task 2..")
    setTimeout(()=>{
        console.log("task2 done")
        reject("oh no")
    },100)
})

const three = new Promise<number>((resolve, reject) => {
    console.log("executing task 3...")
    setTimeout(()=>{
        console.log("task 3 done")
        resolve(3)
    },100)
})

const Program1 =Promise.allSettled([one, two, three])
Program1.then(console.log, console.error)