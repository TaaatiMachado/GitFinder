class UserView {

    static template(user) {
        return `<div id="profile">
                    <img id="imgProfile" src="${user.avatar}">
                    <div>
                    <p> Login: ${user.login}</p>
                    <p> Name: ${user.name}</p>
                    <p> Local: ${user.local}</p>
                    <p> Followers: ${user.followers}</p>
                    <p> Following: ${user.following}</p>
                    </div>
                </div>

               `;
    }
}

