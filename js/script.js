
// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Video Player
  const videoPlaceholder = document.querySelector('.video-placeholder');
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
      const videoContainer = document.querySelector('.video-container');
      videoContainer.innerHTML = `
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="Aquamax Presentation" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      `;
    });
  }
  
  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = answer.classList.contains('active');
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.classList.remove('active');
        item.style.height = '0';
      });
      
      document.querySelectorAll('.faq-icon').forEach(icon => {
        icon.setAttribute('data-feather', 'plus');
      });
      
      feather.replace();
      
      // Toggle current answer
      if (!isActive) {
        answer.classList.add('active');
        const height = answer.scrollHeight;
        answer.style.height = height + 'px';
        
        // Change icon
        this.querySelector('.faq-icon').setAttribute('data-feather', 'minus');
        feather.replace();
      }
    });
  });
  
  // Countdown Timer
  const countdownTimer = () => {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);
    
    setInterval(() => {
      seconds--;
      
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
          
          if (hours < 0) {
            hours = 23;
          }
        }
      }
      
      hoursElement.textContent = hours.toString().padStart(2, '0');
      minutesElement.textContent = minutes.toString().padStart(2, '0');
      secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
  };
  
  countdownTimer();
  
  // Savings Calculator
  const calculateButton = document.getElementById('calculate-btn');
  if (calculateButton) {
    calculateButton.addEventListener('click', () => {
      const billInput = document.getElementById('bill-amount');
      const savingsAmount = document.getElementById('savings-amount');
      const savingsMessage = document.getElementById('savings-message');
      const savingsDetails = document.getElementById('savings-details');
      const annualSavings = document.getElementById('annual-savings');
      
      if (billInput.value.trim() === '') return;
      
      // Convert input value to number (handling comma as decimal separator)
      const bill = parseFloat(billInput.value.replace(',', '.'));
      
      // Calculate approximate savings (40-60% range)
      const minSavings = bill * 0.4;
      const maxSavings = bill * 0.6;
      const avgSavings = (minSavings + maxSavings) / 2;
      const formattedSavings = avgSavings.toFixed(2).replace('.', ',');
      const formattedAnnual = (avgSavings * 12).toFixed(2).replace('.', ',');
      
      // Update UI
      savingsAmount.innerHTML = `R$ ${formattedSavings}<span class="per-month">/mês</span>`;
      savingsMessage.innerHTML = `<span class="text-green-800 font-medium">${(avgSavings/bill*100).toFixed(0)}% de economia!</span>`;
      savingsDetails.classList.remove('hidden');
      annualSavings.textContent = `R$ ${formattedAnnual}`;
    });
  }
  
  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Intersection Observer for fade-in effect
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  // Add fade-in class to sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  // Add CSS for fade-in animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
});
