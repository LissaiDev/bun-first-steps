const fetchGitHubUser = async (yourGitHubUserName: string) => {
   try{
        const response = await fetch(`https://api.github.com/users/${yourGitHubUserName}`);
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
//test with you github username
fetchGitHubUser("LissaiDev");