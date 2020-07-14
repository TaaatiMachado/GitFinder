
class User {

    constructor(avatar, login, name, local, followers, following) {
        this._avatar = avatar;
        this._login = login;
        this._name = name;
        this._local = local;
        this._followers = followers;
        this._following = following;
    }

    //programação defensiva: retorna uma cópia do User
    returnUser() {
        return {
            avatar: this._avatar,
            login: this._login,
            name: this._name,
            local: this._local,
            followers: this._followers,
            following: this._following
        };
    }
}

