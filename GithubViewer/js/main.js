
function searchRepository(name) {
    // 通信オブジェクトを作成する。
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // 通信完了および、レスポンスコードが200(成功)の場合に、リクエスト結果を参照する。
                var repository = JSON.parse(xhr.responseText);
                updateTable(repository);
                console.log(repository);
            } else {
                console.log("status:" + xhr.status);
            }
        } else {
            console.log("通信中");
        }
    })
    var url = `https://api.github.com/search/repositories?q=${name} in:name&sort=stars&order=desc`;
    // 通信前の設定を実施する。
    // 第1引数は、HTTPメソッドを指定する。
    // 第2引数は、接続先URLを指定する。
    // 第3引数は、trueの場合は非同期通信、falseの場合は同期通信。
    xhr.open("GET", encodeURI(url), true);
    // 通信を開始する。
    xhr.send(null);
}

function updateTable(repository) {

    // getElementByIdは、要素のIDを元に参照する。
    var preTable = document.getElementById("github");
    if (preTable != null) {
        // removeChildは、呼び出し元の子要素を削除する。
        document.getElementById("wrap_table").removeChild(preTable);
    }

    var items = repository["items"];
    if (items == null) {
        console.log("item項目無し");
        return;
    }

    var wrapTable = document.getElementById("wrap_table");
    // createElementは、指定の名前の要素を作成する。
    var table = document.createElement("table");
    // setAttributeは、要素に属性（属性名と値）を設定する。
    table.setAttribute("id", "github");
    // appendChildは、呼び出し元に要素を子要素として追加する。
    wrapTable.appendChild(table);
    var headTr = document.createElement("tr");
    var headIdTh = document.createElement("th");
    // textContentは、要素の本体を参照・設定する。
    headIdTh.textContent = "ID";
    var headNameTh = document.createElement("th");
    headNameTh.textContent = "Name";
    headTr.appendChild(headIdTh);
    headTr.appendChild(headNameTh);
    table.appendChild(headTr);
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var id = item["id"];
        var idTd = document.createElement("td");
        idTd.textContent = id;
        var name = item["name"];
        var nameTd = document.createElement("td");
        nameTd.textContent = name;
        var tr = document.createElement("tr");
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        table.append(tr);
    }

}

window.addEventListener("load", function() {

    var searchButton = document.getElementById("search");
    
    searchButton.addEventListener("click", function() {
        var name = document.getElementById("name").value;
        searchRepository(name);
    });

});
