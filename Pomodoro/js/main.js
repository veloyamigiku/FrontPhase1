var timerStart = null;
var timerStop = null;
var timerClear = null;
var timerSetup = null;
var timerSetupDone = null;
var timerMm = null;
var timerSs = null;
var timerMmInput = null;
var timerSsInput = null;

// 画面表示後のイベント処理を定義する。
window.addEventListener("load", function() {


    /* タイマー開始ボタンのイベント処理を定義する。 */
    timerStart = document.getElementById("timer-start");
    timerStart.addEventListener("click", function() {
        timerStart.style.display = "none";
        timerStop.style.display = "block";
        timerClear.style.display = "none";
        timerSetup.style.display = "none";
    });

    /* タイマー停止ボタンのイベント処理を定義する。 */
    timerStop = document.getElementById("timer-stop");
    timerStop.addEventListener("click", function() {
        timerStart.style.display = "block";
        timerStop.style.display = "none";
        timerClear.style.display = "block";
        timerSetup.style.display = "block";
    });

    /* タイマークリアボタンのイベント処理を定義する。 */
    timerClear = document.getElementById("timer-clear");
    timerMm = document.getElementById("timer-mm");
    timerSs = document.getElementById("timer-ss");
    timerMmInput = document.getElementById("timer-mm-input");
    timerSsInput = document.getElementById("timer-ss-input");
    timerClear.addEventListener("click", function() {
        timerMm.textContent = timerMmInput.value;
        timerSs.textContent = timerSsInput.value;
    });

    /* タイマー設定ボタンのイベント処理を定義する。 */
    timerSetup = document.getElementById("timer-setup");
    timerSetup.addEventListener("click", function() {
        
        timerSetup.style.display = "none";
        var timerSettingRows = document.getElementsByClassName("timer-setting-row");
        for (var i = 0; i < timerSettingRows.length; i++) {
            timerSettingRows[i].style.display = "block";
        }

    });

    /* タイマー設定完了ボタンのイベント処理を定義する。 */
    timerSetupDone = document.getElementById("timer-setup-done");
    timerSetupDone.addEventListener("click", function() {
        
        timerSetup.style.display = "block";
        var timerSettingRows = document.getElementsByClassName("timer-setting-row");
        for (var i = 0; i < timerSettingRows.length; i++) {
            timerSettingRows[i].style.display = "none";
        }

    });

});
