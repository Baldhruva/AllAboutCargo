// ------> Generating random numbers
// const num2digit = Math.floor(Math.random() * 90) + 10;
// console.log(num2digit); 

// ------> Learning String functions
// const sentence = "Hello World Sucks"
// console.log(sentence.toUpperCase())

// ------> Learning Array functions
// const words = ['I', 'Love', 'Pizza', 'and', 'Vada', 'Pav'];
// const sentence = words.join(" ");
// console.log(sentence); 

// const unsorted = [4, 1, 5, 6, 2, 3, 7];
// // const sorted = unsorted.sort();
// console.log(unsorted.sort());



// ------> Callbackhell, Promise, Async, Await 

// -->3 tasks to do : Wake up, Breath, Eat

const WakeUp = (callback) => {
    setTimeout(()=>{
       console.log("I Woke Up");
       callback();
    },100);
}

const WakeHerUp = (callback) => {
    setTimeout(()=>{
        console.log("Then Woke Her Up with a creampie");
        callback();
    },4000);

}

const Breath = (callback) => {
    setTimeout(()=>{
       console.log("Took a deep breath");
       callback();
    }, 2000);
}

const Eat = (callback) => {
    setTimeout(()=>{
        console.log("Ate some delicious breakfast, licked it off her boobies");
        callback();
    },3000);
}

WakeUp(()=>{
    Breath(()=>{
        WakeHerUp(()=>{
            Eat(()=>{
                console.log("That's a nice start to a perfect Sunday");
            })
        })
    })
});

//How does this code run in order? How bissshh? how bishhhhhhhh???
const wait = (ms) => new Promise(res => setTimeout(res, ms));

const runUIFlow = async () => {
  console.log("🌀 Showing spinner...");
  await wait(3000);

  console.log("📡 Fetching data...");
  await wait(3000);

  console.log("❌ Removing spinner...");
  await wait(1000);

  console.log("📊 Showing data...");
  await wait(2000);
};

runUIFlow();
