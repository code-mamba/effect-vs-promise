const Task1 = new Promise((resolve, reject) => {
  console.log("Task1 done");
  setTimeout(() => {
    resolve(1);
  }, 100);
});

const Task2 = new Promise((resolve, reject) => {
  console.log("Task2 done");
  setTimeout(() => {
    reject("uh no!");
  }, 100);
});

const Task3 = new Promise((resolve, reject)=> {
    console.log("Task3 done")
    setTimeout(()=>{
        resolve(3)
    })
})

const Program = Promise.all([Task1, Task2, Task3])
Program.then(console.log, console.error)