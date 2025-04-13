document.addEventListener('DOMContentLoaded', function () {
    // Fetch user details from the backend
   
    
  
    // Handle form submission for editing details
    document.getElementById('editDetailsForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const updatedDetails = {
        employeeId: document.getElementById('edit-employee-id').value,
        department: document.getElementById('edit-department').value,
        designation: document.getElementById('edit-designation').value,
        phone: document.getElementById('edit-phone').value,
      };
    })
      // Send updated details to the backend
     
    const editButton = document.getElementById('edit-button');
  const editDetailsSection = document.getElementById('edit-details');

  // Toggle the visibility of the "Edit Details" section
  editButton.addEventListener('click', function () {
    // Prevent default action of the button
    console.log('Edit button clicked');
    if (editDetailsSection.style.display === 'none') {
      editDetailsSection.style.display = 'block'; // Show the section
      editButton.textContent = 'Cancel'; // Change button text to "Cancel"
    } else {
      editDetailsSection.style.display = 'none'; // Hide the section
      editButton.textContent = 'Edit'; // Change button text back to "Edit"
    }
  });
  

})