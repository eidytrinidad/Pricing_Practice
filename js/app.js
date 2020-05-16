
function changeFunction() {
    const check = document.querySelector("#switch");
    let price =document.querySelector(".price");
    if (check.checked==true) {
        console.log(price.textContent="$24.99")
        
    } else {
        console.log(price.innerHTML=`$249.99`)
    }
}