class GitHub {
     constructor () {
       this.client_id = '5792672c11db6a842803';
       this.client_secret = 'e914fb9963de8231f06461ebaca0b7222f9f7271';
       this.repos_count = 5;
       this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.linkedin.com/v1/people/~?format=json`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client-id=${this.client_id}&client-secret=${this.client_secret}`);
        

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        console.log(profile)


        // return {
        //     profile,
        //     repos
        // }
    }
}