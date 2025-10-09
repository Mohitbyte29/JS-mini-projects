const mylist = document.querySelector(".my-list")
        const fruitBox = document.getElementById("fruitBox")
        
        const getTodoListFromLocal = () => {
            return JSON.parse(localStorage.getItem("youtubeTodoList"));
        }

        const addTodoListLocalStorage = (local) => {
            return localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists))
        }

        let localTodoLists = getTodoListFromLocal() || [];// Prevent localTodoList not a function error
        
        const addTodoDynamicElement = (CurElem) => {
            const divElement = document.createElement("div");
                divElement.classList.add("main-todo-div");
                divElement.innerHTML = `<li>${CurElem}</li> <button class="delete-btn">Delete</button>`;
                mylist.append(divElement);
        }

        const addTodolist = (e) => {
            e.preventDefault();

            const todoListValue = fruitBox.value.trim();
            fruitBox.value = "";

            if(todoListValue !== "" && !localTodoLists.includes(todoListValue)){ //mtlb agr included/already present h to mt jao andar

                localTodoLists.push(todoListValue);
                localTodoLists = [... new Set(localTodoLists)];
                console.log(localTodoLists);
                localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists));
    
                addTodoDynamicElement(todoListValue);
            }
        }

        const showTodoList = () => {
            console.log(localTodoLists);

            localTodoLists.forEach((CurElem) => {
                addTodoDynamicElement(CurElem);
            });
        };

        showTodoList();

        // remove the data
        const removeTodoElem = (e) => {
            const todoToRemove = e.target;
            let todoListContent = todoToRemove
            let parentElem = todoToRemove.parentElement;
            console.log(todoListContent);

            localTodoLists = localTodoLists.filter((currTodo) => {
                return currTodo !== todoListContent.toLowerCase();
            })

            parentElem.remove();

            console.log(localTodoLists);
        };

        mylist.addEventListener("click", (e) => {
            e.preventDefault();
            if(e.target.classList.contains("delete-btn")){
                removeTodoElem(e);
            };

        });

        document.querySelector("#addBox").addEventListener("click", (e) => {
            addTodolist(e);
        });