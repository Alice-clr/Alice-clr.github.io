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
