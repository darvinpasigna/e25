class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

// add element to top of stack
push(element) {
    this.items[this.count] = element
    console.log(`${element} added to ${this.count}`)
    this.count +=1
    return this.count - 1
}
pop() {
    if(this.count == 0) return undefined
    let deleteItem = this.items[this.count - 1]
    this.count -= 1
    console.log(`${deleteItem} removed`)
    return deleteItem
}
peek() {
    console.log(`top element is ${this.items[this.count - 1]}`)
    return this.items[this.count - 1]
}
isEmpty() {
    console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
    return this.count == 0
}
size()  {
    console.log(`${this.count} element in stack`)
    return this.count
}
print() {
    let str = ''
    for (let i = 0; i < this.count; i++) {
        str += this.items[i] + ' '
    }
    return str
}
clear() {
    this.items = []
    this.count = 0
    console.log('Stack cleared..')
    return this.items
}
}


const stack = new Stack ()

$(document).ready(function(){
    $("#stack").prepend(`<div class="push">${stack.isEmpty()}</div>`);

    $("#stack").prepend(`<div class="push">${stack.push(100)[0]}</div>`);
    $("#stack").prepend(`<div class="push">${stack.push(200)[0]}</div>`);

    $("#stack").prepend(`<div class="push">${stack.peek()}</div>`);

    $("#stack").prepend(`<div class="push">${stack.push(300)[0]}</div>`);

    $("#stack").prepend(`<div class="push">${console.log(stack.print())}</div>`);

    $("#stack").prepend(`<div class="push">${stack.pop()}</div>`);
    $("#stack").prepend(`<div class="push">${stack.pop()}</div>`);

    $("#stack").prepend(`<div class="push">${stack.clear()}</div>`);

    $("#stack").prepend(`<div class="push">${console.log(stack.print())}</div>`);

    $("#stack").prepend(`<div class="push">${stack.size()}</div>`);

    $("#stack").prepend(`<div class="push">${stack.isEmpty()}</div>`);
});

// stack.isEmpty()

// stack.push(100)
// stack.push(200)

// stack.peek()

// stack.push(300)

// console.log(stack.print())

// stack.pop()
// stack.pop()

// stack.clear()

// console.log(stack.print())

// stack.size()

// stack.isEmpty()


