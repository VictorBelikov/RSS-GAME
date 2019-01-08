import './styles/landing.scss';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(() => {
  const scrollLinks = $('.scroll');

  // Smooth scrolling
  scrollLinks.click(function (e) {
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top,
    }, 1000);
  });

  // Highlight links
  $(window).scroll(function () {
    const scrollbarLocation = $(this).scrollTop();

    scrollLinks.each(function () {
      const sectionOffsetTop = $(this.hash).offset().top - 30;

      if (sectionOffsetTop <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});
