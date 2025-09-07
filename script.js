// Birthday Gift Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check if user came from welcome page
    checkUserData();
    
    // Initialize the website
    initializeWebsite();
    
    // Load media files
    loadMediaFiles();
    
    // Add smooth scrolling for navigation links
    addSmoothScrolling();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add interactive elements
    addInteractiveElements();
    
    // Initialize music player
    initializeMusicPlayer();
});

// Check user data from welcome page
function checkUserData() {
    const userData = localStorage.getItem('birthdayUserData');
    
    if (userData) {
        try {
            const data = JSON.parse(userData);
            personalizeWebsite(data);
        } catch (e) {
            console.log('Error parsing user data:', e);
        }
    } else {
        // If no user data and we're on the celebration page, redirect to welcome
        if (window.location.pathname === '/celebration' || window.location.pathname === '/index.html') {
            window.location.href = '/';
        } else {
            // If we're already on welcome page, just use default values
            console.log('No user data found, using default values');
        }
    }
}

// Personalize website with user data
function personalizeWebsite(userData) {
    // Update the personalized name
    const nameElement = document.getElementById('personalizedName');
    if (nameElement && userData.name) {
        nameElement.textContent = userData.name + '!';
        
        // Add special animation for the name
        nameElement.style.animation = 'nameReveal 1s ease-out';
    }
    
    // Update colors based on favorite color
    if (userData.favoriteColor) {
        updateColorScheme(userData.favoriteColor);
    }
    
    // Add favorite emoji to various places
    if (userData.favoriteEmoji) {
        addFavoriteEmoji(userData.favoriteEmoji);
    }
    
    // Update content based on happiness source
    if (userData.happinessSource) {
        updateContentBasedOnHappiness(userData.happinessSource);
    }
    
    // Show personalized welcome message
    showPersonalizedWelcome(userData.name);
}

// Update color scheme based on favorite color
function updateColorScheme(color) {
    const colorSchemes = {
        pink: { primary: '#ff6b6b', secondary: '#ff8e8e', accent: '#ffd93d' },
        purple: { primary: '#9c27b0', secondary: '#ba68c8', accent: '#e1bee7' },
        blue: { primary: '#2196f3', secondary: '#64b5f6', accent: '#bbdefb' },
        green: { primary: '#4caf50', secondary: '#81c784', accent: '#c8e6c9' },
        yellow: { primary: '#ffeb3b', secondary: '#fff176', accent: '#fff9c4' },
        red: { primary: '#f44336', secondary: '#ef5350', accent: '#ffcdd2' }
    };
    
    const scheme = colorSchemes[color];
    if (scheme) {
        document.documentElement.style.setProperty('--primary-color', scheme.primary);
        document.documentElement.style.setProperty('--secondary-color', scheme.secondary);
        document.documentElement.style.setProperty('--accent-color', scheme.accent);
    }
}

// Add favorite emoji throughout the site
function addFavoriteEmoji(emoji) {
    // Add emoji to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = `Another year of friendship, laughter, and amazing memories! ${emoji}`;
    }
    
    // Add emoji to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        if (!title.textContent.includes(emoji)) {
            title.textContent += ` ${emoji}`;
        }
    });
}

// Update content based on happiness source
function updateContentBasedOnHappiness(source) {
    const happinessContent = {
        friends: {
            memory: "Remember all those amazing times we've had? The best memories are made with people like you!",
            wish: "Thank you for being such an incredible friend. Our friendship means the world to me!"
        },
        family: {
            memory: "Family moments are so precious, and you're like family to me! Here's to all the wonderful times we've shared!",
            wish: "You're not just a friend, you're family! Thank you for all the love and support!"
        },
        adventure: {
            memory: "All our adventures have been absolutely amazing! Here's to many more exciting journeys ahead!",
            wish: "Thank you for being my adventure buddy! Let's plan many more exciting escapades!"
        },
        music: {
            memory: "Remember all those times we've danced and sang? Music brings us so much joy!",
            wish: "Thank you for all the musical moments and shared playlists! You make every day more melodious!"
        },
        food: {
            memory: "All those delicious meals and food adventures we've had! Good food tastes even better with great people!",
            wish: "Thank you for all the amazing food memories! Let's continue our culinary adventures!"
        },
        movies: {
            memory: "All those movie nights and binge-watching sessions! The best movies are even better when watched with you!",
            wish: "Thank you for being my movie buddy! Here's to many more film marathons!"
        },
        books: {
            memory: "All those book recommendations and reading discussions! Sharing stories with you makes everything more meaningful!",
            wish: "Thank you for all the great book recommendations and literary conversations! You make reading even more enjoyable!"
        },
        nature: {
            memory: "All those beautiful moments we've spent in nature! The outdoors is so much more magical with you!",
            wish: "Thank you for all the peaceful nature walks and outdoor adventures! You make every moment in nature special!"
        }
    };
    
    const content = happinessContent[source];
    if (content) {
        // Update memory content
        const memoryItems = document.querySelectorAll('.memory-content p');
        if (memoryItems.length > 0) {
            memoryItems[0].textContent = content.memory;
        }
        
        // Update wish content
        const wishCards = document.querySelectorAll('.wish-card p');
        if (wishCards.length > 0) {
            wishCards[0].textContent = content.wish;
        }
    }
}

// Show personalized welcome message
function showPersonalizedWelcome(name) {
    const messages = [
        `Welcome to your special day, ${name}! 🎉`,
        `Get ready for an amazing celebration, ${name}! ✨`,
        `This is all for you, ${name}! 🎁`,
        `Let's make this birthday unforgettable, ${name}! 🌟`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create floating message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '20px 30px';
    messageDiv.style.borderRadius = '25px';
    messageDiv.style.fontSize = '1.2rem';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.zIndex = '2000';
    messageDiv.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    messageDiv.style.animation = 'fadeInOut 3s ease-in-out';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Initialize website with special effects
function initializeWebsite() {
    // Add floating hearts on load
    createFloatingHearts();
    
    // Add confetti animation
    createConfetti();
    
    // Add birthday music (optional)
    // playBirthdayMusic();
    
    console.log('🎉 Birthday website initialized! 🎉');
}

// Load media files from local directory
function loadMediaFiles() {
    // Define the media files
    const mediaFiles = [
        // Images
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.10 AM (1).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.10 AM.jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.11 AM (1).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.11 AM (2).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.11 AM.jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.12 AM (1).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.12 AM (2).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.12 AM.jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.13 AM (1).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.13 AM (2).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.13 AM.jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.14 AM (1).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.14 AM (2).jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.14 AM.jpeg',
        'media/rolling-tape/images/WhatsApp Image 2025-09-07 at 2.26.15 AM.jpeg',
        // Videos
        'media/rolling-tape/videos/WhatsApp Video 2025-09-07 at 2.26.15 AM.mp4',
        'media/rolling-tape/videos/WhatsApp Video 2025-09-07 at 2.26.16 AM (1).mp4',
        'media/rolling-tape/videos/WhatsApp Video 2025-09-07 at 2.26.16 AM.mp4'
    ];
    
    // Initialize slideshow with media files
    initializeSlideshow(mediaFiles);
    
    // Initialize 3D film strip with media files
    initialize3DFilmStrip(mediaFiles);
    
    console.log('📸 Media files loaded:', mediaFiles.length);
}

// Initialize slideshow with media files
function initializeSlideshow(mediaFiles) {
    const slideshowWrapper = document.querySelector('.slideshow-wrapper');
    const slideIndicators = document.getElementById('slideIndicators');
    const totalSlidesElement = document.getElementById('totalSlides');
    
    if (!slideshowWrapper || !slideIndicators || !totalSlidesElement) {
        console.error('Slideshow elements not found!');
        return;
    }
    
    // Clear existing slides
    slideshowWrapper.innerHTML = '';
    slideIndicators.innerHTML = '';
    
    // Create slides for each media file
    mediaFiles.forEach((mediaFile, index) => {
        // Create slide element
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.id = `slide-${index}`;
        if (index === 0) slide.classList.add('active');
        
        // Create media element (img or video)
        const mediaElement = mediaFile.includes('.mp4') ? 
            document.createElement('video') : 
            document.createElement('img');
        
        mediaElement.src = mediaFile;
        mediaElement.alt = `Memory ${index + 1}`;
        
        if (mediaElement.tagName === 'VIDEO') {
            mediaElement.controls = true;
            mediaElement.muted = true;
            mediaElement.loop = true;
            mediaElement.preload = 'metadata';
            mediaElement.style.width = '100%';
            mediaElement.style.height = '100%';
            mediaElement.style.objectFit = 'cover';
        }
        
        slide.appendChild(mediaElement);
        slideshowWrapper.appendChild(slide);
        
        // Add click event to open lightbox
        slide.addEventListener('click', () => {
            openLightbox(mediaFile);
        });
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            // This will be handled by the slideshow controls
            if (window.goToSlide) {
                window.goToSlide(index);
            }
        });
        slideIndicators.appendChild(indicator);
    });
    
    // Update total slides count
    totalSlidesElement.textContent = mediaFiles.length;
    
    // Add slideshow controls
    addSlideshowControls(mediaFiles.length);
    
    console.log('🎬 Slideshow initialized with', mediaFiles.length, 'slides');
}

// Initialize 3D film strip with media files
function initialize3DFilmStrip(mediaFiles) {
    const filmStrip3D = document.getElementById('filmStrip3D');
    
    if (!filmStrip3D) {
        console.error('3D film strip element not found!');
        return;
    }
    
    // Clear existing frames
    filmStrip3D.innerHTML = '';
    
    // Create film frames for each media file
    mediaFiles.forEach((mediaFile, index) => {
        const frame = document.createElement('div');
        frame.className = 'film-frame-3d';
        
        // Create media element
        const mediaElement = mediaFile.includes('.mp4') ? 
            document.createElement('video') : 
            document.createElement('img');
        
        mediaElement.src = mediaFile;
        mediaElement.alt = `Memory ${index + 1}`;
        
        if (mediaElement.tagName === 'VIDEO') {
            mediaElement.muted = true;
            mediaElement.loop = true;
            mediaElement.autoplay = true;
            mediaElement.preload = 'metadata';
            mediaElement.style.width = '100%';
            mediaElement.style.height = '100%';
            mediaElement.style.objectFit = 'cover';
        }
        
        frame.appendChild(mediaElement);
        filmStrip3D.appendChild(frame);
        
        // Add click event to open lightbox
        frame.addEventListener('click', () => {
            openLightbox(mediaFile);
        });
    });
    
    console.log('🎞️ 3D film strip initialized with', mediaFiles.length, 'frames');
}

// Add slideshow controls
function addSlideshowControls(totalSlides) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const currentSlideElement = document.getElementById('currentSlide');
    
    console.log('🎮 Initializing slideshow controls:', {
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        playPauseBtn: !!playPauseBtn,
        currentSlideElement: !!currentSlideElement,
        totalSlides: totalSlides
    });
    
    let currentSlide = 0;
    let isPlaying = true;
    let slideInterval;
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        
        // Remove active class from current slide and indicator
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Update current slide
        currentSlide = slideIndex;
        
        // Add active class to new slide and indicator
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
        
        // Update current slide counter
        if (currentSlideElement) {
            currentSlideElement.textContent = currentSlide + 1;
        }
    }
    
    // Make goToSlide globally accessible
    window.goToSlide = goToSlide;
    
    // Next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    }
    
    // Toggle play/pause
    function togglePlayPause() {
        isPlaying = !isPlaying;
        const icon = playPauseBtn.querySelector('i');
        
        if (isPlaying) {
            icon.className = 'fas fa-pause';
            startAutoPlay();
            console.log('▶️ Slideshow started');
        } else {
            icon.className = 'fas fa-play';
            clearInterval(slideInterval);
            console.log('⏸️ Slideshow paused');
        }
    }
    
    // Start auto play
    function startAutoPlay() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }
    
    // Add event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    
    // Start auto play initially
    startAutoPlay();
    
    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                clearInterval(slideInterval);
            }
        });
        
        slideshowContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                startAutoPlay();
            }
        });
        
        // Add touch/swipe support
        addTouchSwipeSupport(slideshowContainer, nextSlide, prevSlide);
    }
}

// Add touch/swipe support for slideshow
function addTouchSwipeSupport(container, nextSlide, prevSlide) {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let isDragging = false;
    
    // Touch events
    container.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    }, { passive: true });
    
    container.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
        endY = e.touches[0].clientY;
    }, { passive: true });
    
    container.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe right - go to previous slide
                prevSlide();
            } else {
                // Swipe left - go to next slide
                nextSlide();
            }
        }
    }, { passive: true });
    
    // Mouse events for PC
    container.addEventListener('mousedown', function(e) {
        startX = e.clientX;
        startY = e.clientY;
        isDragging = true;
        e.preventDefault();
    });
    
    container.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        endX = e.clientX;
        endY = e.clientY;
    });
    
    container.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe right - go to previous slide
                prevSlide();
            } else {
                // Swipe left - go to next slide
                nextSlide();
            }
        }
    });
    
    // Prevent context menu on long press
    container.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
}

// Smooth scrolling for navigation
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.gallery-item, .wish-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Interactive elements
function addInteractiveElements() {
    // Add mobile navigation toggle
    addMobileNavigation();
    
    // Add event listeners for celebration button
    const celebrationButton = document.getElementById('celebrationButton');
    if (celebrationButton) {
        celebrationButton.addEventListener('click', startCelebration);
    }
    
    // Add event listeners for gift box
    const giftBox = document.getElementById('giftBox');
    if (giftBox) {
        giftBox.addEventListener('click', openGift);
    }
    
    // Add event listeners for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        // Hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Click to open lightbox
        item.addEventListener('click', function() {
            const photoId = this.getAttribute('data-photo');
            if (photoId) {
                openLightbox(photoId);
            }
        });
    });
    
    // Add click effects to wish cards
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Mobile navigation functionality
function addMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        // Toggle mobile menu
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Start celebration function
function startCelebration() {
    console.log('🎉 Start celebration function called!');
    
    // Create more confetti
    createConfetti();
    
    // Add celebration sound effect (optional)
    // playCelebrationSound();
    
    // Scroll to photos section
    const photosSection = document.querySelector('#photos');
    if (photosSection) {
        photosSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Add celebration animation
    const button = document.querySelector('.cta-button');
    if (button) {
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = 'bounce 0.6s ease';
        }, 10);
    }
    
    // Show celebration message
    showCelebrationMessage();
}

// Show celebration message
function showCelebrationMessage() {
    const messages = [
        "Let's celebrate! 🎉",
        "The party starts now! 🎈",
        "Time for some fun! ✨",
        "Here we go! 🌟"
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
    messageDiv.style.fontSize = '1.1rem';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.zIndex = '2000';
    messageDiv.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    messageDiv.style.animation = 'fadeInOut 3s ease-in-out';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }, i * 500);
    }
}

// Create confetti animation
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd93d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '1000';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Lightbox functionality
function openLightbox(mediaSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (!lightbox || !lightboxImg) {
        console.error('Lightbox elements not found!');
        return;
    }
    
    // Set media source
    lightboxImg.src = mediaSrc;
    lightboxImg.alt = 'Memory';
    
    // Handle video files
    if (mediaSrc.includes('.mp4')) {
        // Replace img with video element
        const video = document.createElement('video');
        video.src = mediaSrc;
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.borderRadius = '10px';
        
        // Replace the img with video
        lightboxImg.parentNode.replaceChild(video, lightboxImg);
        
        // Store reference for cleanup
        lightbox.currentMedia = video;
    } else {
        // Ensure we have an img element
        if (lightboxImg.tagName !== 'IMG') {
            const img = document.createElement('img');
            img.id = 'lightbox-img';
            img.src = mediaSrc;
            img.alt = 'Memory';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.borderRadius = '10px';
            
            if (lightbox.currentMedia) {
                lightbox.currentMedia.parentNode.replaceChild(img, lightbox.currentMedia);
            } else {
                lightbox.querySelector('.lightbox-content').appendChild(img);
            }
            
            lightbox.currentMedia = img;
        } else {
            lightbox.currentMedia = lightboxImg;
        }
    }
    
    lightbox.style.display = 'block';
    
    // Add entrance animation
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Stop video if playing
    if (lightbox.currentMedia && lightbox.currentMedia.tagName === 'VIDEO') {
        lightbox.currentMedia.pause();
        lightbox.currentMedia.currentTime = 0;
    }
    
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
}

// Gift box functionality
function openGift() {
    console.log('🎁 Gift box clicked!');
    
    const surpriseModal = document.getElementById('surprise-modal');
    if (!surpriseModal) {
        console.error('Surprise modal not found!');
        return;
    }
    
    surpriseModal.style.display = 'block';
    
    // Add entrance animation
    surpriseModal.style.opacity = '0';
    setTimeout(() => {
        surpriseModal.style.opacity = '1';
    }, 10);
    
    // Create more confetti for surprise
    createConfetti();
    
    // Add celebration sound (optional)
    // playSurpriseSound();
}

function closeSurprise() {
    const surpriseModal = document.getElementById('surprise-modal');
    surpriseModal.style.opacity = '0';
    setTimeout(() => {
        surpriseModal.style.display = 'none';
    }, 300);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close lightbox with Escape key
    if (e.key === 'Escape') {
        closeLightbox();
        closeSurprise();
    }
});

// Add click outside to close modals
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    const surpriseModal = document.getElementById('surprise-modal');
    
    if (e.target === lightbox) {
        closeLightbox();
    }
    
    if (e.target === surpriseModal) {
        closeSurprise();
    }
});

// Add special birthday message
function showBirthdayMessage() {
    const messages = [
        "You're the most amazing friend anyone could ask for! 💕",
        "Thank you for all the laughter and wonderful memories! 🎈",
        "Here's to another year of friendship and adventures! 🌟",
        "You make every day brighter just by being you! ✨",
        "Happy Birthday to the most incredible person! 🎂"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create floating message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '20px 30px';
    messageDiv.style.borderRadius = '25px';
    messageDiv.style.fontSize = '1.2rem';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.zIndex = '2000';
    messageDiv.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    messageDiv.style.animation = 'fadeInOut 3s ease-in-out';
    
    document.body.appendChild(messageDiv);
    
    // Remove message after animation
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add CSS for fade in/out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);

// Show birthday message on page load
setTimeout(showBirthdayMessage, 2000);

// Add special effects on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Create hearts when scrolling up
    if (scrollTop < lastScrollTop && scrollTop > 100) {
        if (Math.random() < 0.1) { // 10% chance
            createFloatingHearts();
        }
    }
    
    lastScrollTop = scrollTop;
});


// Add special birthday countdown (if needed)
function addBirthdayCountdown() {
    // This could be expanded to show countdown to next birthday
    console.log('Birthday countdown feature ready!');
}

// Initialize countdown
addBirthdayCountdown();

// Enhanced mobile support
function addMobileOptimizations() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    if (isMobile) {
        console.log('📱 Mobile device detected - applying optimizations');
        
        // Add mobile class to body
        document.body.classList.add('mobile-device');
        
        // Add touch-specific interactions
        const touchElements = document.querySelectorAll('.gallery-item, .wish-card, .cta-button, .gift-box, .slideshow-btn, .indicator');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';
                e.preventDefault();
            }, { passive: false });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
            
            element.addEventListener('touchcancel', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Improve touch scrolling
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // Add touch feedback for buttons
        const buttons = document.querySelectorAll('button, .nav-link');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
            });
            
            button.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
            
            button.addEventListener('touchcancel', function() {
                this.style.opacity = '1';
            });
        });
        
        // Optimize slideshow for mobile
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.style.touchAction = 'pan-y pinch-zoom';
        }
        
        // Add mobile-specific event listeners
        addMobileEventListeners();
    }
}

// Add mobile-specific event listeners
function addMobileEventListeners() {
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            // Recalculate 3D film strip positions
            const filmStrip = document.getElementById('filmStrip3D');
            if (filmStrip) {
                filmStrip.style.transform = 'translate(-50%, -50%) rotateY(0deg)';
                setTimeout(() => {
                    filmStrip.style.transform = 'translate(-50%, -50%) rotateY(0deg)';
                }, 100);
            }
        }, 500);
    });
    
    // Add pull-to-refresh prevention
    let startY = 0;
    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', function(e) {
        const currentY = e.touches[0].clientY;
        if (currentY > startY && window.scrollY === 0) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Initialize mobile optimizations
addMobileOptimizations();

// Music Player Functionality
function initializeMusicPlayer() {
    const musicBtn = document.getElementById('musicBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicInfo = document.getElementById('musicInfo');
    
    if (!musicBtn || !backgroundMusic) {
        console.log('Music player elements not found');
        return;
    }
    
    let isPlaying = false;
    
    // Set up the local song file
    // The song file should be placed in the 'music' folder
    const songUrl = 'music/the-night-we-met.mp3';
    backgroundMusic.src = songUrl;
    
    // Music button click handler
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    // Play music function
    function playMusic() {
        backgroundMusic.play().then(() => {
            isPlaying = true;
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            musicInfo.style.opacity = '1';
            console.log('🎵 Music started playing');
        }).catch(error => {
            console.log('Error playing music:', error);
            // Show user-friendly message
            showMusicError();
        });
    }
    
    // Pause music function
    function pauseMusic() {
        backgroundMusic.pause();
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        console.log('⏸️ Music paused');
    }
    
    // Handle music end
    backgroundMusic.addEventListener('ended', function() {
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        console.log('🎵 Music ended');
    });
    
    // Handle music errors
    backgroundMusic.addEventListener('error', function(e) {
        console.log('Music error:', e);
        showMusicError();
    });
    
    // Show music error message
    function showMusicError() {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = '🎵 Music will play when you add the song file!';
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
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
    
    // Add hover effect to show song info
    musicBtn.addEventListener('mouseenter', function() {
        musicInfo.style.opacity = '1';
    });
    
    musicBtn.addEventListener('mouseleave', function() {
        if (!isPlaying) {
            musicInfo.style.opacity = '0.7';
        }
    });
    
    // Initialize music info opacity
    musicInfo.style.opacity = '0.7';
    musicInfo.style.transition = 'opacity 0.3s ease';
    
    // Show popup message on page load
    showMusicPopup();
    
    console.log('🎵 Music player initialized');
    
    // Add sticky scroll behavior
    addStickyMusicPlayerBehavior();
}

// Add sticky music player scroll behavior
function addStickyMusicPlayerBehavior() {
    const musicPlayer = document.getElementById('musicPlayer');
    
    if (!musicPlayer) return;
    
    let lastScrollTop = 0;
    let ticking = false;
    
    // Throttled scroll handler for better performance
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Add subtle animation when scrolling
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down
                    musicPlayer.classList.add('scrolling');
                } else {
                    // Scrolling up or at top
                    musicPlayer.classList.remove('scrolling');
                }
                
                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Ensure music player is always visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                musicPlayer.style.visibility = 'visible';
                musicPlayer.style.opacity = '1';
            }
        });
    }, { threshold: 0 });
    
    observer.observe(musicPlayer);
    
    // Add click-to-focus behavior
    musicPlayer.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
    
    console.log('🎵 Sticky music player behavior added');
}

// Show music popup message
function showMusicPopup() {
    const musicPlayer = document.getElementById('musicPlayer');
    
    if (!musicPlayer) return;
    
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'music-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="popup-text">Your favourite song - play it!</span>
            <div class="popup-arrow"></div>
        </div>
    `;
    
    // Add popup styles - positioned below music player
    popup.style.cssText = `
        position: fixed;
        top: 180px;
        right: 20px;
        z-index: 10000;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    `;
    
    // Add popup content styles
    const popupContent = popup.querySelector('.popup-content');
    popupContent.style.cssText = `
        background: linear-gradient(45deg, #ff6b6b, #ffd93d);
        color: white;
        padding: 12px 18px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        position: relative;
        white-space: nowrap;
        text-align: center;
    `;
    
    // Add popup arrow styles - pointing up to music player
    const popupArrow = popup.querySelector('.popup-arrow');
    popupArrow.style.cssText = `
        position: absolute;
        top: -8px;
        right: 15px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #ff6b6b;
    `;
    
    // Add popup to body as floating element
    document.body.appendChild(popup);
    
    // Show popup with animation
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
    }, 1000); // Show after 1 second
    
    // Hide popup after 4 seconds
    setTimeout(() => {
        popup.style.opacity = '0';
        popup.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 300);
    }, 5000); // Hide after 5 seconds total
    
    // Show popup on hover
    musicPlayer.addEventListener('mouseenter', function() {
        if (!document.querySelector('.music-popup')) {
            showMusicPopup();
        }
    });
    
    // Show popup when user scrolls
    let lastScrollTop = 0;
    let scrollTimeout;
    let popupShownRecently = false;
    let scrollCount = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        scrollCount++;
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Show popup when scrolling (increased frequency)
        if (!popupShownRecently && scrollCount % 3 === 0 && Math.random() < 0.4) {
            scrollTimeout = setTimeout(() => {
                if (!document.querySelector('.music-popup')) {
                    showMusicPopup();
                    popupShownRecently = true;
                    
                    // Reset the flag after 8 seconds
                    setTimeout(() => {
                        popupShownRecently = false;
                    }, 8000);
                }
            }, 500);
        }
        
        lastScrollTop = scrollTop;
    });
    
    console.log('🎵 Music popup message shown');
}

// Make functions globally accessible
window.startCelebration = startCelebration;
window.openGift = openGift;
window.closeSurprise = closeSurprise;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// Test function availability
console.log('Functions available:', {
    startCelebration: typeof startCelebration,
    openGift: typeof openGift,
    closeSurprise: typeof closeSurprise
});

console.log('🎂 Birthday website fully loaded! Enjoy the celebration! 🎉');
