import "./css/index.css"


const print = (str, time = 1500) => {
    return new Promise(resolve => {
        const timer = setTimeout(() => {
            console.log(str);
            clearTimeout(timer);
            resolve();
        }, time)
    })
}

print('print str in 1s', 1000).then(() => console.log('after promise'))
