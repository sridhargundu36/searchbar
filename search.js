let dropdownbtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");


// dropdown list showing 
dropdownbtn.onclick = function () {
    if(list.classList.contains("show")){
        icon.style.rotate = "0deg";

    }else{
        icon.style.rotate = "-180deg";

    }
  
    list.classList.toggle("show");
};
// icon rotate and window onclick to close the dropddown list
window.onclick = function (e) {
    if(e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon"
    ) {
        list.classList.remove("show");

        icon.style.rotate = "0deg";

    }
};
// placeholder name changed and span name changed
for (item of listItems){
    item.onclick = function (e) {
        span.innerText = e.target.innerText;
        if(e.target.innerText == "Everything"){
            input.placeholder ="search Anything..."
        }else{

            input.placeholder = "search in " + e.target.innerText  + "...";
        }

    };

}