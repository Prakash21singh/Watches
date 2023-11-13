const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const form = document.querySelector(".login");
const cancle = document.querySelector(".cancle");
const navigationlinks = document.querySelector(".nav");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
    e.preventDefault()
    form.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

overlay.addEventListener("click", function (e) {
    e.preventDefault()
    overlay.classList.add("hidden")
    form.classList.add("hidden")

})
cancle.addEventListener("click", function (e) {
    e.preventDefault()
    overlay.classList.add("hidden")
    form.classList.add("hidden")
})


const menubtn = document.querySelector(".menu");
menubtn.addEventListener("click", function () {
    menubtn.classList.toggle("active");
    navigationlinks.classList.toggle('nav-width');
})

const links = document.querySelectorAll(".anchor");
links.forEach(el => {
    el.addEventListener("click", function (e) {
        // e.preventDefault();
        navigationlinks.classList.remove("nav-width");
        menubtn.classList.toggle("active");
    })
})



const reviewSection = document.querySelector(".reviews");

const reviewSubmit = document.querySelector(".review-submit");
const reviewerName = document.querySelector(".reviewer-name")
const reviewerText = document.querySelector(".reviewer-text")
reviewSubmit.addEventListener("click", function (e) {
    e.preventDefault()
    const reviewChild = document.querySelectorAll(".review-profile")
    const nameValue = reviewerName.value;
    const textValue = reviewerText.value;
    const newElement = document.createElement("div");
    newElement.classList.add("review-profile")
    newElement.innerHTML = `
    <div class="reviews-top">
    <img src="icon/profile.png" alt="" width="50px" height="50px">
    <h2>${nameValue}</h2>
    </div>
    <div class="reviews-down">
    &starf;&starf;&starf;&starf;&starf;
    <p>${textValue}</p>
    </div>
    `
    reviewSection.lastElementChild.remove()

    reviewSection.insertAdjacentElement("afterbegin", newElement)


    reviewerName.value = ""
    reviewerText.value = ""
})

const textValue = document.querySelector(".text-value")
const userNumber = document.querySelector(".number")
const userEmail = document.querySelector(".e-mail")
const formSub = document.querySelector("form");
// console.log(formSub)

formSub.addEventListener("submit", function (e) {
    if (textValue.value && userNumber.value && userEmail.value !== "") {
        e.preventDefault()
        const newTextValue = textValue.value
        const newNumberValue = userNumber.value
        const newEmailValue = userEmail.value
        localStorage.setItem("text-val", newTextValue)
        localStorage.setItem("number-val", newNumberValue)
        localStorage.setItem("email-val", newEmailValue)
        window.location.href = "reviews.html"
    }
    else {
        alert("You Have TO Fill All the Sections of the Form");
    }
    textValue.value = ""
    userNumber.value = ""
    userEmail.value = ""
})