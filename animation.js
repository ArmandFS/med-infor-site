const animatedTitle = document.querySelector('.animated-title');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionOffsetTop = document.getElementById('profile').offsetTop;

    if (scrollY > sectionOffsetTop - window.innerHeight / 2) {
        animatedTitle.style.animationPlayState = 'running';
    } else {
        animatedTitle.style.animationPlayState = 'paused';
    }
});