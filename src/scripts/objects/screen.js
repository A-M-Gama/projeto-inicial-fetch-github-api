const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info"><img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😅'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😅'}</p>
                                <div class="socials">
                                    <p>Seguidores: ${user.followers}</p>
                                    <p>Seguindo: ${user.following}</p>
                                </div>
                            </div>
                        </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a><br>
            <div class = repo-attributes><span class = "attributes">🍴${repo.forks}</span><span class = "attributes">🌟${repo.stargazers}</span><span class = "attributes">👀${repo.watchers}</span><span class = "attributes">🖥️${repo.language}</span></div></li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class = "repositories section">
                                                <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderEvents(events) {
        if(events.length === 0) return;
        let eventsItems = '';

        events.slice(0, 10).forEach(event => {
            eventsItems += `
                <li class="events-msgs">
                    <a href="https://github.com/${event.repo.name}" target="_blank">${event.repo.name}</a>
                    ${event.payload.commits?.[0]?.message ? 
                        `<p>${event.payload.commits[0].message}</p>` : '<p class="msgnotfind">Não há mensagem de commit!</p>'}
                </li>`;
        });
    
        this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItems}</ul>
            </div>`;
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"        
    }
}

export { screen }