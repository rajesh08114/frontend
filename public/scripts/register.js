// Register.js - User Registration Script
document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('role');
    const adminFields = document.getElementById('adminFields');
    const facultyFields = document.getElementById('facultyFields');
    const studentFields = document.getElementById('studentFields');
    
    // Show/hide role-specific fields based on selection
    roleSelect.addEventListener('change', function() {
        adminFields.style.display = 'none';
        facultyFields.style.display = 'none';
        studentFields.style.display = 'none';
        
        // Clear all role-specific fields when changing role
        document.querySelectorAll('.role-specific input, .role-specific select').forEach(field => {
            field.value = '';
        });
        
        if (this.value === 'admin') {
            adminFields.style.display = 'block';
        } else if (this.value === 'faculty') {
            facultyFields.style.display = 'block';
        } else if (this.value === 'student') {
            studentFields.style.display = 'block';
        }
    });
    
    // Form validation
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Clear previous error messages
        document.querySelectorAll('.error').forEach(el => {
            el.textContent = '';
        });
        
        // Validate common fields
        const name = document.getElementById('name').value.trim();
        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }
        
        const email = document.getElementById('email').value.trim();
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        const phone = document.getElementById('phone').value.trim();
        if (!phone) {
            document.getElementById('phoneError').textContent = 'Phone number is required';
            isValid = false;
        } else if (!/^[0-9]{10,15}$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10-15 digits)';
            isValid = false;
        }
        
        const password = document.getElementById('password').value;
        if (!password) {
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
            isValid = false;
        }
        
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (!confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }
        
        const role = document.getElementById('role').value;
        if (!role) {
            document.getElementById('roleError').textContent = 'Please select a user role';
            isValid = false;
        }
        
        // Validate role-specific fields
        if (role === 'admin') {
            const employeeId = document.getElementById('employeeId').value.trim();
            if (!employeeId) {
                document.getElementById('employeeIdError').textContent = 'Employee ID is required';
                isValid = false;
            }
            
            const adminDepartment = document.getElementById('adminDepartment').value;
            if (!adminDepartment) {
                document.getElementById('adminDepartmentError').textContent = 'Department is required';
                isValid = false;
            }
            
            const designation = document.getElementById('designation').value;
            if (!designation) {
                document.getElementById('designationError').textContent = 'Designation is required';
                isValid = false;
            }
        } else if (role === 'faculty') {
            const facultyEmployeeId = document.getElementById('facultyEmployeeId').value.trim();
            if (!facultyEmployeeId) {
                document.getElementById('facultyEmployeeIdError').textContent = 'Employee ID is required';
                isValid = false;
            }
            
            const facultyDepartment = document.getElementById('facultyDepartment').value;
            if (!facultyDepartment) {
                document.getElementById('facultyDepartmentError').textContent = 'Department is required';
                isValid = false;
            }
            
            const facultyDesignation = document.getElementById('facultyDesignation').value;
            if (!facultyDesignation) {
                document.getElementById('facultyDesignationError').textContent = 'Designation is required';
                isValid = false;
            }
        } else if (role === 'student') {
            const rollNumber = document.getElementById('rollNumber').value.trim();
            if (!rollNumber) {
                document.getElementById('rollNumberError').textContent = 'Roll number is required';
                isValid = false;
            }
            
            const studentDepartment = document.getElementById('studentDepartment').value;
            if (!studentDepartment) {
                document.getElementById('studentDepartmentError').textContent = 'Department is required';
                isValid = false;
            }
            
            const batchYear = document.getElementById('batchYear').value;
            if (!batchYear) {
                document.getElementById('batchYearError').textContent = 'Batch year is required';
                isValid = false;
            } else if (batchYear < 2000 || batchYear > new Date().getFullYear() + 5) {
                document.getElementById('batchYearError').textContent = 'Please enter a valid batch year';
                isValid = false;
            }
        }
        
        if (isValid) {
            // Prepare data for submission
            const formData = {
                name,
                email,
                phone,
                password,
                role
            };

      

          


            
            // Here you would typically send the data to your backend
            console.log('Form data to be submitted:', formData);
            alert('Registration successful! ');
            // this.submit(); // Uncomment to actually submit the form
        }
    });
});
