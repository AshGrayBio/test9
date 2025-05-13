document.getElementById("category").addEventListener("click", function() {
    const subMenu = document.getElementById("cat_items");
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
      subMenu.style.display = "block";
    } 
    
    else {
      subMenu.style.display = "none";
    }
    
    console.log(subMenu.style.display)
  });
  