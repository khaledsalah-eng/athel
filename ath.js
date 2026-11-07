document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".section-heading, .hero-content, .collection-card-men, .collection-card-women, .collection-card-unisex, .product-card, .luxury-banner, .about-image, .about-content, .offers, .contact-form"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dots = document.querySelectorAll(".slider-dots span");

    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add("active");

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlider() {
        clearInterval(slideInterval);
        startSlider();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextSlide();
            resetSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            prevSlide();
            resetSlider();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
            resetSlider();
        });
    });

    showSlide(0);
    startSlider();

});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#contact-form");

    if (!form) {
        console.log("Contact form not found!");
        return;
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // استقبال البيانات
        const name = document.querySelector("#name").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        // رقم الواتساب
        const whatsappNumber = "201154419037";

        // تجهيز الرسالة
        const whatsappMessage = `
مرحباً ATHEEL 👋

وصلتكم رسالة جديدة من الموقع.

الاسم: ${name}

رقم الهاتف: ${phone}

البريد الإلكتروني: ${email}

الرسالة:
${message}

شكراً لكم.
        `;

        // تحويل الرسالة لرابط واتساب
        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        // فتح واتساب
        window.open(whatsappURL, "_blank");

    });

});
