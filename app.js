let buton = document.querySelector("#btn");
let input = document.getElementById("input");
let list = document.querySelector(".list");
let tik =document.querySelector(".fa-check-double");
let del = document.querySelector(".fa-trash-can")
buton.addEventListener("click", () => {
  if(input.value!==''){
    list.innerHTML += `<li><i class="fa-solid fa-check-double"></i>${input.value}<i class="fa-regular fa-trash-can"></i></li>`;
  input.value = "";}
 else{}

});