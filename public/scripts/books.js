document.addEventListener('DOMContentLoaded', function() {
    // get user details by api
   
        
        const bookList = document.querySelector('.book-list');


      

for (let i = 0; i < 18; i++) {


    const bookCard = document.createElement('div');
    bookCard.innerHTML = `
                    <div class="book-card">
                    <div class="book-cover">
                        <img src="../../images/download.jpg" alt="Book Cover">
                    </div>
                    <div class="book-info">
                        <h3 id="title">Web Technologies</h3>
                        <p id="author">Nikil Gade</p>
                        <p id="genre">Computer Science</p>
                        <span class="book-status available">Available</span>
                        <div class="book-actions">
                            <button id="view">View</button>
                            <button id="notify"><span id="book-notify">Notify</span></button>
                        </div>
                        
                    </div>
                </div>`;
    bookCard.classList.add('book-card');
    bookList.appendChild(bookCard);

   

}

document.getElementById("view").addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the card click event
    
    window.location.href = '../pages/book.html'; // Redirect to book details page
});



       

         
            
        
     

    



        


});

   
      