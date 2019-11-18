let Member = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// オブジェクト（クラス）にメソッドを追加する。
console.log("オブジェクト（クラス）にメソッドを追加する。");
/*
// オブジェクト（クラス）にメソッドを追加する。
Member.prototype.getName = function() {
    return this.firstName + this.lastName;
}
Member.prototype.getAge = function() {
    return this.age;
}
*/
// オブジェクト（クラス）にオブジェクト形式でメソッドを追加する。
Member.prototype = {
    getName: function() {
        return this.firstName + this.lastName;
    },
    getAge: function() {
        return this.age;
    }
};


var mem1 = new Member("first1", "last1", 15);
var mem2 = new Member("first2", "last2", 20);

console.log("mem1.getName():" + mem1.getName());
console.log("mem2.getName():" + mem2.getName());

// オブジェクト（インスタンス）にメソッドを追加する。
console.log("オブジェクト（インスタンス）にメソッドを追加する。");
mem2.getName = function() {
    return this.firstName + this.lastName;
}

// オブジェクト（クラス）のgetNameメソッドを参照する。
console.log("mem1.getName():" + mem1.getName());
console.log("mem1.getAge():" + mem1.getAge());
// オブジェクト（インスタンス）のgetNameメソッドを参照する。
console.log("mem2.getName():" + mem2.getName());
console.log("mem2.getAge():" + mem2.getAge());


// オブジェクト（クラス）にプロパティを追加する。
console.log("オブジェクト（クラス）にプロパティを追加する。");
Member.prototype.sex = "male";

console.log("mem1.sex:" + mem1.sex);
console.log("mem2.sex:" + mem2.sex);

// オブジェクト（インスタンス）にプロパティを追加する。
console.log("オブジェクト（インスタンス）にプロパティを追加する。");
mem2.sex = "female";

// オブジェクト（クラス）のsexプロパティを参照する。
console.log("mem1.sex:" + mem1.sex);
// オブジェクト（インスタンス）のsexプロパティを参照する。
console.log("mem2.sex:" + mem2.sex);
