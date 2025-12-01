let allUsers = []
if (localStorage.getItem("healGrowUsers")) {
    const fetched = JSON.parse(localStorage.getItem("healGrowUsers"));
    allUsers = fetched;
} else {
    allUsers = [];
}

const signUp = () => {
    if (userName.value === "" || email.value === "" || password.value === "") {
        showError.style.display = "block";
        setTimeout(() => {
                showError.style.display = 'none'
            }, 2000)
            userName.value = ''
            email.value = ''
            password.value = ''
    } else {
        // showError.style.display = "none";
        alert(`Welcome ${userName.value} 💕 We love you`);

        const newUser = {
            name: userName.value,
            email: email.value,
            password: password.value,
        };

        allUsers.push(newUser);
        localStorage.setItem("healGrowUsers", JSON.stringify(allUsers));

        userName.value = ''
        email.value = ''
        password.value = ''
        window.location.href = "../signin/signin.html"
    }
};
