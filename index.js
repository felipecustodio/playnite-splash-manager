// Playnite Splash Manager - Hello World Application
console.log('🎮 Playnite Splash Manager loaded successfully!');

// Application state
let clickCount = 0;
let isInitialized = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Playnite Splash Manager...');
    initializeApp();
});

// Main initialization function
function initializeApp() {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const statusSection = document.getElementById('statusSection');

    if (!getStartedBtn || !statusSection) {
        console.error('Required elements not found');
        return;
    }

    // Set up event listeners
    setupEventListeners();
    
    // Show initial status
    updateStatus('Ready to explore splash packages!', 'info');
    
    isInitialized = true;
    console.log('✅ Playnite Splash Manager initialized successfully');
}

// Set up all event listeners
function setupEventListeners() {
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    getStartedBtn.addEventListener('click', handleGetStartedClick);
    
    // Add some interactive hover effects
    const cards = document.querySelectorAll('.card-glass');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log('Card hovered');
        });
    });
}

// Handle the "Get Started" button click
function handleGetStartedClick() {
    clickCount++;
    console.log(`Get Started button clicked! Count: ${clickCount}`);
    
    const messages = [
        { text: 'Hello, World! Welcome to Playnite Splash Manager! 🎮', type: 'success' },
        { text: 'Exploring splash screen packages... 📦', type: 'info' },
        { text: 'Discovering amazing video collections! 🎬', type: 'info' },
        { text: 'Loading curated image galleries... 🖼️', type: 'info' },
        { text: 'Package manager ready for action! ⚡', type: 'success' },
        { text: 'You\'re all set! Time to beautify your Playnite! ✨', type: 'success' }
    ];
    
    const messageIndex = (clickCount - 1) % messages.length;
    const currentMessage = messages[messageIndex];
    
    // Update the button text temporarily
    updateButtonState(true);
    
    // Simulate some processing time
    setTimeout(() => {
        updateStatus(currentMessage.text, currentMessage.type);
        updateButtonState(false);
        
        // Special message for multiple clicks
        if (clickCount > messages.length) {
            const extraMessages = [
                'Still clicking? I like your enthusiasm! 😄',
                'Pro tip: This is just a Hello World demo! 💡',
                'The real app will have actual splash packages! 🚀',
                'Thanks for testing the button! 🙏'
            ];
            const extraIndex = (clickCount - messages.length - 1) % extraMessages.length;
            setTimeout(() => {
                updateStatus(extraMessages[extraIndex], 'info');
            }, 1000);
        }
    }, 800);
}

// Update the status section with a message
function updateStatus(message, type = 'info') {
    const statusSection = document.getElementById('statusSection');
    
    const iconMap = {
        success: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>',
        warning: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    };
    
    const colorMap = {
        success: 'border-green-400/30 bg-green-400/10',
        info: 'border-blue-400/30 bg-blue-400/10',
        warning: 'border-yellow-400/30 bg-yellow-400/10'
    };
    
    statusSection.innerHTML = `
        <div class="card-glass rounded-xl p-4 max-w-md mx-auto ${colorMap[type]} border">
            <div class="flex items-center justify-center space-x-3">
                ${iconMap[type]}
                <span class="text-white font-medium">${message}</span>
            </div>
        </div>
    `;
    
    // Add a subtle animation
    const statusCard = statusSection.querySelector('.card-glass');
    statusCard.style.opacity = '0';
    statusCard.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        statusCard.style.transition = 'all 0.3s ease';
        statusCard.style.opacity = '1';
        statusCard.style.transform = 'translateY(0)';
    }, 50);
}

// Update button state (loading/normal)
function updateButtonState(isLoading) {
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    if (isLoading) {
        getStartedBtn.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading...</span>
        `;
        getStartedBtn.disabled = true;
        getStartedBtn.classList.add('opacity-80', 'cursor-not-allowed');
    } else {
        getStartedBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span>Get Started</span>
        `;
        getStartedBtn.disabled = false;
        getStartedBtn.classList.remove('opacity-80', 'cursor-not-allowed');
    }
}

// Utility function for logging with style
function logWithStyle(message, style = 'info') {
    const styles = {
        info: 'color: #3B82F6; font-weight: bold;',
        success: 'color: #10B981; font-weight: bold;',
        warning: 'color: #F59E0B; font-weight: bold;',
        error: 'color: #EF4444; font-weight: bold;'
    };
    
    console.log(`%c${message}`, styles[style]);
}

// Export for potential future use
window.PlayniteSplashManager = {
    clickCount,
    isInitialized,
    updateStatus,
    logWithStyle
};

// Welcome message
logWithStyle('🎮 Welcome to Playnite Splash Manager - Hello World Edition!', 'success');