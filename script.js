
document.addEventListener('DOMContentLoaded', function() {
    // Handle FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Savings Calculator
    const calculatorInputs = document.querySelectorAll('#pessoas, #tempo, #preco');
    const economiasMensalElement = document.getElementById('economia-mensal');
    const economiasAnualElement = document.getElementById('economia-anual');
    const roiElement = document.getElementById('roi');
    
    function calculateSavings() {
        const pessoas = parseInt(document.getElementById('pessoas').value);
        const tempo = parseInt(document.getElementById('tempo').value);
        const preco = parseFloat(document.getElementById('preco').value);
        
        // Estimate water usage based on people and shower time
        // Average shower uses 9 liters per minute, Aquamax reduces by 60%
        const regularUsage = pessoas * tempo * 9 * 30; // liters per month
        const savingsLiters = regularUsage * 0.6; // 60% saving
        const savingsCubicMeters = savingsLiters / 1000; // Convert to cubic meters
        
        // Calculate financial savings
        const monthlySavings = savingsCubicMeters * preco;
        const annualSavings = monthlySavings * 12;
        
        // Calculate ROI (assuming product costs R$ 79.90)
        const productCost = 79.90;
        const daysToROI = Math.ceil((productCost / monthlySavings) * 30);
        
        // Update UI
        economiasMensalElement.textContent = `R$ ${monthlySavings.toFixed(2)}`;
        economiasAnualElement.textContent = `R$ ${annualSavings.toFixed(2)}`;
        roiElement.textContent = `Em ${daysToROI} dias`;
    }
    
    // Calculate initial values
    calculateSavings();
    
    // Recalculate when inputs change
    calculatorInputs.forEach(input => {
        input.addEventListener('input', calculateSavings);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Video play functionality
    const videoContainer = document.querySelector('.video-container');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    videoContainer.addEventListener('click', function() {
        // In a real implementation, this would embed a YouTube iframe
        // For this demo, we'll just alert since we're not connecting to actual videos
        alert('Aqui seria reproduzido o vídeo explicativo do Aquamax.');
    });
});
