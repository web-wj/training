"use strict";
(function () {
    // 抽象类中可以添加抽象方法，子类必须重写
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        constructor(name, age, sex) {
            super(name, age);
            this.sex = sex;
        }
        sayHello() {
            console.log('汪汪汪', this);
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵！', this);
        }
    }
    const tt = new Dog('旺财', 1, '雄');
    tt.sayHello();
    const mm = new Cat('咪咪', 30);
    mm.sayHello();
    const obj = {
        name: 'tim',
        age: 18,
        gender: '男'
    };
    console.log('obj:', obj);
    class MyClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    // 属性可以被修改会导致对象中的数据变得非常不安全
    // public 可以在任意位置修改
    // private 只能在当前类内部修改,需要和noemitonError 配合使用，子类不能用
    // protected 只能在当前类以及子类中访问修改
    class TestPer {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName () {
        //   console.log('name', this._name);
        //   return this._name;
        // }
        // 属性存取器
        get name() {
            console.log('name', this._name);
            return this._name;
        }
        setName(value) {
            this._name = value;
        }
        getAge() {
            console.log('age', this._age);
            return this._age;
        }
        // setAge (value: number) {
        //   if(value < 0) return;
        //   this._age = value;
        // }
        set age(value) {
            if (value < 0)
                return;
            this._age = value;
        }
    }
    const tim = new TestPer('tim', 18);
    console.log('tim.name: ', tim.name);
    // tim.setAge(-3);
    tim.age = -99;
    tim.getAge();
    // 简化
    class A {
        constructor(name) {
            this.name = name;
        }
    }
    const t = new A('tt');
    console.log(t);
})();
