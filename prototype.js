// 1.

const a = {
    showName: function(){
        console.log(this.name, this.lastName, this.age);
    }
}
function A(name, lastName, age){
this.name = name;
this.lastName = lastName;
this.age = age;
}
A.prototype = a;
const b = new A('Eduard', 'Melkonyan', 22)
b.showName();
//2.

const a = {
    name: 'Eduard'
}

const b = {
    lastName: 'Melkonyan'
}

const c = {
    age: 22,
    email: 'eduard@mail.ru'
}
const d = {
    getName: function(){
    console.log(this.name, this.lastName, this.age, this.email);
}
}
a.__proto__ = b;
b.__proto__ = c;
c.__proto__ = d;
a.getName();

// 3

const b = {
    name: 'Eduard',
    lastName: 'Melkonyan',
    age: 22,
    email: 'eduard@mail.ru'
}

const a = Object.create(b);
console.log(a.name, a.lastName, a.age, a.email);
