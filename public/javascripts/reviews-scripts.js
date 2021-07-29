//add event listener to form

function hideForm() {
    let form = document.getElementsByClassName('updateForm')[0]
    // if (form.style.display === "none") {
    //     form.style.display = "flex"
    // } else {
    //     form.style.display = "none"
    // }
    form.classList.toggle("hidden")
}

// function startHidden() {
//     let form = document.getElementsByClassName('updateForm')[0]
//     form.style.display = "none"
// }
// document.addEventListener("DOMContentLoaded", startHidden)

let updateButton = document.getElementById("updateReview")
updateButton.addEventListener("click", hideForm, false)


