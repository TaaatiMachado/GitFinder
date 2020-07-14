let buttonSearch = document.querySelector("#userSearch");
let inputSearch = document.querySelector("#userForm");
let reposSearch = document.querySelector("#userRepos")

buttonSearch.addEventListener ("click", () => {
    let userURL = `https://api.github.com/users/${inputSearch.value}`
    let reposURL = `https://api.github.com/users/${inputSearch.value}/repos`;
    
    UserController.getUser(userURL);
    ReposController.getRepos(reposURL);
    inputSearch.value = "";
    inputSearch.focus();
})

