// Initialization - Replace placeholders with your Supabase credentials
const supabaseUrl =https://yxuvyimfbyhslomijipg.supabase.co;
const supabaseKey =sb_publishable_zniEz-5gl4k48GS9eyQcnw_XdcS1b-Z;
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navigation shrink logic
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.padding = window.scrollY > 60 ? '0.8rem 3rem' : '1.2rem 3rem';
});
