
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const loginModal = document.getElementById('loginModal');
    const profile = document.getElementById('profile');
   
    const loginLinks = document.querySelectorAll('a[href="#login"]');
    
    const closeButtons = document.querySelectorAll('.close-modal');
    const cancelButtons = document.querySelectorAll('.btn-outline');
    const registerButton = document.getElementById('register');

    var isLoggedIn = false; // Variable to track login status



    

   


    // Replace with actual login check logic


    // navigate to register page


 
   


    // Show login modal
    loginLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
    });

    // Show register modal
   

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            loginModal.style.display = 'none';
            
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            loginModal.style.display = 'none';
            
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
       
    });

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
          async function postLogin() {
            // validate form data
            const email = document.getElementById('loginEmail').value; 
            const password = document.getElementById('loginPassword').value;
            const data = { email, password };
            if (!email || !password) {
                alert('Please fill in all fields.');
                return;
            }
            // Send login request to the server

            try {
                const response = await fetch('http://localhost:3000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    // Redirect on success
                    loginModal.style.display = 'none';
                    isLoggedIn = true; // Set the variable to true if authenticated
                    if (isLoggedIn) {
                      document.getElementById('logout').style.display = 'block'; // Hide login link if logged in
                   }
                } else {
                    alert('Login failed. Please check your credentials.');
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        }
         postLogin();
        
    });


    document.getElementById("view").addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the card click event
        
        window.location.href = './public/pages/book.html'; // Redirect to book details page
    });
    
   // Smooth scrolling for navigation


   
      
        
   
         
  






        
    







});
