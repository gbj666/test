//4.3.实现instanceOf方法

const instanceOf = (a, b) => {
    let bPrototype = b.prototype; //获取右侧构造函数对应的原型
    let aProto = a.__proto__; //获取左侧实例对应的原型
    while (true) {
        if (aProto === null) {
            return false;
        } else if (aProto === bPrototype) {
            return true;
        }
        aProto = aProto.__proto__;
    }
}

function F () {}
let c = new F()
console.log(instanceOf(c,F))