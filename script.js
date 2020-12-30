'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////// IMPLEMENTING SMOOTH SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // Modern way of scrolling to section (only supported by newer browsers)
  section1.scrollIntoView({ behavior: 'smooth' });

  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // Old way of scrolling to section
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
});

////////// EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

// With Event Delegation
// 1. Add event listener to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // MAtching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Without Event Delegation
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//////////////////////////////////////////////////////////
//////////////////// ADVANCED DOM ////////////////////////
//////////////////////////////////////////////////////////

/*
/////////////// Selecting, Creating and Deleting Elements

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

///// just one element
const header = document.querySelector('.header');

///// multiple elements (in a node list [that can act as an array])
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');

///// by tag name returns an HTML collection (it updates as the DOM does)
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

////// Also returns a live HTML Collection
// console.log(document.getElementsByClassName('btn'));

//////// Creating and insterting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for imporoved functionality and analytics';
message.innerHTML =
  'We use cookies for imporoved functionality and analytics <button class="btn btn--close-cookie"> Got it! </button>';

/////// DOM elements are unique and will be moved. To have more than one you have to clone it.
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//////////// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // new way
    message.remove();

    // old way
    // message.parentElement.removeChild(message);
  });

///////////////// STYLES ATTRIBUES AND CLASSES

/////////// Styles
// creates inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

// You can only log styles that you have created as an inline style in the DOM
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// You can still log styles with getComputedStyle
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

/////////// Attributes

// Standard
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// pic attributes
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

//link attributes
const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// data attributes
// console.log(logo.dataset.versionNumber);

//////////// Classes

//
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use. (Only one class and it overwrites any other classes)
logo.className = 'jonas';
*/

/*
////////// TYPES OF EVENTS AND EVENT HANDLERS

const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('addEventListener: Great! You are reading the headin :D');

  h1.removeEventListener('mouseenter', alertH1);
};

// (more common)
h1.addEventListener('mouseenter', alertH1);

// (old way of doing it, mostly done with addEventListener)
// h1.onmouseenter = function () {
//   alert('onmouseenter: Great! You are reading the headin :D');
// };
*/

/////////////// EVENT PROPOGATION: BUBBLING AND CAPTURING
/*
// rgb(//255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rbg(${randomInt(0, 255)},${randomInt(0, 255)}${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor;

  // Stop the event propogation (not a good idea in practice)
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor;
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor;
});
*/
