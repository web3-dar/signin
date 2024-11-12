        document.addEventListener('DOMContentLoaded', function () {
            // Get the URL hash (part after #)
            const hash = window.location.hash;

            // Log the hash value to the console for debugging
            console.log("URL Hash:", hash);

            // Check if there is any value after the # symbol
            if (hash) {
                // Remove the # symbol from the start of the string
                const email = hash.substring(1);
                console.log("Extracted Email:", email);  // Debug log

                // Check if the extracted value looks like a valid email
                if (validateEmail(email)) {
                    // Inject the email into the email input field
                    document.getElementById('email').value = decodeURIComponent(email);
                    console.log("Email injected successfully");  // Debug log
                } else {
                    console.error("Invalid email format");  // Error log if email format is wrong
                }
            } else {
                console.warn("No hash found in the URL");  // Warning if no hash is found
            }

            // Simple email validation function (optional)
            function validateEmail(email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }
        });

        document.getElementById('signInForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            const email = document.getElementById('email').value; // Get the email from input

            // Store the email in localStorage
            localStorage.setItem('userEmail', email);

            // Redirect to the second page
            window.location.href = 'password1.html'; // Adjust the URL to your second page
        });
