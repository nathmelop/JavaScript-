// Fetch, Async/Await e EventEmitter 
//é uma maneira boa de usar o request pelo seu retorno 
/*
fetch('http://localhost:8080/data.json')
.then(ResponseStream => {
    if (ResponseStream.status ===200){
        return ResponseStream.json();
    } else {
        throw new Error('Request error'); 
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('error: ' , err)
})
*/
//ES7 async / await  é uma forma de criar pronts de maneira mais simples 

const asyncTimer = () =>
    new promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123456);
        }, 1000);
    });

const simpleFuc = async() => { //async não é mt utilizado sozinho, porq vem junto com o await 
    const data = await asyncTimer(); // ele aguarda a resolução de cima e depois retorna 
    return data;
};
simpleFuc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });