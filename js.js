




document.querySelectorAll('.project-home').forEach(project => {
    project.addEventListener('mouseenter', function() {
      const imageSrc = this.getAttribute('data-image');
      const hoverImage = document.getElementById('hover-image');
      hoverImage.src = imageSrc;
      hoverImage.style.opacity = 1; // Show image
    });
  
    project.addEventListener('mouseleave', function() {
      const hoverImage = document.getElementById('hover-image');
      hoverImage.style.opacity = 0; // Hide image
    });
  });


  document.querySelectorAll('.project-home').forEach(project => {
  
    project.addEventListener('mouseenter', function() {
      const imageSrc = this.getAttribute('data-image');
      console.log('Image source:', imageSrc); // Affiche la valeur de data-image dans la console
      
      const hoverImage = document.getElementById('hover-image');
      hoverImage.src = imageSrc;
      hoverImage.style.opacity = 1;
    });
  
    project.addEventListener('mouseleave', function() {
      const hoverImage = document.getElementById('hover-image');
      hoverImage.style.opacity = 0;
    });
  });
  



  const carousel = document.querySelector('.carousel');
  let currentIndex = 0;
  const totalImages = 4; // Mettre à jour le nombre total d'images
  const visibleImages = window.innerWidth < 768 ? 1 : 4; // Afficher 1 image si la largeur est inférieure à 768px
  
  function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalImages;
    const translateX = -(currentIndex * (100 / visibleImages));
    carousel.style.transform = `translateX(${translateX}%)`;
  }
  
  setInterval(moveCarousel, 3600); // Défilement toutes les 3,6 secondes






document.addEventListener('DOMContentLoaded', function() {
    const gif = document.getElementById('draggableGif');
    let isDragging = false;
    let startX, startY;

    gif.addEventListener('click', toggleDragging);
    document.addEventListener('mousemove', drag);

    function toggleDragging(e) {
        if (!isDragging) {
            startDragging(e);
        } else {
            stopDragging();
        }
    }

    function startDragging(e) {
        isDragging = true;
        startX = e.clientX - gif.offsetLeft;
        startY = e.clientY - gif.offsetTop;
        gif.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const newX = e.clientX - startX;
        const newY = e.clientY - startY;
        gif.style.left = `${newX}px`;
        gif.style.top = `${newY}px`;
    }

    function stopDragging() {
        isDragging = false;
        gif.style.cursor = 'grab';
    }
});



const sliderInner = document.querySelector('.slider-inner');
const firstClone = sliderInner.children[0].cloneNode(true);
sliderInner.appendChild(firstClone);




document.addEventListener("scroll", function() {
  const boxes = document.querySelectorAll('.box');
  const triggerBottom = window.innerHeight / 5 * 4; // Point de déclenchement

  boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
          box.classList.add('visible'); // Ajouter la classe pour rendre visible
      } else {
          box.classList.remove('visible'); // Retirer la classe si hors de portée
      }
  });
});