window.onload = function () {
    toggleActiveAlways();
}

function toggleActiveAlways() {
    const sidebarList = document.getElementById("sidebar-list");
    const listItems = sidebarList.getElementsByClassName("list-item");
    const path = location.href;
    Array.prototype.forEach.call(listItems, (listItem) => {
        let aHref = listItem.getElementsByTagName("a")[0].href;
        listItem.classList.toggle("active-always", aHref === path);
    });
}