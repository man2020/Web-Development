class Github {
    constructor() {
        this.client_id = '56b9864ebb789cb977c0';
        this.client_secret = 'e7383d22b07da4ee01511982882616177482b276';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return { profile, repos };
    }
}