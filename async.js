//asynchronous Javascript
console.log ("I am First");
setTimeout (() =>{
    console.log ("i am second");
    setTimeout (() => {
        console.log ("i am third");
    }, 1000);
}, 2000);

console.log ("i am fourth");
//Expected output;
//I am first
// i am fourth
// i am second
// i am third



 async function dataFromServe() {
    fetch ("http://example.com/songs")
    .then ((response) => response.json())
    .then((data) => {
        return { status:}
    })
    return {
        name: "michael",
        age: 34,
    };
}

function display () {
    // callback 

    // data from the respective server
    const data = dataFromServe ();

    document.write (data.name);
}
display()