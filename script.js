let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Pastikan ada slide sebelum menjalankan
    if (slides.length === 0) return;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    
    // Berganti setiap 5 detik
    setTimeout(showSlides, 5000); 
}
