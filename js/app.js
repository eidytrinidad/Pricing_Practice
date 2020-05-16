
function changeFunction() {
    const check = document.querySelector("#switch");
    let price =document.querySelector(".price");
    let pbasico =document.querySelector("#pbasico");
    let pmaster =document.querySelector("#pmaster");
    if (check.checked==true) {
        price.textContent="$24.99";
         pbasico.textContent="$19.99";
          pmaster.textContent="$39.99";
        
    } else {
        price.innerHTML=`$249.99`;
         pbasico.textContent="$199.99";
          pmaster.textContent="$399.99";
    }
}