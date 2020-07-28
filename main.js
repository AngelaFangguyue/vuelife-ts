// var a = 1;
// console.log(a);
// //3.5 ts函数的重载
// //ts为了兼容es5以及es6重载的写法和java中有区别
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// //ts中的重载
// //function getInfo(name: string): string;
// //function getInfo(str: number): number;
// // function getInfo(str: any): any {
// //   if (typeof str === "string") {
// //     return "我叫" + str;
// //   } else if (typeof str === "number") {
// //     return "年龄" + str;
// //   } else {
// //     return "传参有误";
// //   }
// // }
// //es5里面的类
// //最简单的类
// // function Person() {
// //   this.name = "张三";
// //   this.age = 20;
// //   this.run = function () {
// //     /*实例方法*/
// //     alert(this.name + "在奔跑");
// //   };
// // }
// //在原型链上定义属性和方法，原型链上面的属性会被多个实例共享
// //构造函数不会
// // Person.prototype.sex = "男";
// // Person.prototype.work = function () {
// //   alert(this.name + "在工作");
// // };
// // var p = new Person();
// // console.log(p);
// // var p1 = new Person();
// // console.log(p1);
// //3类里面的静态方法
// // Person.getInfo = function () {
// //   console.log("这是静态方法");
// // };
// //es5里的继承，原型链+对象冒充
// //1:对象冒充继承》对象冒充可以继承构造函数里面的属性和方法，但是没办法继承原型链上面的属性和方法
// // function son1() {
// //   Person.call(this);
// // }
// // var son11 = new son1();
// // son11.run();
// //son1.work(); //错误
// //2:原型链继承》虽然可以继承构造函数里的属性和方法，
// //以及原型链上的属性和方法，
// //但是构造实例的时候，不能传参,
// //即实例化子类的时候，不能给父类传参
// // function son2() {}
// // son2.prototype = new Person();
// ////////////////
// // function Person1(name, age) {
// //   this.name = name;
// //   this.age = age;
// //   this.run = function () {
// //     /*实例方法*/
// //     alert(this.name + "在奔跑11111");
// //   };
// // }
// // Person1.prototype.work = function () {
// //   alert(this.name + "在工作11111");
// // };
// // function son3(name, age) {}
// // son3.prototype = new Person();
// // var s3 = new s3("赵四", 20);
// // s3.run(); //undefined在奔跑11111
// //两者结合，原型链加对象冒充就可以解决上面的问题
// //原型链加对象冒充的另外一种写法、
// // function son4(name, age) {}
// // //son4.prototype = new Person();
// // son4.prototype = Person.prototype;
// // var s3 = new s3("赵四", 20);
// // s3.run(); //undefined在奔跑11111
// //ts中定义class
// class Per {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getName(): string {
//     return this.name;
//   }
//   setName(name: string): void {
//     this.name = name;
//   }
// }
// //ts中实现继承 extends  super
// class Personc {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   work() {
//     console.log(this.name + "working");
//   }
// }
// // var p1c = new Personc("xiaowang");
// // p1c.work();
// //ts中的类的继承
// class Personcson extends Personc {
//   constructor(name: string) {
//     super(name);
//   }
//   work() {
//     alert(`${this.name}1111`);
//   }
//   run() {
//     alert(`${this.name}2222`);
//   }
// }
// var pcs1 = new Personcson("fang");
// pcs1.work();
// //3 类里面的修饰符
// //public修饰符 保护类型，在类里面，子类里面可以访问，在类外部没法访问·
// class Person3 {
//   protected name: string;
//   //private name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayhi(): void {
//     console.log(`${this.name}+'sayhi'`);
//   }
// }
// var p3son = new Person3("lulu");
// alert(p3son.sayhi()); //保护类型，外部没办法访问
// //private 私有类型，只能在当前类中使用
// class Personprivate {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayhiprivate() {
//     return `${this.name}+sayhihihi`;
//   }
// }
// var perprivate = new Personprivate("ljlj");
// perprivate.sayhiprivate();
// //console.log(perprivate.name);//因为name是保护属性，故在外面访问不到
// //类定义 继承 修饰符
// //静态属性 静态方法
// //抽象类 继承多态
// //es5里的静态方法,静态方法的调用直接用类名.方法名
//多态：父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
//多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        //具体吃什么，不知道，由继承它的子类去实现，每个子类的表现不一样
        console.log("吃的方法");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "吃肉";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "吃老鼠";
    };
    return Cat;
}(Animal));
//ts中的抽象类 他是提供其他类继承的基类 不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现 必须在派生类中实现
//抽象方法只能放在抽象类中，抽象类中必须要有抽象方法，也可以有非抽象方法
//抽象类和抽象方法用来定义标准，标准：Animal1这个类要求他的子类必须包含eat方法
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    //可以定义其他方法，子类里可以不实现
    Animal1.prototype.run = function () {
        console.log("其他方法可以不实现");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        return _super.call(this, name) || this;
    }
    Dog1.prototype.eat = function () {
        this.name + "吃肉";
    };
    return Dog1;
}(Animal));
//抽象方法实现多态
//5:接口：
//5.1:属性类接口
//5.2:函数类型接口
//5.3:可索引接口
//5.4:类类型接口
//5.5:接口扩展
//5.1:
/*ts中自定义方法传入参数，对json进行约束*/
function printLabel(labelInfo) {
    console.log("labelInfo:", labelInfo);
}
function printName(name) {
    console.log(name.firstName + "--" + name.secondName);
}
var obj = { firstName: "张", secondName: "三", age: 20 };
printName(obj);
function printName1(name) {
    console.log(name.firstName + "--" + name.secondName);
}
var obj1 = { firstName: "张1", age: 20 };
printName1(obj1);
function ajax1(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("成功");
        }
    };
}
var fun1 = function (n, a) {
    return a + n;
};
console.log(fun1("fgy", 16));
//5.4可索引接口：数组 对象的约束
var arr = [1, 2, 3];
var arr1 = ["dong", "nan"];
var users = ["1", "2", "3"];
var users2 = { name: "tian", age: "18" };
var Dogg = /** @class */ (function () {
    function Dogg(name) {
        this.name = name;
    }
    Dogg.prototype.eat = function () {
        console.log(this.name);
    };
    return Dogg;
}());
var dog = new Dogg("笨笨");
dog.eat();
var Catt = /** @class */ (function () {
    function Catt(name) {
        this.name = name;
    }
    Catt.prototype.eat = function (food) {
        console.log(this.name + "吃" + food);
    };
    return Catt;
}());
var catt = new Catt("hua");
catt.eat("mouse");
//定义一个类去实现接口B
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
    }
    Web.prototype.eat = function (food) {
        console.log(this.name + "---" + food);
    };
    Web.prototype.work = function (job) {
        console.log(this.name + "---" + job);
    };
    return Web;
}());
//定义一个变量
var webli = new Web("lili");
webli.eat("rice");
webli.work("code");
//6：泛型：
//6.1：泛型定义
//6.2：泛型函数
//6.3：泛型类
//6.4：泛型接口
//泛型其实就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持
//any放弃了类型检查，传入什么返回什么
//泛型：可以支持不特定的数据类型  要求：传入和返回参数一致
function getData11(name) {
    return name;
}
console.log(getData11("fagnfang"));
/////////////类的泛型
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minnum = this.list[0];
        for (var j = 1; j < this.list.length; j++) {
            if (minnum < this.list[j]) {
                minnum = this.list[j];
            }
        }
        return minnum;
    };
    return MinClass;
}());
var infun1 = function (name1, value1) {
    return "\u8FD9\u662Finfun1\u51FD\u6570+" + name1 + "+\"--\"+" + value1;
};
var infun11 = function (name1) {
    return name1;
};
console.log(infun11(22));
function infun22(nn) {
    return nn;
} //定义一个泛型函数
var infun222 = infun22;
//infun222("111");//这种写法是错误的
infun222(111);
////////////把类作为参数类型的泛型类
//定义一个操作数据库的泛型类
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return Mysql;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.name = "XXXX";
u.age = 20;
var Db = new Mysql();
Db.add("111111");
Db.add(u);
var Db1 = new Mysql();
//Db1.add("111111");//上面指定了传入的为User类型，所以这样写是错误的
Db1.add(u);
/*

泛型接口
需要约束规范所以要定义接口；
需要代码重用所以用到泛型

*/
// interface DBI<T> {
//   add(info: T): boolean;
// }
// class MysqlDb<T> implements DBI<T> {
//   constructor() {
//     console.log("数据库建立连接");
//   }
//   add(info: T): boolean {
//     console.log("添加数据");
//     return true;
//     //throw new Error("Method not implemented.");
//   }
// }
/*
模块化
直接node运行
*/
/*命名空间：
命名空间和模块化的区别：
命名空间：内部模块，主要用于组织代码，避免命名冲突
模   块：ts外部模块的简称，侧重于代码的复用，一个模块里可能会有多个命名空间
*/
/*装饰器（其实就是一个方法）

常见的装饰器有：类装饰器 属性装饰器 方法装饰器 参数装饰器
装饰器的写法：普通装饰器（无法传参）  装饰器工厂（可以传参）


*/
/*1：类装饰器 */
function dec(params) {
    //params其实就是当前类
    params.prototype.dec1 = "dec1";
}
var Lei = /** @class */ (function () {
    function Lei() {
    }
    Lei.prototype.say = function () {
        console.log("saysaysay");
    };
    Lei = __decorate([
        dec
    ], Lei);
    return Lei;
}());
var lei1 = new Lei(); //这个地方需要给lei1声明一下类型，
console.log(lei1.dec1);
