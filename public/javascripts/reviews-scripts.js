//add event listener to form

function hideForm() {
    let form = document.getElementsByClassName('updateForm')[0]
    form.classList.toggle("hidden")
}


let updateButton = document.getElementById("updateReview")
updateButton.addEventListener("click", hideForm, false)


