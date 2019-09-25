
function searchRepository(forks_count) {
    // 通信オブジェクトを作成する。
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 通信完了および、レスポンスコードが200(成功)の場合に、リクエスト結果を参照する。
            var repository = JSON.parse(xhr.responseText);
            updateTable(repository);
            console.log(repository);
        } else {
            console.log("通信時にエラー発生");
        }
    })
    var url = `https://api.github.com/search/repositories?q=forks:>=${forks_count}&sort=stars&order=desc`;
    // 通信前の設定を実施する。
    // 第1引数は、HTTPメソッドを指定する。
    // 第2引数は、接続先URLを指定する。
    // 第3引数は、trueの場合は非同期通信、falseの場合は同期通信。
    xhr.open("GET", encodeURI(url), true);
    // 通信を開始する。
    xhr.send(null);
}

function updateTable(repository) {

}

window.addEventListener("load", function() {

    var reqButton = document.getElementById("req");
    
    reqButton.addEventListener("click", function() {
        searchRepository(100000);
    });

});
