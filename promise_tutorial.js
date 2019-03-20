
let promiseToCleanRoom = new Promise(function(resolve, reject){
   let isClean = false;

   if (isClean) {
       resolve('clean');
   } else {
       reject("not clean");
   }
});

promiseToCleanRoom.then(function(fromResolve) {
    console.log('The room is ' + fromResolve);
}).catch(function(fromReject) {
    console.log('the room is ' + fromReject);
});


// Chaining
let cleanTheRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('cleaned my room');
    });
};

let takeOutGarbage = function(message) {
    return new Promise(function(resolve, reject) {
       resolve(message + ', garbage was taken out');
    });
};

let eatIcecream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ', and ate icecream');
    });
};

cleanTheRoom().then(function(result) {
    return takeOutGarbage(result);
}).then(function(result) {
    return eatIcecream(result);
}).then(function(result) {
    console.log('finished work: ' + result);
});


Promise.all([cleanTheRoom(), takeOutGarbage(), eatIcecream()]).then(function() {
    console.log('All finished');
})

