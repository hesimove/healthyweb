// 1. home page click
document.querySelector('.circle').addEventListener('click', function(e) {
    e.preventDefault(); 
    var squares = document.querySelectorAll('.square');
    
    squares.forEach(function(square) {
      square.classList.toggle('show-square');
    });
  });