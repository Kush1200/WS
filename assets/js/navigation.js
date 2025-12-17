// assets/js/navigation.js

document.addEventListener('DOMContentLoaded', () => {
    const currentPagePath = window.location.pathname.split('/').pop();
    
    // Pages to track (excluding home.html itself and the final surprise)
    const trackedPages = [
        'photos.html', 
        'letter.html', 
        'timeline.html', 
        'playlist.html', 
        'future.html'
    ];

    // 1. Mark current page as visited
    if (trackedPages.includes(currentPagePath)) {
        localStorage.setItem(`visited_${currentPagePath}`, 'true');
    }

    // 2. Check unlock status for the Final Surprise page
    const allVisited = trackedPages.every(page => localStorage.getItem(`visited_${page}`) === 'true');
    const surpriseLink = document.getElementById('surprise-link');
    
    if (surpriseLink) {
        if (allVisited) {
            surpriseLink.classList.remove('locked');
            surpriseLink.href = 'surprise.html';
            surpriseLink.querySelector('.card-icon').innerHTML = '💖'; // Change icon when unlocked
            surpriseLink.querySelector('h3').innerText = 'Final Surprise! (UNLOCKED)';
            surpriseLink.title = 'You found all the clues!';
        } else {
            surpriseLink.classList.add('locked');
            surpriseLink.href = '#'; // Prevent navigation
            surpriseLink.onclick = (e) => {
                e.preventDefault();
                alert('You must visit all other pages first! Keep exploring, my love.');
            };
        }
    }
    
    // 3. Highlight visited pages in the navigation bar
    const navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(link => {
        const linkPage = link.href.split('/').pop();
        if (localStorage.getItem(`visited_${linkPage}`) === 'true') {
            link.classList.add('visited');
        }
    });
});