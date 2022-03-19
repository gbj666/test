//$on $emit $off

class Event {
    constructor() {
        this.list = {}
    }

    $on(name, fn) {
        (this.list[name] || (this.list[name] = [])).push(fn)
    }

    $emit(name, arg) {
        let cbs = this.list[name]
        if (cbs) {
            cbs.forEach(v => {
                v.call(this, arg)
            })
        }
    }

    $off(name) {
        this.list[name] = null
    }
}
let event = new Event()
event.$on('event1', function (arg) {
    console.log('事件1', arg)
})
event.$on('event2', function (arg) {
    console.log('事件2', arg)
})

event.$emit('event1', {
    name: 'gbj'
})
event.$emit('event2', {
    age: '20'
})