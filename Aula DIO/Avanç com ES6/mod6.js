/*
function doSomething (callback){
    setTimeout(function(){
        //did something 
        callback('first data');
    }, 1000);
}
function doOtherThing(callback){
    setTimeout(function(){
        //did other  thing 
        callback('second data');
    }, 1000);
}

function doAll() {
    doSomething(function(data){
        var processedData = data.split ('');

        doOtherThing(function(data2){
            var processedData2 = data2.split('');
            setTimeout(function(){
                console.log(processedData, processedData2);
            }, 1000);
        });
    });
}
doAll();

//promisses  pode ter 3 estados pending , fulfilled, rejected 

const doSomethingPromise = new Promise ((resolve , reject)=> {
    throw new Error  ('something went wrong');
    setTimeout (function(){
        resolve('first data');
        }, 1000);
});
const doOtherthingPrimise = new Promise ((resolve , reject) => {
    setTimeout (function(){
        resolve('second data');
        }, 1000);
});

doSomethingPromise.then(data => console.log(data))
.catch(error => console.log(error));   
*/

//pegar os dados e invocar uma nova promise, permite  encadear uma na outra 
//executou as duas em paralelo  em vez de ser sequencial 
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('first data');
        }, 1000);
    });
const doOtherthingPrimise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('second data');
        }, 1000);
    });
Promise.all([doSomethingPromise(), doOtherthingPrimise()]).then((data) => {
    console.log(data);
});