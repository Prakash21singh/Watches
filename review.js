const buy = document.querySelector(".buy");
const popup = document.querySelector(".popup")
const cancle = document.querySelector(".cancle");
const watchname = document.getElementById("watch-name");
const adress = document.getElementById("adressName");

buy.addEventListener("click", function (e) {
    e.preventDefault();
    if ((watchname.value != "") && adress.value != "") {
        popup.classList.remove("visiblity")

    }
    else {
        alert("Fill The Form Please..")
    }
    watchname.value = ""
    adress.value = ""
})
cancle.addEventListener("click", function () {
    popup.classList.add("visiblity")
})

const person = localStorage.getItem("text-val")
const email = localStorage.getItem("email-val")
const number = localStorage.getItem("number-val")
console.log(person, email, number)

document.querySelector(".userName").textContent = `Hey ${person}`
document.querySelector(".userEmailInfo").value = `${email}`;
document.querySelector(".userNumberInfo").value = number