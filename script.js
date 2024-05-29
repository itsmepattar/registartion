const tabButtons = document.querySelectorAll('.tab-button');
const forms = document.querySelectorAll('.form');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabTarget = button.getAttribute('data-tab');

        // Remove active class from all tabs and forms
        tabButtons.forEach(btn => btn.classList.remove('active'));
        forms.forEach(form => form.classList.remove('active'));

        // Add active class to the clicked tab and the corresponding form
        button.classList.add('active');
        document.getElementById(`${tabTarget}-form`).classList.add('active');
    });
});