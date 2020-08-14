
document.addEventListener("DOMContentLoaded", function(){
    let listItem = document.querySelectorAll(".content-item");
    listItem.forEach(function(item){

        item.addEventListener("click", function(){
            for(let i = 0; i<listItem.length; i++ ){
                listItem[i].classList.remove("active");
            }
                this.classList.toggle("active");
        })
    })

 
},false)