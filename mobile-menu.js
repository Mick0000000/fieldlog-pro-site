// Field Log Pro - Mobile Menu Script

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#demo-video') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Track CTA clicks
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const location = this.closest('section')?.className || 'unknown';
            
            // Google Analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'button_text': buttonText,
                    'location': location
                });
            }
            
            console.log('CTA Click:', { buttonText, location });
        });
    });

    // Scroll depth tracking
    let scrollDepths = [25, 50, 75, 100];
    let scrollDepthsReached = [];

    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !scrollDepthsReached.includes(depth)) {
                scrollDepthsReached.push(depth);
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll', {
                        'percent_scrolled': depth
                    });
                }
                
                console.log('Scroll depth:', depth + '%');
            }
        });
    });
});
