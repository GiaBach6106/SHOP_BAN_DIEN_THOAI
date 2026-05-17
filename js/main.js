
$('.banner .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    nav: true,
    dots: true
});

$('.product-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    nav: true,
    dots: true
});
function buyNow(name, price, image){

    const product = {

        name: name,
        price: price,
        image: image
    };

    localStorage.setItem(
        "cartProduct",
        JSON.stringify(product)
    );

    window.location.href = "giohang.html";
}

