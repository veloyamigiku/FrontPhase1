window.addEventListener("load", function() {
    var target1;
    var target2;
    var target3;

    target1 = document.getElementById("target1");
    target1.addEventListener(
        "click",
        function() {
            console.log("cap_click_target1");
        },
        /*
        本引数が
        trueの場合は、キャプチャ時のイベント処理とする。
        falseの場合は、バブリング時のイベント処理とする。
        */
        true);
    target1.addEventListener(
        "click",
        function() {
            console.log("bub_click_target1");
        },
        false);
    target2 = document.getElementById("target2");
    target2.addEventListener(
        "click",
        function(event) {
            console.log("cap_click_target2");
        },
        true);
    target2.addEventListener(
        "click",
        function() {
            // stopPropagationは、本関数以外のロジックを実行して、イベント伝播を停止する。
            // stopImmediatePropagationは、本関数以外のロジックを実行せず、イベント伝播を停止する。
            event.stopPropagation();
            console.log("bub_click_target2");
        },
        false);
    
    target3 = document.getElementById("target3");
    target3.addEventListener(
        "click",
        function(event) {
            console.log("cap_click_target3");
        },
        true);
    target3.addEventListener(
        "click",
        function(event) {
            console.log("bub_click_target3");
            
            // preventDefaultは、イベント発生元の動作（リンクのクリックによる画面遷移）をキャンセルする。
            event.preventDefault();
        },
        false);
    
});
