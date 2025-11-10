const allUsers = JSON.parse(localStorage.getItem('healGrowUsers')) || [];

const signIn = () => {
    if (email.value === '' || password.value === '') {
        showError.style.display = "block";
    } else {
        showError.style.display = "none"
        const userExist = allUsers.find((user) => user.email === email.value && user.password === password.value);
        if (userExist) {
            alert(`Welcome back Lovie 💕`)
            email.value = ''
            password.value = ''
            window.location.href = "../dashboard/index.html"
        } else {
            showIncorrect.style.display = 'block'
        }

    }
}