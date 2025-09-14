    // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Simple animation for timeline items
        function animateOnScroll() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            timelineItems.forEach(item => {
                const position = item.getBoundingClientRect();
                
                // If item is in viewport
                if(position.top < window.innerHeight - 100) {
                    item.style.opacity = 1;
                    item.style.transform = 'translateX(0)';
                }
            });
        }

        // Initialize timeline animation
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.opacity = 0;
            item.style.transition = 'all 0.8s ease';
            
            if(item.parentElement.classList.contains('left')) {
                item.style.transform = 'translateX(-50px)';
            } else {
                item.style.transform = 'translateX(50px)';
            }
        });

        window.addEventListener('scroll', animateOnScroll);
        // Initial call in case items are already in view
        animateOnScroll();