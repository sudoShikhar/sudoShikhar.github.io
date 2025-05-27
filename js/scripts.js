/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          { scrollTop: target.offset().top, },
          650,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
  });
})(jQuery); // End of use strict

function makeArray(n) {
  return Array.from(
    { length: n}, 
    (_, i) => parseFloat((0.3 + i * 0.1).toFixed(1))
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function addAnimationDelays(selector) {
  const elements = document.querySelectorAll(selector);
  const delays = shuffleArray(makeArray(elements.length));
  elements.forEach(function(element, index) {
    element.style.animationDelay = `${delays[index]}s`;
  });
}

function addAnimationDurations(selector, duration) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(function(element) {
    element.style.setProperty('--fa-animation-duration', `${duration}s`);
  });
}

$(document).ready(function() {
  console.log('You may not find what you\'re looking for in devtools. Feel free to reach out to me though...');

  $(".rotate").textrotator({
    animation: "fade",
    speed: 1500
  });

  // Check if dark mode is already enabled in local storage
  if (localStorage.getItem('dark-theme') === 'disabled') {
    $('body').removeClass('dark-theme');
    $('#dark-mode-checkbox').prop('checked', true);
    $('#rails-icon').attr('src', './assets/svg/rails.svg');
  }

  // Animation delays for specific elements 
  [
    '#skills .fa-bounce',
    '#awards .fa-trophy',
    '#certifications .fa-certificate',
    '#interests .fas',
  ].forEach(function(selector) {
    addAnimationDelays(selector);
  });

  // Animation durations for specific elements
  [
    ['#about .fab', 2.5],
    ['#interests .fas', 2],
  ].forEach(function([selector, duration]) {
    addAnimationDurations(selector, duration);
  });

  // Animation on hover for the gear icons in projects
  const gearIcons = document.querySelectorAll('.fa-gear');
  gearIcons.forEach(function(icon) {
    $(icon).hover(function() {
      $(this).toggleClass('fa-spin');
    });
    $(icon.nextElementSibling).hover(function() {
      $(this).toggleClass('fa-spin');
    });
  });

  // Animation on hover for the link icon right next to projects heading
  const linkIcon = document.querySelector('#projects .fa-link');
  $(linkIcon).hover(function() {
    $(this).toggleClass('fa-beat-fade');
  });

  // Animation on hover for the social icons in about section
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(function(icon) {
    $(icon).hover(function() {
      $(this.firstElementChild).toggleClass('fa-flip');
    });

  });

  // Toggle dark mode on checkbox change
  $('#dark-mode-checkbox').change(function() {
    $('body').addClass('animation-delay');
    if ($(this).is(':checked')) {
      $('.darkCircle').removeClass('grow');
      $('.lightCircle').addClass('grow');
      localStorage.setItem('dark-theme', 'disabled');
      $('#rails-icon').attr('src', './assets/svg/rails.svg');
    } else {
      $('.lightCircle').removeClass('grow');
      $('.darkCircle').addClass('grow');
      localStorage.setItem('dark-theme', 'enabled');
      $('#rails-icon').attr('src', './assets/svg/rails-dark-theme.svg');
    };
    $('body').toggleClass('dark-theme');
  });
});