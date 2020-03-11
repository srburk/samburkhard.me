const box = document.createDocumentFragment();

var numberofElements;

if ($(window).width() < 450) {
  numberOfElements = 70
} else {
  numberOfElements = 111
}

for (let i = 0; i < numberOfElements; i++) {
  $('<div class="landing-animation-el"></div>').appendTo(box);
}

let animation = $('.landing-animation');

$(box).appendTo(animation);

const landingAnimation = anime.timeline({
  targets: '.landing-animation .landing-animation-el',
  easing: 'easeInOutSine',
  delay: anime.stagger(20),
  loop: false,
  autoplay: true,
  duration: 1000,
})

.add({
  translateY: anime.stagger([-($(window).height() / 5), ($(window).height() / 5)]),
  translateX: anime.stagger([-5, 100]),
  rotate: anime.stagger([-45, 194]),
  scale: anime.stagger([1, 2], {from: 'center'}),
  delay: anime.stagger(10, {from: 0}),
})

const scrollingAnimation = anime.timeline({
  targets: '.landing-animation .landing-animation-el',
  easing: 'easeInSine',
  delay: anime.stagger(20),
  loop: false,
  autoplay: false,
  duration: 1500,
})

.add({
  translateX: () => anime.random(-90, 100),
  translateY: () => anime.random(-150, 150),
  scale: anime.stagger([1.5, .5], {from: 'center'}),
  rotate: anime.stagger([7, -7], {from: 'last'}),
  delay: anime.stagger(60, {from: 'center', grid: [8, 8]}),
})

landingAnimation.play();

$(window).on('scroll', function() {
  scrollingAnimation.play();
})
