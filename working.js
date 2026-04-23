// let p = new Promise((resolve, reject) => {
//     app = 'BMS';
//     if (app == 'BMS') {
//         resolve('Welcome to BMS');
//     } else {
//         reject('App not found');
//     }
// })
// p.then((message) => {
//     console.log(message);
// }).then(() => {
//     console.log("Search for movie");
// }).then(() => {
//     console.log("Select movie");
// }).then(() => {
//     console.log("Select seats");
// }).then(() => {
//     console.log("Make payment");
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Thank you for using our service");
// });

// Promise with setTimeout function  Drawback of above code is 
// that all the steps are executing at the same time, we need 
// to use setTimeout function to make it sequential
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let app = 'BMS';
        if (app == 'BMS') {
            resolve('Welcome to BMS');
        } else {
            reject('App not found');
        }
    }, 2000);
})
p1.then((message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Search for movie");
        }, 2000);
    });
}).then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Select movie");
        }, 2000);
    });
}).then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Select seats");
        }, 2000);
    });
}).then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Make payment");
        }, 2000);
    });
}).then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
}).finally(() => {    
    console.log("Thank you for using our service");
});