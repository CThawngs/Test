const icons_left = document.querySelector('.left');
const icons_right = document.querySelector('.right');
const card = document.querySelector('.card');

console.log(icons_left);
console.log(icons_right);
icons_left.addEventListener('click', function() {
    sliderPrev(card);
})

icons_right.addEventListener('click', function() {
    sliderNext(card);
})

const cardDom = document
.querySelector("#width-card")
.getBoundingClientRect().width;

function sliderPrev(target) {
    target.scrollBy({
      left: -cardDom,
      behavior: "smooth",
    });
  }
  function sliderNext(target) {
    target.scrollBy({
      left: cardDom,
      behavior: "smooth",
    });
  }