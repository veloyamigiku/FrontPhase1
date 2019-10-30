console.log("====グローバルスコープ_1====");
console.log("globalVal1:" + globalVal1);
// globalVal1:globalVal1

// グローバルスコープ
var globalVal1 = "globalVal1";

// 関数スコープ
function sampleFunction1() {
    var funcVal1 = "funcVal1";

    // ローカルスコープ（ブロックスコープ）
    // ES2015以前（ブラウザetc）は、ブロックスコープは無い。
    for (var blockVal2 = 0; blockVal2 < 3; blockVal2++) {
        console.log("====ローカルスコープ（ブロックスコープ）_1====");
        console.log("blockVal2:" + blockVal2);
        // blockVal2:0
        // blockVal2:1
        // blockVal2:2
    }

    console.log("====関数スコープ_1====");
    console.log("globalVal1:" + globalVal1);
    // globalVal1:globalVal1
    console.log("funcVal1:" + funcVal1);
    // funcVal1:funcVal1
    console.log("blockVal1:" + blockVal1);
    // blockVal1:3
    console.log("blockVal2:" + blockVal2);
    // blockVal2:3
}

// ローカルスコープ（ブロックスコープ）
// ES2015以前（ブラウザetc）は、ブロックスコープは無い。
console.log("====ローカルスコープ（ブロックスコープ）_2====");
for (var blockVal1 = 0; blockVal1 < 3; blockVal1++) {
    console.log("globalVal1:" + globalVal1);
    // globalVal1:globalVal1
    
    //console.log("funcVal1:" + funcVal1);
    // Uncaught ReferenceError: funcVal1 is not defined
    
    console.log("blockVal1:" + blockVal1);
    // blockVal1:0
    // blockVal1:1
    // blockVal1:2
    
    //console.log("blockVal2:" + blockVal2);
    // Uncaught ReferenceError: blockVal2 is not defined

}

console.log("====グローバルスコープ_2====");
console.log("globalVal1:" + globalVal1);
// globalVal1:globalVal1

//console.log("funcVal1:" + funcVal1);
// Uncaught ReferenceError: funcVal1 is not defined

console.log("blockVal1:" + blockVal1);
// blockVal1:3

//console.log("blockVal2:" + blockVal2);
// Uncaught ReferenceError: blockVal2 is not defined

sampleFunction1();
