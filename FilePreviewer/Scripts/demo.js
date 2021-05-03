window.onload = function () {
    toggleActiveAlways();
}
sidebarToggle();

function toggleActiveAlways() {
    const sidebarList = document.getElementById("sidebar-list");
    const listItems = sidebarList.getElementsByClassName("list-item");
    const path = location.href;
    Array.prototype.forEach.call(listItems, (listItem) => {
        let aHref = listItem.getElementsByTagName("a")[0].href;
        listItem.classList.toggle("active-always", aHref === path);
    });
}

function sidebarToggle() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarBrand = document.getElementById("sidebar-brand");
    sidebarBrand.addEventListener("click", () => {
        sidebar.classList.toggle('toggle');
        content.classList.toggle('toggle', sidebar.classList.contains('toggle'));
    })
}