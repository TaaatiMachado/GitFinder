class ReposView {

    static template(repos) {
        return `<div id="respositories">
                    <a href="${repos.url}">
                    <img src="img/gitRepos.png" id="reposImg">
                    </a>
                    <p id="reposName">Repository:<br> ${repos.name}</p>      
                </div>`;
    }

}