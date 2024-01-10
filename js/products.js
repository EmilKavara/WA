function changePage(page){
    if(page=="speaker"){
        window.location.href="speaker.html";
    }else if(page=="charger"){
        window.location.href="charger.html";
    }else if(page=="airpods"){
        window.location.href="airpods.html";
    }else if(page=="iphone"){
        window.location.href="iphone.html";
    }else if(page=="xiaomi"){
        window.location.href="xiaomi.html";
    }else if(page=="samsung"){
        window.location.href="samsung.html";
    }
}

document.getElementById('categoryFilter').addEventListener('change', updateGrid);
document.getElementById('brandFilter').addEventListener('change', updateGrid);
    function updateGrid() {
        var categoryFilter = document.getElementById('categoryFilter').value;
        var brandFilter = document.getElementById('brandFilter').value;   
        var gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(function(item) {
          var itemCategory = item.getAttribute('data-category');
          var itemBrand = item.getAttribute('data-brand');  
          var categoryMatch = categoryFilter === '' || itemCategory === categoryFilter;               
          var brandMatch = brandFilter === '' || itemBrand === brandFilter;
          item.style.display = categoryMatch && brandMatch ? 'block' : 'none';
          });
    }