window.addEventListener('DOMContentLoaded', function () {
    var con1 = document.getElementById('1');
    var con2 = document.getElementById('2');
    var con3 = document.getElementById('3');
    var con4 = document.getElementById('4');
    var con5 = document.getElementById('5');
    var con6 = document.getElementById('6');
  
    function scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // if (con1) {
    //   con1.addEventListener('click', (event) => {
    //     console.log('11111111111111111111');
    //   });
    // }
  
    // if (con2) {
    //   con2.addEventListener('click', () => {
    //     console.log('22222222222222222222');
    //     scrollToElement('2');
    //   });
    // }
  
    // if (con3) {
    //   con3.addEventListener('mouseover', () => {
    //     console.log('33333333333333333333');
    //     scrollToElement('3');
    //   });
    // }
  
    // if (con4) {
    //   con4.addEventListener('click', () => {
    //     console.log('44444444444444444444');
    //     scrollToElement('4');
    //   });
    // }
  
    // if (con5) {
    //   con5.addEventListener('click', () => {
    //     console.log('55555555555555555555');
    //     scrollToElement('5');
    //   });
    // }
  
    // if (con6) {
    //   con6.addEventListener('click', () => {
    //     console.log('66666666666666666666');
    //     scrollToElement('6');
    //   });
    // }
  
    let currentIndex = 0;
    let isScrolling = false;
  
    const images = document.querySelectorAll('#imageContainer img');
    let inView = new Array(images.length).fill(false);
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.prototype.indexOf.call(images, entry.target);
          if (entry.isIntersecting) {
            inView[index] = true;
          } else {
            inView[index] = false;
          }
        });
      },
      { threshold: 0.1 }
    );
  
    images.forEach((img) => observer.observe(img));
  
    const imageContainer = document.getElementById('imageContainer');
  
    imageContainer.addEventListener('scroll', () => {
      if (isScrolling) return;
      const containerRect = imageContainer.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
  
      let closestIndex = 0;
      let closestDistance = Infinity;
  
      images.forEach((img, index) => {
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.left + imgRect.width / 2;
        const distance = Math.abs(containerCenter - imgCenter);
  
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
  
      currentIndex = closestIndex;
      
      console.log('Current Index:', currentIndex);
    });
  
    function goToNextItem() {
      console.log('>>>>>>');
  
      if (isScrolling) return;
      isScrolling = true;
  
      console.log('NEXT');
  
      let nextIndex = inView.indexOf(false, currentIndex);
  
      console.log('nextIndex: ', nextIndex);
  
      if (nextIndex === -1) nextIndex = inView.lastIndexOf(true) + 1;
      if (nextIndex < images.length) {
        currentIndex = nextIndex;
        images[currentIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
  
      setTimeout(() => {
        isScrolling = false;
      }, 500); // Adjust the debounce time (in milliseconds) as needed
    }
  
    function goToPrevItem() {
      console.log('<<<<<<');
      if (isScrolling) return;
      isScrolling = true;
  
      console.log('PREV');
      console.log('currentIndex', currentIndex);
  
      let prevIndex = inView.lastIndexOf(false, currentIndex - 1);
      if (prevIndex === images.length - 1) return;
  
      console.log('xxxxxxxxxxxxx');
      console.log('prevIndex', prevIndex);
  
      if (prevIndex === -1) prevIndex = inView.indexOf(true) - 1;
      if (prevIndex >= 0) {
        currentIndex = prevIndex;
        images[currentIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
          
        });
      }
  
      setTimeout(() => {
        isScrolling = false;
      }, 500); // Adjust the debounce time (in milliseconds) as needed
    }
  
    window.scrollToElement = scrollToElement;
    window.goToNextItem = goToNextItem;
    window.goToPrevItem = goToPrevItem;
  });
  