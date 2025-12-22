let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Hilangkan class 'active' dari semua gambar
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    // Tambahkan class 'active' ke gambar yang harus muncul
    slides[slideIndex-1].classList.add("active");
    
    // Ganti gambar setiap 5 detik
    setTimeout(showSlides, 5000); 
}
