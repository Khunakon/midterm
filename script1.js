let reviewsLoaded = false;

function loadMoreReviews() {
    const reviewsContainer = document.getElementById('reviews-container');

    if (!reviewsLoaded) {
        // เพิ่มรีวิวใหม่ 3 รายการ
        const newReviews = `
            <div class="review-card">
                <img src="images/review4.png" alt="Reviewer 4">
                <p>รีวิวจากผู้ใช้รายที่ 4...</p>
            </div>
            <div class="review-card">
                <img src="images/review5.png" alt="Reviewer 5">
                <p>รีวิวจากผู้ใช้รายที่ 5...</p>
            </div>
            <div class="review-card">
                <img src="images/review6.png" alt="Reviewer 6">
                <p>รีวิวจากผู้ใช้รายที่ 6...</p>
            </div>
        `;
        reviewsContainer.innerHTML += newReviews;

        // เปลี่ยนข้อความปุ่ม
        const readMoreBtn = document.getElementById('read-more-btn');
        readMoreBtn.textContent = 'Go to Review Page';
        readMoreBtn.onclick = function() {
            window.location.href = 'review-page.html'; // เปลี่ยนเป็นลิงค์ของหน้าที่ต้องการ
        };

        reviewsLoaded = true;
    } else {
        window.location.href = 'review-page.html'; // เปลี่ยนเป็นลิงค์ของหน้าที่ต้องการ
    }
}