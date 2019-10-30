import { searchRepository } from "./common.js";

function updateTable(repository) {
    // 変数の巻上げ（ホイスティング）のサンプル。
    // 関数スコープ直下の変数巻上げ。
    var preTable;
    var items;
    var wrapTable;
    var table;
    var headTr;
    var headIdTh;
    var headNameTh;
    // for文内の変数巻上げ。
    var i;
    var item;
    var id;
    var idTd;
    var name;
    var nameTd;
    var tr;

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
        searchRepository(
            name,
            function(responseText) {
                var repository = JSON.parse(responseText);
                updateTable(repository);
                console.log(repository);
            }
        );
    });

});
