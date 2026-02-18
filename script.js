document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LOGIKA SLIDER (Hanya untuk index.html) ---
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
        setTimeout(showSlides, 5000); // Ganti gambar setiap 5 detik
    }

    // --- 2. LOGIKA REVEAL ANIMATION (Untuk projects.html) ---
    // Efek teks muncul perlahan saat slide discroll (Intersection Observer)
    const sections = document.querySelectorAll('.project-section');

    if (sections.length > 0) {
        const options = {
            threshold: 0.5 // Animasi jalan ketika 50% bagian muncul di layar
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const content = entry.target.querySelector('.project-content');
                if (content) {
                    if (entry.isIntersecting) {
                        content.style.opacity = "1";
                        content.style.transform = "translateY(0)";
                    } else {
                        content.style.opacity = "0";
                        content.style.transform = "translateY(50px)";
                    }
                }
            });
        }, options);

        sections.forEach(section => {
            const content = section.querySelector('.project-content');
            if (content) {
                // Set awal sebelum animasi
                content.style.transition = "all 1s ease-out";
                content.style.opacity = "0";
                content.style.transform = "translateY(50px)";
                observer.observe(section);
            }
        });
    }

    // --- CATATAN PENTING ---
    // Logika hover ganti gambar tidak perlu JS lagi karena 
    // sudah ditangani oleh CSS (.hover-trigger-right:hover ~ .img-base)
    // Ini membuat performa web jauh lebih ringan dan halus.
});
