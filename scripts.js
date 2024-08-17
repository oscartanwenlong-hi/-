document.addEventListener('DOMContentLoaded', function() {
    const templateSection = document.querySelector('.template-section');
    
    function handleScroll() {
        const sectionTop = templateSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight) {
            templateSection.classList.add('show');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll handler on page load in case already in view
});
