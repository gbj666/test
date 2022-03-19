//红绿灯问题

const red = () => {
    return new Promise(function (resolve, reject) {
        console.log('红灯');
        setTimeout(function () {
            resolve(green());
        }, 2000)
    })
}

const green = () => {
    return new Promise(function (resolve, reject) {
        console.log('绿灯');
        setTimeout(function () {
            resolve(yellow());
        }, 3000)
    })
}

const yellow = () => {
    return new Promise(function (resolve, reject) {
        console.log('黄灯');
        setTimeout(function () {
            resolve(red());
        }, 1000)
    })
}
red();