
// 画面表示後のイベント処理を定義する。
window.addEventListener("load", function() {

    var timerStart = document.getElementById("timer-start");
    timerStart.addEventListener("click", function() {
        var timerMmInput = document.getElementById("timer-mm-input");
        var timerSsInput = document.getElementById("timer-ss-input");
        var timerMm = document.getElementById("timer-mm");
        var timerSs = document.getElementById("timer-ss");
        timerMmInput.sytle.display = "none";
        timerSsInput.sytle.display = "none";
        timerMm.sytle.display = "block";
        timerSs.sytle.display = "block";
    })
});
