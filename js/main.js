// Main JavaScript for GCJade static pages
// Handles form validation for crypto-payment-form.html

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.onclick = function(e) {
            const txHash = document.getElementById('txHash').value.trim();
            const amount = document.getElementById('amount').value.trim();
            let alertBox = document.getElementById('formAlert');
            alertBox.innerHTML = '';
            if (!amount || isNaN(amount) || Number(amount) <= 0) {
                alertBox.innerHTML = '<div class="alert alert-danger mt-2">Please enter a valid payment amount.</div>';
                return;
            }
            if (txHash.length !== 66) {
                alertBox.innerHTML = '<div class="alert alert-danger mt-2">Transaction hash must be exactly 66 characters.</div>';
                return;
            }
            // Here you would normally submit the form via AJAX or similar
            alertBox.innerHTML = '<div class="alert alert-success mt-2">Form submitted successfully (demo only).</div>';
        };
    }
});
