function duplicateCardMobile() {
    var originalCard = document.querySelector('.card');
    var clonedCard = originalCard.cloneNode(true);
    originalCard.parentNode.insertBefore(clonedCard, originalCard.nextSibling);
  }
  
  function duplicateCardDesktop() {
    var originalCard = document.querySelector('.card');
    var clonedCard = originalCard.cloneNode(true);
    clonedCard.classList.add('desktop-card'); // Agrega la clase específica para escritorio
    originalCard.parentNode.appendChild(clonedCard);
  }
  