// init Github
const gitHub = new GitHub;

// Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        gitHub.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found', 'alert alert-danger');

            } else {
                // show the profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
})