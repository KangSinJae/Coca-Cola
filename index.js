

/* Please ❤ this if you like it! */


(function($) { "use strict";
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();
})(jQuery); 




let didScroll = false;
let paralaxTitles = document.querySelectorAll('.home-img');
let movetext = document.querySelectorAll('.move-text')

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if(didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX("+ window.scrollY / -35 + "%)"
		
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


const move = () => {
  if(didScroll) {
    movetext.forEach((element, index) => {
      element.style.transform = "translateX("+ window.scrollY /  + "%)"
		
    })
    didScroll = false;
  }
  requestAnimationFrame(move);
}

requestAnimationFrame(raf);
requestAnimationFrame(move);
window.addEventListener('scroll', scrollInProgress)





// 스크롤 이벤트를 사용하여 클래스 토글 기능 구현
document.addEventListener('DOMContentLoaded', function() {
  const scrollArea = document.querySelector('.brand-container');
  const scrollArea2 = document.querySelector('.create-container');
	const originalImage = document.getElementById('original-image');
  const changedImage = document.getElementById('changed-image');

  function handleScroll() {
    // 스크롤 영역의 위치와 높이 계산
    const scrollAreaTop = scrollArea.offsetTop;
    const scrollAreaHeight = scrollArea.offsetHeight;
    const scrollAreaTop2 = scrollArea2.offsetTop;
    const scrollAreaHeight2 = scrollArea2.offsetHeight;

    // 현재 스크롤 위치 계산
    const scrollPosition = window.scrollY;

    // 스크롤 영역에 도달했는지 여부를 확인하여 클래스 추가/제거
    if (scrollPosition >= scrollAreaTop && scrollPosition < scrollAreaTop + scrollAreaHeight) {
      scrollArea.classList.add('active');
			originalImage.style.display = 'none';
      changedImage.style.display = 'block';
    } else {
      scrollArea.classList.remove('active');
			originalImage.style.display = 'block';
      changedImage.style.display = 'none';
    }
    if (scrollPosition >= scrollAreaTop2 && scrollPosition < scrollAreaTop2 + scrollAreaHeight2) {
      scrollArea2.classList.add('active2');
    } else {
      scrollArea2.classList.remove('active2');
    }
  }

  // 스크롤 이벤트를 등록하여 스크롤 시 handleScroll 함수 호출
  window.addEventListener('scroll', handleScroll);
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  // freeMode: true,
  spaceBetween: 30,

});







