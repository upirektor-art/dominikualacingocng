// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    const linkButtons = document.querySelectorAll('.link-button');
    const logo = document.querySelector('.logo');
    const container = document.querySelector('.container');
    
    // Create floating particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 800);
    
    // Enhanced button interactions
    linkButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create multiple ripple effects
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height) * 1.5;
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.classList.add('ripple');
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 800);
                }, i * 100);
            }
            
            // Enhanced button press animation
            this.style.transform = 'translateY(-2px) scale(0.95)';
            this.style.filter = 'brightness(1.2)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-4px) scale(1.02)';
                this.style.filter = 'brightness(1)';
            }, 200);
            
            // Simulate navigation with cool effect
            const buttonText = this.querySelector('span').textContent;
            
            // Create explosion effect
            for (let i = 0; i < 12; i++) {
                const spark = document.createElement('div');
                spark.style.position = 'absolute';
                spark.style.width = '6px';
                spark.style.height = '6px';
                spark.style.background = 'linear-gradient(45deg, #FFE66D, #78B2FB)';
                spark.style.borderRadius = '50%';
                spark.style.pointerEvents = 'none';
                spark.style.zIndex = '1000';
                
                const rect = this.getBoundingClientRect();
                spark.style.left = (rect.left + rect.width / 2) + 'px';
                spark.style.top = (rect.top + rect.height / 2) + 'px';
                
                document.body.appendChild(spark);
                
                const angle = (i / 12) * Math.PI * 2;
                const velocity = 100 + Math.random() * 50;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                spark.animate([
                    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                    { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => spark.remove();
            }
            
            setTimeout(() => {
                // Create a more sophisticated notification
                showNotification(`🚀 Navigating to ${buttonText}...`);
            }, 300);
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
            
            // Add glow effect
            this.style.boxShadow = this.style.boxShadow.replace('0 8px 25px', '0 15px 40px');
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0px) scale(1)';
        });
    });
    
    // Enhanced logo interaction
    logo.addEventListener('click', function() {
        // Create rainbow ripple effect
        const colors = ['#FFE66D', '#78B2FB', '#EE3A6A', '#9E0232', '#F5A6BB'];
        
        colors.forEach((color, index) => {
            setTimeout(() => {
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.width = '0';
                ripple.style.height = '0';
                ripple.style.background = color;
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.pointerEvents = 'none';
                ripple.style.zIndex = '0';
                
                this.parentElement.appendChild(ripple);
                
                ripple.animate([
                    { width: '0', height: '0', opacity: 0.8 },
                    { width: '300px', height: '300px', opacity: 0 }
                ], {
                    duration: 1500,
                    easing: 'ease-out'
                }).onfinish = () => ripple.remove();
            }, index * 200);
        });
        
        // Logo animation
        this.style.transform = 'scale(1.15) rotate(360deg)';
        this.style.filter = 'brightness(1.3) saturate(1.5)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'brightness(1) saturate(1)';
        }, 600);
    });
    
    // Advanced floating animation for container
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    });
    
    function updateContainerPosition() {
        const time = Date.now() * 0.001;
        const floatX = Math.sin(time * 0.5) * 3 + mouseX * 0.1;
        const floatY = Math.cos(time * 0.3) * 2 + mouseY * 0.1;
        const rotation = Math.sin(time * 0.2) * 1;
        
        container.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${rotation}deg)`;
        
        requestAnimationFrame(updateContainerPosition);
    }
    
    updateContainerPosition();
    
    // Notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 30px;
            right: 30px;
            background: linear-gradient(135deg, #9E0232, #EE3A6A);
            color: white;
            padding: 16px 24px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 10px 30px rgba(158, 2, 50, 0.3);
            z-index: 10000;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transform: translateX(400px);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
});

// Enhanced CSS for ripple and other effects
const style = document.createElement('style');
style.textContent = `
    .link-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 70%, transparent 100%);
        transform: scale(0);
        animation: ripple-animation 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        pointer-events: none;
        z-index: 0;
    }
    
    @keyframes ripple-animation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Scrollbar styling */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(255, 254, 224, 0.1);
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #9E0232, #EE3A6A);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #EE3A6A, #9E0232);
    }
`;
document.head.appendChild(style);