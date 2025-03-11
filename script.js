
document.addEventListener('DOMContentLoaded', function() {
    // Setup video player
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoIframe = document.getElementById('videoIframe');
    const playButton = document.getElementById('playButton');
    
    if (videoPlaceholder && videoIframe && playButton) {
        playButton.addEventListener('click', function() {
            videoPlaceholder.style.display = 'none';
            videoIframe.style.display = 'block';
            
            // Create and add the iframe
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
            iframe.title = 'Aquamax Presentation';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            
            videoIframe.appendChild(iframe);
        });
    }
    
    // Setup Savings Calculator
    const billInput = document.getElementById('bill-amount');
    const calculateBtn = document.getElementById('calculate-btn');
    const savingsValue = document.getElementById('savings-value');
    const yearlySavings = document.getElementById('yearly-savings');
    const savingsMessage = document.getElementById('savings-message');
    const yearlyTotal = document.getElementById('yearly-total');
    
    if (billInput && calculateBtn && savingsValue && yearlySavings && savingsMessage && yearlyTotal) {
        calculateBtn.addEventListener('click', function() {
            if (!billInput.value) return;
            
            // Format the input value (replace comma with dot for calculation)
            const bill = parseFloat(billInput.value.replace(',', '.'));
            
            if (isNaN(bill)) {
                alert('Por favor, insira um valor válido.');
                return;
            }
            
            // Calculate approximate savings (40-60% range)
            const minSavings = bill * 0.4;
            const maxSavings = bill * 0.6;
            const avgSavings = (minSavings + maxSavings) / 2;
            
            // Format the result back to comma decimal separator
            const formattedSavings = avgSavings.toFixed(2).replace('.', ',');
            const formattedYearly = (avgSavings * 12).toFixed(2).replace('.', ',');
            
            // Update the display
            savingsValue.innerHTML = `R$ ${formattedSavings}<span>/mês</span>`;
            yearlySavings.textContent = `R$ ${formattedYearly} por ano!`;
            yearlySavings.classList.add('success');
            
            // Show the savings message
            savingsMessage.style.display = 'block';
            yearlyTotal.textContent = `R$ ${formattedYearly}`;
        });
        
        // Format input as currency
        billInput.addEventListener('input', function(e) {
            // Allow only numbers and comma
            let value = e.target.value.replace(/[^0-9,]/g, '');
            
            // Ensure only one comma
            const commaCount = (value.match(/,/g) || []).length;
            if (commaCount > 1) {
                const firstCommaIndex = value.indexOf(',');
                value = value.substring(0, firstCommaIndex + 1) + value.substring(firstCommaIndex + 1).replace(/,/g, '');
            }
            
            e.target.value = value;
        });
    }
    
    // Setup FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqId = this.getAttribute('data-faq');
            const answer = document.getElementById(`faq-${faqId}`);
            
            // Toggle active class on question
            this.classList.toggle('active');
            
            // Toggle display of answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
    
    // Initialize countdown timer
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (hoursElement && minutesElement && secondsElement) {
        let hours = 23;
        let minutes = 59;
        let seconds = 59;
        
        const updateCountdown = () => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                // Reset to 24 hours when countdown reaches 0
                hours = 23;
                minutes = 59;
                seconds = 59;
            }
            
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        };
        
        // Update every second
        setInterval(updateCountdown, 1000);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            
            // Refresh feather icons
            feather.replace();
        });
    }
    
    // Create images folder structure function
    function createImagesFolder() {
        console.log("Ensure to create an 'images' folder with the following files:");
        console.log("- product-showcase.jpg");
        console.log("- video-placeholder.jpg");
        console.log("- testimonial-1.jpg");
        console.log("- testimonial-2.jpg");
        console.log("- testimonial-3.jpg");
        console.log("- como-funciona-2.png");
        console.log("- placeholder.svg");
    }
    
    // Call the function to print to console
    createImagesFolder();
});

// Add mobile-friendly styles for the nav menu
document.addEventListener('DOMContentLoaded', function() {
    // Add CSS for mobile menu when active
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                padding: 20px;
                display: none;
            }
            
            .nav-menu.active {
                display: block;
            }
            
            .nav-menu ul {
                flex-direction: column;
                gap: 15px;
            }
        }
    `;
    document.head.appendChild(style);
});
