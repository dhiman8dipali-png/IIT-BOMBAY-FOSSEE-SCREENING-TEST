"use strict";

const pageAnimationConfig = {
    selector: '.hero, .section-head, .card-grid article, .auth-card, .section-card, .workshop-card, .detail-card, .form-card, .comments-card, .page-footer',
    threshold: 0.18,
};

function attachScrollAnimations() {
    const elements = document.querySelectorAll(pageAnimationConfig.selector);
    if (!elements.length || !window.IntersectionObserver) {
        elements.forEach((el) => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed');
            }
        });
    }, { threshold: pageAnimationConfig.threshold });

    elements.forEach((element) => {
        element.classList.add('reveal-item');
        observer.observe(element);
    });
}

function attachMobileNavToggle() {
    const trigger = document.querySelector('.nav-trigger');
    const nav = document.querySelector('.site-nav');
    if (!trigger || !nav) return;

    const updateAria = () => {
        const open = nav.classList.contains('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    trigger.addEventListener('click', () => {
        nav.classList.toggle('open');
        updateAria();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) {
            nav.classList.remove('open');
            updateAria();
        }
    });
    updateAria();
}

function PageAnimator() {
    React.useEffect(() => {
        attachScrollAnimations();
        attachMobileNavToggle();
    }, []);
    return null;
}

function initPage() {
    const rootElement = document.getElementById('page-animation-root');
    if (!rootElement || !React || !ReactDOM) {
        return;
    }
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(PageAnimator));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
