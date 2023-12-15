const counter = async () => {
    let count = 0;
    while (true) {
       await wait(1000);
       count++;
       console.log(count);
    }
}

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

counter();