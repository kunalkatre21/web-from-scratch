// Basic JavaScript for the project
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success alert
                const successAlert = document.createElement('div');
                successAlert.className = 'alert alert-success mt-4';
                successAlert.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Thank you, ${name}! Your message has been received.</span>
                `;
                
                // Insert success alert after form
                contactForm.parentNode.appendChild(successAlert);
                
                // Reset form
                contactForm.reset();
                
                // Remove success alert after 5 seconds
                setTimeout(() => {
                    successAlert.remove();
                }, 5000);
            }
        });
    }
    
    // Add interactive button effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a simple ripple effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Console welcome message
    console.log('🌼 DaisyUI v5 + Tailwind v4 Project loaded successfully!');
    console.log('Built with modern web technologies including:');
    console.log('- Tailwind CSS v4');
    console.log('- DaisyUI v5');
    console.log('- Vanilla JavaScript');
});