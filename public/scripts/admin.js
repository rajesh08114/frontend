document.addEventListener('DOMContentLoaded', function () {
    const booksList = document.getElementById('booksList');
  
    // Utility function to validate form inputs
    function validateForm(fields) {
      for (const [key, value] of Object.entries(fields)) {
        if (!value || value.trim() === '') {
          alert(`Please fill in the ${key} field.`);
          return false;
        }
      }
      return true;
    }


   
      // Hide all sections initially
      function hideAllSections() {
        document.querySelectorAll('section ').forEach(section => {
          section.style.display = 'none';
        });
      }
    
      // Add event listeners to dropdown menu links
      document.querySelectorAll('.dropdown-menu li a, .dropdown-menu-1 li a').forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
    
          // Hide all sections
          hideAllSections()
          
        
    
          // Show the relevant section based on the clicked link
          const linkText = this.textContent.trim();
          if (linkText === 'Add Book') {
            document.querySelector('.add-book').style.display = 'flex';
          } else if (linkText === 'View Books') {
            document.getElementById('view-books').style.display = 'flex';
          } else if (linkText === 'Edit Book') {
            document.getElementById('update-book').style.display = 'flex';
          } else if (linkText === 'Delete Book') {
            document.getElementById('delete-book').style.display = 'flex';
          } else if (linkText === 'Add BookCopy') {
            document.getElementById('add-bookcopy').style.display = 'flex';
          } else if (linkText === 'View BookCopy') {
            document.getElementById('view-bookcopy').style.display = 'flex';
          } else if (linkText === 'Edit BookCopy') {
            document.getElementById('update-bookcopy').style.display = 'flex';
          } else if (linkText === 'Delete BookCopy') {
            document.getElementById('delete-bookcopy').style.display = 'flex';
          } else if (linkText === 'Borrow BookCopy') {
            document.getElementById('add-borrow').style.display = 'flex';
          } else if (linkText === 'Update Borrow') {
            document.getElementById('update-borrow').style.display = 'flex';
          } else if (linkText === 'Delete Borrow') {
            document.getElementById('delete-borrow').style.display = 'flex';
          } else if (linkText === 'View Borrow') {
            document.getElementById('view-borrow').style.display = 'flex';
          } else if (linkText === 'Add Fine') {
            document.getElementById('add-fine').style.display = 'flex';
          } else if (linkText === 'Update Fine') {
            document.getElementById('update-fine').style.display = 'flex';
          } else if (linkText === 'Delete Fine') {
            document.getElementById('delete-fine').style.display = 'flex';
          } else if (linkText === 'View Fine') {
            document.getElementById('view-fine').style.display = 'flex';
          }
        });
      });
    
      // Initially hide all sections
      
    
    




   

  
    // Add Book
    document.getElementById('addBookForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value,
        publicationDate: document.getElementById('publicationDate').value,
        isbn: document.getElementById('isbn').value,
        genre: document.getElementById('genre').value,
        description: document.getElementById('description').value,
        coverImage: document.getElementById('coverImage').value,
        status: document.getElementById('status').value,
      };
  
      // Validate form inputs
      if (!validateForm(book)) return;
  
      fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      })
        .then(response => response.json())
        .then(data => {
          alert('Book added successfully!');
          console.log(data);
        })
        .catch(error => console.error('Error:', error));
    });
  
    // Update Book
    document.getElementById('updateBookForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const bookId = document.getElementById('updateBookId').value;
      const updatedBook = {
        title: document.getElementById('updateTitle').value,
        author: document.getElementById('updateAuthor').value,
        publisher: document.getElementById('updatePublisher').value,
        publicationDate: document.getElementById('updatePublicationDate').value,
        genre: document.getElementById('updateGenre').value,
        description: document.getElementById('updateDescription').value,
        status: document.getElementById('updateStatus').value,
      };
  
      // Validate book ID
      if (!bookId || bookId.trim() === '') {
        alert('Please provide a valid Book ID.');
        return;
      }
  
      // Validate at least one field is filled for update
      const hasAtLeastOneField = Object.values(updatedBook).some(value => value && value.trim() !== '');
      if (!hasAtLeastOneField) {
        alert('Please fill in at least one field to update.');
        return;
      }
  
      fetch(`/api/books/${bookId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
      })
        .then(response => response.json())
        .then(data => {
          alert('Book updated successfully!');
          console.log(data);
          loadBooks();
        })
        .catch(error => console.error('Error:', error));
    });
  
    // Delete Book
    document.getElementById('deleteBookForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const bookId = document.getElementById('deleteBookId').value;
  
      // Validate book ID
      if (!bookId || bookId.trim() === '') {
        alert('Please provide a valid Book ID.');
        return;
      }
  
      fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          alert('Book deleted successfully!');
          console.log(data);
          loadBooks();
        })
        .catch(error => console.error('Error:', error));
    });
  

    
        // Show BookCopy operations when the admin clicks the dropdown option
       
      
        // Add BookCopy
        document.getElementById('addBookCopyForm').addEventListener('submit', function (e) {
          e.preventDefault();
      
          const bookCopy = {
            bookId: document.getElementById('bookId').value,
            copyNumber: document.getElementById('copyNumber').value,
            status: document.getElementById('copyStatus').value,
          };
      
          // Validate form inputs
          if (!bookCopy.bookId || !bookCopy.copyNumber || !bookCopy.status) {
            alert('Please fill in all fields.');
            return;
          }
      
          fetch('/api/bookcopies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookCopy),
          })
            .then(response => response.json())
            .then(data => {
              alert('BookCopy added successfully!');
              console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });
      
        // Update BookCopy
        document.getElementById('updateBookCopyForm').addEventListener('submit', function (e) {
          e.preventDefault();
      
          const bookCopyId = document.getElementById('updateCopyId').value;
          const updatedBookCopy = {
            status: document.getElementById('updateCopyStatus').value,
          };
      
          // Validate form inputs
          if (!bookCopyId || !updatedBookCopy.status) {
            alert('Please fill in all fields.');
            return;
          }
      
          fetch(`/api/bookcopies/${bookCopyId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBookCopy),
          })
            .then(response => response.json())
            .then(data => {
              alert('BookCopy updated successfully!');
              console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });
      
        // Delete BookCopy
        document.getElementById('deleteBookCopyForm').addEventListener('submit', function (e) {
          e.preventDefault();
      
          const bookCopyId = document.getElementById('deleteCopyId').value;
      
          // Validate form inputs
          if (!bookCopyId) {
            alert('Please provide a valid BookCopy ID.');
            return;
          }
      
          fetch(`/api/bookcopies/${bookCopyId}`, {
            method: 'DELETE',
          })
            .then(response => response.json())
            .then(data => {
              alert('BookCopy deleted successfully!');
              console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });
      
 




        // Show Borrow operations when the admin clicks the dropdown option
      
      
        // Add Borrow Record
        document.getElementById('addBorrowForm').addEventListener('submit', function (e) {
          e.preventDefault();
      
          const borrowRecord = {
            book: document.getElementById('bookId').value,
            user: document.getElementById('userId').value,
            borrowDate: document.getElementById('borrowDate').value,
            returnDate: document.getElementById('returnDate').value,
            status: document.getElementById('borrowStatus').value,
          };
      
          // Validate form inputs
          if (!borrowRecord.book || !borrowRecord.user || !borrowRecord.borrowDate || !borrowRecord.returnDate || !borrowRecord.status) {
            alert('Please fill in all fields.');
            return;
          }
      
          fetch('/api/borrows', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(borrowRecord),
          })
            .then(response => response.json())
            .then(data => {
              alert('Borrow record added successfully!');
              console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });
      
        // Update Borrow Record
        document.getElementById('updateBorrowForm').addEventListener('submit', function (e) {
          e.preventDefault();
      
          const borrowId = document.getElementById('borrowId').value;
          const updatedBorrow = {
            status: document.getElementById('updateStatus').value,
          };
      
          // Validate form inputs
          if (!borrowId || !updatedBorrow.status) {
            alert('Please fill in all fields.');
            return;
          }
      
          fetch(`/api/borrows/${borrowId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBorrow),
          })
            .then(response => response.json())
            .then(data => {
              alert('Borrow record updated successfully!');
              console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });
      
        // Delete Borrow Record
        document.getElementById('deleteBorrowForm').addEventListener('submit', function (e) {
          e.preventDefault();
      
          const borrowId = document.getElementById('deleteBorrowId').value;
      
          // Validate form inputs
          if (!borrowId) {
            alert('Please provide a valid Borrow Record ID.');
            return;
          }
      
          fetch(`/api/borrows/${borrowId}`, {
            method: 'DELETE',
          })
            .then(response => response.json())
            .then(data => {
              alert('Borrow record deleted successfully!');
              console.log(data);
            })
            .catch(error => console.error('Error:', error));
        });



       
          // Add Fine
          document.getElementById('addFineForm').addEventListener('submit', function (e) {
            e.preventDefault();
        
            const fine = {
              userId: document.getElementById('fineUserId').value.trim(),
              barcode: document.getElementById('fineBarcode').value.trim(),
              amount: document.getElementById('fineAmount').value.trim(),
              reason: document.getElementById('fineReason').value.trim(),
            };
        
            // Validate form inputs
            if (!fine.userId || !fine.barcode || !fine.amount || !fine.reason) {
              alert('Please fill in all fields.');
              return;
            }
        
            fetch('/api/fines', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(fine),
            })
              .then(response => response.json())
              .then(data => {
                alert('Fine added successfully!');
                console.log(data);
              })
              .catch(error => console.error('Error:', error));
          });
        
          // View Fines by User ID
          document.getElementById('viewFineForm').addEventListener('submit', function (e) {
            e.preventDefault();
        
            const userId = document.getElementById('viewFineUserId').value.trim();
        
            // Validate User ID
            if (!userId) {
              alert('Please provide a valid User ID.');
              return;
            }
        
            fetch(`/api/fines/user/${userId}`)
              .then(response => response.json())
              .then(data => {
                const fineList = document.getElementById('fineList');
                fineList.innerHTML = '';
        
                if (data.length === 0) {
                  fineList.innerHTML = '<p>No fines found for this User ID.</p>';
                  return;
                }
        
                data.forEach(fine => {
                  const fineItem = document.createElement('div');
                  fineItem.innerHTML = `
                    <p><strong>Fine ID:</strong> ${fine._id}</p>
                    <p><strong>Amount:</strong> ${fine.amount}</p>
                    <p><strong>Reason:</strong> ${fine.reason}</p>
                    <p><strong>Paid:</strong> ${fine.paid ? 'Yes' : 'No'}</p>
                    <hr>
                  `;
                  fineList.appendChild(fineItem);
                });
              })
              .catch(error => console.error('Error:', error));
          });
        
          // Update Fine by User ID
         // Update Fine by User ID
// Update Fine by User ID (Paid Status)
document.getElementById('updateFineForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userId = document.getElementById('updateFineUserId').value.trim();
  const paid = document.getElementById('updateFinePaid').checked; // Get the checkbox value

  // Validate User ID
  if (!userId) {
    alert('Please provide a valid User ID.');
    return;
  }

  // Prepare the data to send
  const updatedFine = { paid };

  fetch(`/api/fines/user/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedFine),
  })
    .then(response => response.json())
    .then(data => {
      alert('Fine status updated successfully!');
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
});
        
          // Delete Fines by User ID
          document.getElementById('deleteFineForm').addEventListener('submit', function (e) {
            e.preventDefault();
        
            const userId = document.getElementById('deleteFineUserId').value.trim();
        
            // Validate User ID
            if (!userId) {
              alert('Please provide a valid User ID.');
              return;
            }
        
            fetch(`/api/fines/user/${userId}`, {
              method: 'DELETE',
            })
              .then(response => response.json())
              .then(data => {
                alert('Fines deleted successfully!');
                console.log(data);
              })
              .catch(error => console.error('Error:', error));
          });
        
     


  });