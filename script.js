// Search input
const searchUser = document.querySelector('#searchUser');
// Init github
const github = new Github();
// Init UI
const ui = new UI();

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
                // show repos
                ui.showRepos(data.repos);
            }
        });

    } else {
        // clear profile
        ui.clearProfile();
    }
});