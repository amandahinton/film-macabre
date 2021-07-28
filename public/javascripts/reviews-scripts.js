//add event listener to form

function hideForm() {
    let form = document.getElementsByClassName('updateForm')[0]
    // if (form.style.display === "none") {
    //     form.style.display = "block"
    // } else {
    //     form.style.display = "none"
    // }
    form.classList.toggle("hidden")
}

let updateButton = document.getElementById("updateReview")
updateButton.addEventListener("click", hideForm, false)
