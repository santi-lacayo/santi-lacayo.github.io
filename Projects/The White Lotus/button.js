// Booking button js to open in popup window
document.addEventListener("DOMContentLoaded", function () {
    const bookBtn = document.getElementById("bookButton");
    
    if (bookBtn) {
      bookBtn.addEventListener("click", function (event) { //when button is clicked
        event.preventDefault();
        
        const popupWindow = window.open( //open window
          "booking.html",
          "BookingWindow",
          "width=600,height=700,top=100,left=100,resizable=yes,scrollbars=yes" //how it will open
        );
      });
    }
  });