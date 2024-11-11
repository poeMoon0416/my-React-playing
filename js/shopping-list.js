// 生jsにおけるDOM操作 / https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// Reactチュートリアルからのリンク / https://nextjs.org/learn/react-foundations/rendering-ui
const item = document.querySelector("#item");
item.focus();
const addItemBtn = document.querySelector("#add-item-btn");
const shoppingList = document.querySelector("#shopping-list");

// 該当の買い物を削除
function delItemBtnClickHandler(e) {
    e.target.parentNode.remove();
}

// 新しい買い物を追加
function addItemBtnClickHandler(e) {
    // 前処理(バリデーション)
    if (item.value === "") {
        alert("New item is empty, enter item!")
        return;
    }

    // 要素の作成
    const li = document.createElement("li");
    const span = document.createElement("span");
    const text = document.createTextNode(item.value)
    const delItemBtn = document.createElement("button");
    delItemBtn.textContent = "delete";
    delItemBtn.addEventListener("click", delItemBtnClickHandler);

    // ツリー構築
    shoppingList.appendChild(li);
    li.appendChild(span);
    span.appendChild(text);
    li.appendChild(delItemBtn);

    // 後処理(リセット)
    item.value = "";
    item.focus();
}

addItemBtn.addEventListener("click", addItemBtnClickHandler);
