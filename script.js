let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Sembunyikan semua gambar
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    // Jika sudah di gambar terakhir, kembali ke gambar pertama
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    // Tampilkan gambar yang aktif
    slides[slideIndex-1].style.display = "block";  
    
    // Jalankan fungsi ini lagi setiap 5000ms (5 detik)
    setTimeout(showSlides, 5000); 
}
