let buttonSearch = document.querySelector("#userSearch");
let inputSearch = document.querySelector("#userForm");

buttonSearch.addEventListener ("click", () => {
    let userURL = `https://api.github.com/users/${inputSearch.value}`
    UserController.getUser(userURL);
})

