
document.getElementById('changePasswordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userId = document.getElementById('user-id').value.trim();
  const newPassword = document.getElementById('new-password').value.trim();

  if (!userId || !newPassword) {
    alert('Please fill in all fields.');
    return;
  }
  // validate user existence
   

  // Send the data to the backend
 
});
