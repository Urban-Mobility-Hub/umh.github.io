AOS.init();
$('nav .scroll').smoothScroll({
  offset: 0
});
$('#skip').smoothScroll({
  offset: 0
});
$('body').scrollspy({
  target: "#main-nav",
  offset: 300
});
let glide = new Glide('.glide', {
  type: 'carousel'
}).mount()
glide.update({
  perView: 1
})