let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Sembunyikan semua gambar secara perlahan
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].style.zIndex = "1"; // Kembalikan semua ke layer bawah
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // Tampilkan gambar berikutnya
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].style.zIndex = "2"; // Gambar yang aktif naik ke atas
    
    // Waktu tunggu antar gambar (5 detik)
    setTimeout(showSlides, 5000); 
}
