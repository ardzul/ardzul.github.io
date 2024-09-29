const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Menghentikan perilaku default tautan
        const targetId = this.getAttribute('data-target');

        // Menyembunyikan semua konten tab
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // Menampilkan konten tab yang dipilih
        document.getElementById(targetId).style.display = 'block';
    });
});
