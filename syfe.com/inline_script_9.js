window.addEventListener('', () => {
    const imgArr = Array.from(document.getElementsByClassName('hero-bg__image'));
    const parent = document.getElementsByClassName('section__hero-container')[0]
    const renderedBG = imgArr.filter(bg => bg.clientHeight > 0);
    if (parent && renderedBG.length > 0) {
        const heroBG = renderedBG[0];
        const scrollY = window.scrollY;
        const parentHeight = parent.clientHeight;

        if (scrollY < parentHeight / 4) {
            heroBG.style.transform = `translateY(${(9*scrollY/10)}px)`;
        } else if (scrollY < parentHeight) {
            heroBG.style.transform = `translateY(${(9*parentHeight/40)+(scrollY-parentHeight/4)/2}px)`;
        }
    }
});