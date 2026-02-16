// --- LOGIKA SLIDER (Untuk index.html) ---
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

if (slides.length > 0) {
    showSlides();
}

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 5000); 
}

// --- LOGIKA HOVER PROJECTS (Untuk projects.html) ---
const projectLinks = document.querySelectorAll('.project-item');
const projectImages = document.querySelectorAll('.project-preview');

if (projectLinks.length > 0) {
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const imageId = link.getAttribute('data-img');
            
            // Sembunyikan semua gambar
            projectImages.forEach(img => img.classList.remove('active'));
            
            // Tampilkan gambar yang dipilih
            const targetImg = document.getElementById(imageId);
            if (targetImg) {
                targetImg.classList.add('active');
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.project-section');

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const content = entry.target.querySelector('.project-content');
            if (entry.isIntersecting) {
                // Munculkan teks dengan animasi halus
                content.style.opacity = "1";
                content.style.transform = "translateY(0)";
            } else {
                // Sembunyikan teks kembali saat keluar layar
                content.style.opacity = "0";
                content.style.transform = "translateY(50px)";
            }
        });
    }, options);

    sections.forEach(section => {
        const content = section.querySelector('.project-content');
        content.style.transition = "all 1s ease-out";
        content.style.opacity = "0";
        content.style.transform = "translateY(50px)";
        observer.observe(section);
    });
});
