document.getElementById('enrollment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const plan = document.querySelector('input[name="plan"]:checked').value;

    if (plan === 'free') {
        showConfirmation();
    } else {
        // Simulated payment gateway
        setTimeout(() => {
            showConfirmation();
        }, 1000);
    }
});

function showConfirmation() {
    document.getElementById('enrollment-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
    // Simulate sending email receipt
    console.log('Receipt sent to user@example.com');
}
