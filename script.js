document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.color-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        this.classList.add('selected');

        const newImage = this.getAttribute('data-image');
        document.getElementById('product-image').src = newImage;
    });
});