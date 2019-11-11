console.log("====グローバルスコープ_1====");
console.log("globalVal1:" + globalVal1);
// globalVal1:globalVal1

// グローバルスコープ
var globalVal1 = "globalVal1";


// 即時実行関数によるスコープ
(function() {
    console.log("====即時実行関数のスコープ====")
    var immediate = "immediate";
    console.log("immediate:" + immediate);
})();
//console.log(":" + immediate);
// Uncaught ReferenceError: immediate is not defined

// 関数スコープ
function sampleFunction1() {
    var funcVal1 = "funcVal1";

    // ローカルスコープ（ブロックスコープ）
    // var宣言の変数は、ブロックスコープを無視して直近のスコープ（関数）に巻き上げられる。
    for (var blockVal2 = 0; blockVal2 < 3; blockVal2++) {
        console.log("====ローカルスコープ（ブロックスコープ）_1====");
        console.log("blockVal2:" + blockVal2);
        // blockVal2:0
        // blockVal2:1
        // blockVal2:2
    }

    // ローカルスコープ（ブロックスコープ）
    // let宣言の変数は、ブロックスコープが適用される。
    for (let blockVal3 = 0; blockVal3 < 3; blockVal3++) {
        console.log("====ローカルスコープ（ブロックスコープ）_3====");
        console.log("blockVal3:" + blockVal3);
        // blockVal3:0
        // blockVal3:1
        // blockVal3:2
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
    //console.log("blockVal3:" + blockVal3);
    // Uncaught ReferenceError: blockVal3 is not defined
}

// ローカルスコープ（ブロックスコープ）
// var宣言の変数は、ブロックスコープを無視して直近のスコープ（グローバル）に巻き上げられる。
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
    //console.log("blockVal3:" + blockVal3);
    // Uncaught ReferenceError: blockVal3 is not defined

}

console.log("====グローバルスコープ_2====");
console.log("globalVal1:" + globalVal1);
// globalVal1:globalVal1

//console.log("funcVal1:" + funcVal1);
// Uncaught ReferenceError: funcVal1 is not defined

console.log("blockVal1:" + blockVal1);
// blockVal1:3

sampleFunction1();

//console.log("blockVal2:" + blockVal2);
// Uncaught ReferenceError: blockVal2 is not defined

//console.log("blockVal3:" + blockVal3);
// Uncaught ReferenceError: blockVal3 is not defined
