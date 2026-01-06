const containerBox = document.getElementById('container-box')
const bookmarkname = document.getElementById('bookmark-name');
const bookmarkurl = document.getElementById('bookmark-url');
const addBtn = document.getElementById('add-btn');
const container = document.getElementsByClassName('document');
const bookmarkList = document.getElementById('bookmark-list');


const result = addBtn.addEventListener("click", () => {
    const name1 = bookmarkname.value.trim();
    const url = bookmarkurl.value.trim();

    if(!url || !name1){
        alert("Please enter both name and url")
        return ;
    } else{
        if(!url.startsWith("http://") && !url.startsWith("https://")){
            alert("please enter valid url")
        }
        addBookmark(name1, url);
        saveBookmark(name1, url);
        bookmarkname.value = "";
        bookmarkurl.value = "";
    }
})

function addBookmark(name1, url){
    const li = document.createElement("li");
    const link = document.createElement("a")
    link.href = url;
    link.textContent = name1;
    link.target = "_blank"

    const removeBtn = document.createElement("button")
    removeBtn.innerHTML = "Remove";
    removeBtn.addEventListener("click", () => {
        bookmarkList.removeChild(li);
        removeBookmarkFromStorage(name1, url)
    })
    li.appendChild(link)
    li.appendChild(removeBtn);

    bookmarkList.appendChild(li);
}

function getBookmarksstorage(){
    const bookmarks = localStorage.getItem("bookmarks")
    return bookmarks ? JSON.parse(bookmarks) : []
}

function saveBookmark(name1, url){
    const bookmarks = getBookmarksstorage()
    bookmarks.push({name1, url})
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
}

function loadBookmarks(){
    let bookmarks = getBookmarksstorage()
    bookmarks.forEach((bookmark)=>{
        addBookmark(bookmark.name1, bookmark.url)
    })
}

function removeBookmarkStorage(name1, url){
    const bookmarks = getBookmarksstorage();
    bookmarks = bookmarks.filter((bookmark) => bookmark.name1 !== name1 || bookmark.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}


