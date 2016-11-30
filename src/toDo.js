var toDoList = function() {
    var input;
    var btnAdd;
    var toDoList;
    var finishList;

    (function init() {
        btnAdd = document.querySelector('#addItem');
        input = document.querySelector('#input');
        toDoList = document.querySelector('.toDo');
        finishList = document.querySelector('.finish');
        bindEvents();
    })();

    function bindEvents() {
        btnAdd.addEventListener('click', function() {
            var str = input.value;
            var newItem = document.createElement('li');
            newItem.innerHTML = str + `<div class='buttons'>
            <button class='del' ><i class='iconfont icon-error'></i> </button>
            <button class='fin'><i class='iconfont icon-right'></i></button>
          </div>`;
            newItem.querySelector('.del').addEventListener('click', deleteItem);
            newItem.querySelector('.fin').addEventListener('click', finishItem);
            if(toDoList.children.length){
                toDoList.insertBefore(newItem,toDoList.children[0]);
            }else{
            toDoList.appendChild(newItem);

            }
        })
    }

    function deleteItem() {
        event.preventDefault();
        var item = this.parentNode.parentNode;
        toDoList.removeChild(item);
    }

    function finishItem() {
        event.preventDefault();
        var item = this.parentNode.parentNode;
        var newItem = createItem(item.innerHTML);
        finishList.appendChild(newItem);
        toDoList.removeChild(item);
    }

    function createItem(innerHTML) {
        var newItem = document.createElement('li');
        newItem.innerHTML = innerHTML;
        return newItem;
    }
}();