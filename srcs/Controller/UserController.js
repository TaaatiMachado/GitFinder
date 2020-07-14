class UserController {
    constructor() {}

    static getUser(url) {
        //console.log(url)
        
        let userRequest = new XMLHttpRequest(); 
        userRequest.open("GET", url);

        userRequest.addEventListener ("load", () => {

            if (userRequest.status == 200) {
            
            let divUser = document.getElementById("content");
            let userObj = JSON.parse(userRequest.responseText);
            
            //criando o usuário do controller
            let gitUser = new User( userObj.avatar_url, 
                                    userObj.login, 
                                    userObj.name, 
                                    userObj.location, 
                                    userObj.followers, 
                                    userObj.following
                                    );
                                
            divUser.innerHTML = UserView.template(gitUser.returnUser()); 
                                        
        } else {
            //let divUser = document.getElementById("#content");
            //divUser.innerText = "Algo deu errado. Busque novamente!"
        }

                        
    });

    userRequest.send();  
}
}

