const items = ["Samsung Galaxy Z Flip 5", "iPhone 15", "Xiaomi Redmi 12"];

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const itemList = document.getElementById("itemList");
    const searchIcon = document.getElementById("searchIcon");

    searchInput.addEventListener("input", function () {
        navigateToPage(searchInput.value);
    });

    searchIcon.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== "") {
            redirectToPage(searchTerm);
        } else {
            console.log("Please enter a search term");
        }
    });
});

function navigateToPage(searchTerm) {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    if (searchTerm !== "") {
        items.forEach(item => {
            const formattedItem = item.toLowerCase();
            if (formattedItem.includes(searchTerm)) {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                listItem.addEventListener("click", function () {
                    document.querySelectorAll("#itemList li").forEach(li => {
                        li.classList.remove("selected");
                    });
                    listItem.classList.add("selected");
                    redirectToPage(item);
                });
                itemList.appendChild(listItem);
            }
        });

        itemList.style.display = itemList.children.length > 0 ? "block" : "none";
    } else {
        itemList.style.display = "none";
    }
}

function redirectToPage(item) {
    const pageName = item.toLowerCase();
    if ("samsung galaxy z flip 5".startsWith(item.toLowerCase())) {
        window.location.href = "samsung.html";
    } else if ("iphone 15".startsWith(item.toLowerCase())) {
        window.location.href = "iphone.html";
    } else if ("xiaomi redmi 12".startsWith(item.toLowerCase())) {
        window.location.href = "xiaomi.html";
    } else {
        console.log(item);
    }
}
