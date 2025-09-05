// Add click animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    const linkButtons = document.querySelectorAll('.link-button');
    const logo = document.querySelector('.logo');
    
    // Add click effect to buttons
    linkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Add button press animation
            this.style.transform = 'translateY(0px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            
            // Here you would normally redirect to the actual links
            // For demo purposes, we'll just show an alert
            const buttonText = this.querySelector('span').textContent;
            setTimeout(() => {
                alert(`Redirecting to ${buttonText}...`);
            }, 200);
        });
        
        // Add hover sound effect (optional)
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0px) scale(1)';
        });
    });
    
    // Add logo click interaction
    logo.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
    
    // Add floating animation to the container
    const container = document.querySelector('.container');
    let floatDirection = 1;
    
    setInterval(() => {
        const currentTransform = container.style.transform || 'translateY(0px)';
        const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)\)/)?.[1] || 0);
        const newY = currentY + (floatDirection * 0.5);
        
        if (Math.abs(newY) > 3) {
            floatDirection *= -1;
        }
        
        container.style.transform = `translateY(${newY}px)`;
    }, 100);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .link-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);