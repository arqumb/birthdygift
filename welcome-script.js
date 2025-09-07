// Welcome Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeWelcomePage();
    addInputValidation();
    addQuestionInteractions();
    createWelcomeAnimations();
});

// Initialize welcome page
function initializeWelcomePage() {
    // Focus on name input
    const nameInput = document.getElementById('nameInput');
    nameInput.focus();
    
    // Add typing animation to placeholder
    addTypingAnimation();
    
    console.log('🎉 Welcome page initialized! 🎉');
}

// Add input validation
function addInputValidation() {
    const nameInput = document.getElementById('nameInput');
    const enterButton = document.getElementById('enterButton');
    
    nameInput.addEventListener('input', function() {
        const name = this.value.trim();
        
        if (name.length > 0) {
            enterButton.disabled = false;
            enterButton.style.opacity = '1';
            enterButton.style.pointerEvents = 'auto';
            
            // Add sparkle effect
            createSparkleEffect(this);
        } else {
            enterButton.disabled = true;
            enterButton.style.opacity = '0.5';
            enterButton.style.pointerEvents = 'none';
        }
    });
    
    // Allow Enter key to submit
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !enterButton.disabled) {
            enterCelebration();
        }
    });
}

// Add question interactions
function addQuestionInteractions() {
    const selects = document.querySelectorAll('.question-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                // Add celebration effect
                createCelebrationEffect(this);
                
                // Add confetti
                createConfetti();
            }
        });
    });
}

// Create welcome animations
function createWelcomeAnimations() {
    // Create floating hearts periodically
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance
            createFloatingHeart();
        }
    }, 3000);
    
    // Create floating balloons periodically
    setInterval(() => {
        if (Math.random() < 0.2) { // 20% chance
            createFloatingBalloon();
        }
    }, 5000);
}

// Add typing animation to placeholder
function addTypingAnimation() {
    const nameInput = document.getElementById('nameInput');
    const originalPlaceholder = nameInput.placeholder;
    let index = 0;
    
    function typePlaceholder() {
        if (index < originalPlaceholder.length) {
            nameInput.placeholder = originalPlaceholder.substring(0, index + 1);
            index++;
            setTimeout(typePlaceholder, 100);
        } else {
            // Wait a bit then start over
            setTimeout(() => {
                index = 0;
                nameInput.placeholder = '';
                setTimeout(typePlaceholder, 1000);
            }, 2000);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(typePlaceholder, 1000);
}

// Create sparkle effect
function createSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = '-20px';
    sparkle.style.zIndex = '1000';
    
    element.parentElement.style.position = 'relative';
    element.parentElement.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Create celebration effect
function createCelebrationEffect(element) {
    element.style.transform = 'scale(1.05)';
    element.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.5)';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '0 0 15px rgba(255, 107, 107, 0.2)';
    }, 300);
}

// Create floating heart
function createFloatingHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 6) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create floating balloon
function createFloatingBalloon() {
    const balloonsContainer = document.querySelector('.balloons-container');
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerHTML = '🎈';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDuration = (Math.random() * 4 + 10) + 's';
    balloon.style.animationDelay = Math.random() * 2 + 's';
    balloonsContainer.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 15000);
}

// Create confetti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b6b', '#ffd93d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            confetti.style.zIndex = '1000';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Enter celebration function
function enterCelebration() {
    const nameInput = document.getElementById('nameInput');
    const favoriteColor = document.getElementById('favoriteColor');
    const favoriteEmoji = document.getElementById('favoriteEmoji');
    const happinessSource = document.getElementById('happinessSource');
    
    const name = nameInput.value.trim();
    
    if (!name) {
        // Shake animation for empty input
        nameInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            nameInput.style.animation = '';
        }, 500);
        return;
    }
    
    // Show loading section
    const loadingSection = document.getElementById('loadingSection');
    const welcomeContent = document.querySelector('.welcome-content');
    
    welcomeContent.style.opacity = '0';
    welcomeContent.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        loadingSection.style.display = 'block';
        loadingSection.style.opacity = '1';
    }, 300);
    
    // Create celebration confetti
    createConfetti();
    
    // Store user data in localStorage
    const userData = {
        name: name,
        favoriteColor: favoriteColor.value,
        favoriteEmoji: favoriteEmoji.value,
        happinessSource: happinessSource.value,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('birthdayUserData', JSON.stringify(userData));
    
    // Redirect after loading animation
    setTimeout(() => {
        window.location.href = '/celebration';
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Allow Enter key to submit from any input
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'SELECT' || activeElement.id === 'nameInput') {
            e.preventDefault();
            if (!document.getElementById('enterButton').disabled) {
                enterCelebration();
            }
        }
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    // Add touch feedback for buttons and inputs
    const interactiveElements = document.querySelectorAll('.name-input, .question-select, .enter-button');
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Add special welcome message
function showWelcomeMessage() {
    const messages = [
        "Welcome to your special day! 🎉",
        "Get ready for something amazing! ✨",
        "Your surprise is waiting for you! 🎁",
        "Let's make this birthday unforgettable! 🌟"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create floating message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '15px 25px';
    messageDiv.style.borderRadius = '25px';
    messageDiv.style.fontSize = '1rem';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.zIndex = '2000';
    messageDiv.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    messageDiv.style.animation = 'fadeInOut 3s ease-in-out';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Show welcome message on page load
setTimeout(showWelcomeMessage, 1500);

console.log('🎂 Welcome page fully loaded! Ready for the celebration! 🎉');
