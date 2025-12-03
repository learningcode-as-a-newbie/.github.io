document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("status").textContent = "Submitting...";

    // TEMPORARY — backend will be added in Step 2
    setTimeout(() => {
        document.getElementById("status").textContent = "Thank you for subscribing!";
    }, 1000);
});
