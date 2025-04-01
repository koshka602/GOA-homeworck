document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // გადმოვიღოთ ველები
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // ველის შემოწმება
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('გთხოვთ, შეიყვანოთ ყველა აუცილებელი ველი!');
        return;
    }

    // პაროლების შემოწმება
    if (password !== confirmPassword) {
        document.body.style.backgroundColor = 'red';
        messageDiv.innerHTML = '<p class="warning">Warning: პაროლები არ ემთხვევა ერთმანეთს!</p>';
        return;
    }

    // სწორად შესული მონაცემები
    document.body.style.backgroundColor = 'lightgreen';
    messageDiv.innerHTML = '<p class="success">successfullylogin</p>';
});
