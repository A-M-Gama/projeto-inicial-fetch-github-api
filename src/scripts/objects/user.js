const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers:'',
    following:'',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        // console.log(gitHubUser)
    },
    setRepositories(repositories){
        this.repositories = repositories.map(repo => ({
            name: repo.name,
            watchers: repo.watchers_count,
            stargazers: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || 'Linguagem não especificada'
        }))
        // console.log(user.repositories)
    }
}

export { user }