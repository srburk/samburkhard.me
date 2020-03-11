const fragment = document.createDocumentFragment();
const numberOfElements = 64;

for (let i = 0; i < numberOfElements; i++) {
  $('<div></div>').appendTo(fragment);
}

let animation = $('.sticks-animation');

$(fragment).appendTo(animation);

const landingAnimation = anime.timeline({
  targets: '.sticks-animation div',
  easing: 'easeInOutSine',
  delay: anime.stagger(20),
  loop: false,
  autoplay: true,
  duration: 1500,
})

.add({
  translateY: anime.stagger([-90, 240]),
  // rotate: () => anime.random(-120, 120),
  rotate: anime.stagger([-110, 110]),
  scale: anime.stagger([1, 3], {from: 'center'}),
  delay: anime.stagger(10, {from: 0}),
})

.add({
  translateX: () => anime.random(-90, 100),
  translateY: () => anime.random(-150, 150),
  scale: anime.stagger([1.5, .5], {from: 'center'}),
  rotate: anime.stagger([7, -7], {from: 'last'}),
  delay: anime.stagger(60, {from: 'center', grid: [8, 8]}),
})

const staggersAnimation = anime.timeline({
  targets: '.sticks-animation div',
  easing: 'easeInOutSine',
  delay: anime.stagger(100),
  loop: false,
  autoplay: false,
  duration: 600,
  //update: () => console.log(staggersAnimation.progress)
})
// .add({
//   scale: anime.stagger([2.5, 1], {from: 'center', grid: [9, 9]}),
//   translateX: anime.stagger([-100, 100]),
//   rotate: anime.stagger([-45, 45]),
//   easing: 'easeInOutCirc',
//   delay: anime.stagger(10, {from: 'center'})
// })
// .add({
//   scale: anime.stagger([2.5, 1], {from: 'center', easing: 'easeInOutCirc'}),
//   translateX: anime.stagger([-200, 200]),
//   translateY: anime.stagger([-200, 200]),
//   rotate: 0,
//   delay: anime.stagger(1, {from: 'last'})
// })
// .add({
//   rotate: anime.stagger(2, {from: 'center', direction: 'reverse', easing: 'easeInSine'}),
//   translateX: 0,
//   translateY: 0,
//   delay: anime.stagger(10, {from: 'center'})
// })
// .add({
//   scale: anime.stagger([2, 1], {grid: [9, 9], axis: 'y'}),
//   translateY: anime.stagger([-100, 200], {grid: [9, 9], axis: 'y'}),
//   rotate: 0,
//   delay: anime.stagger(1, {from: 'last'})
// })

// .add({
//   translateX: () => anime.random(-100, 100),
//   translateY: () => anime.random(-100, 100),
//   rotate: anime.stagger([-10, 10], {from: 'last'}),
//   scale: 1,
//   delay: anime.stagger(50, {from: 'center', grid: [9, 9]}),
// })
// .add({
//   translateX: 0,
//   translateY: anime.stagger(6, {from: 'center', direction: 'reverse'}),
//   rotate: 0,
//   delay: anime.stagger(50, {from: 'center', grid: [9, 9]}),
// })
// .add({
//   translateX: anime.stagger('1rem', {grid: [9, 9], from: 'center', axis: 'x'}),
//   //translateY: anime.stagger('1rem', {grid: [9, 9], from: 'center', axis: 'y'}),
//   delay: anime.stagger(200, {grid: [9, 9], from: 'center', direction: 'reverse'})
// })
.add({
  translateX: anime.stagger([25, -25], {from: 'first'}),
  translateY: 0,
  rotate: anime.stagger([40, -40], {from: 'first'}),
  delay: anime.stagger(10, {from: 'first'}),
})

// staggersAnimation.play();
landingAnimation.play();
