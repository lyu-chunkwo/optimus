$(function () {

  $('.cost__tabs-items').not('.active').hide();
  $('.cost__controls-item').on('click', function (e) {
    e.preventDefault();

    var tabItem = $(this).closest('.cost__controls-item'),
      tabContentItem = $('.cost__tabs-items'),
      tabItemPosition = tabItem.data('services');

    tabContentItem.filter('.cost__tabs-items-' + tabItemPosition)
      .fadeIn()
      .siblings()
      .hide();

    $(e.currentTarget)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });


    $(".services__checkbox, .modal__checkbox").on("change", function () {
    if ($(this).prop("checked") === true) {
      $('.services__btn, .modal__btn').addClass('active');
    } else {
      $('.services__btn, .modal__btn').removeClass('active');
    }
  });


    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("modal__close")[0];
    btn.onclick = function () {
      modal.style.display = "block";
    }
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 550) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });


  $('.menu__btn').on('click', function () {
    $('.menu__list, .menu__btn').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });


  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: false,       // default
      duration: 1,       // default
      live: true        // default
    }
  )
  wow.init();
});