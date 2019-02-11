"use strict";

var request = new XMLHttpRequest();
request.open('GET', 'https://pglejzer.pl/cv/data.json', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var clonedBody = document.querySelector('.container').cloneNode(true);
    var burger = document.querySelector('.burger');

    var changeTextToEnglish = function changeTextToEnglish() {
      document.querySelector('.container').replaceWith(clonedBody.cloneNode(true));
      document.querySelector('#polish-menu').addEventListener('click', changeTextToPolish, true);
      document.querySelector('.burger').addEventListener('click', clickOnBurger, true);
      window.addEventListener('resize', windowResizeEvent, true);
    };

    var changeTextToPolish = function changeTextToPolish() {
      var personlData = document.querySelectorAll('.about__data');
      var personalDataProperties = document.querySelectorAll('.about__properties');
      var skills = document.querySelectorAll('.about__level--type');
      var workTheSameClass = document.querySelectorAll('.work__text');
      var workHeaders = document.querySelectorAll('.work__company--check');
      var workLinks = document.querySelectorAll('.work__link');
      var workTitleHeaders = document.querySelectorAll('.work__company--res');

      for (var i = 0; i < personlData.length; i++) {
        var objectName = data.headers;
        personlData[i].innerHTML = objectName[i];
      }

      for (var _i = 0; _i < personalDataProperties.length; _i++) {
        var _objectName = data.personData;
        personalDataProperties[_i].innerHTML = _objectName[_i];
      }

      for (var _i2 = 0; _i2 < skills.length; _i2++) {
        if (skills[_i2].textContent === 'good') {
          var _objectName2 = data.skills.good;
          skills[_i2].textContent = _objectName2;
        } else if (skills[_i2].textContent === 'basic') {
          var _objectName3 = data.skills.basic;
          skills[_i2].textContent = _objectName3;
        } else if (skills[_i2].textContent === 'advanced') {
          var _objectName4 = data.skills.advanced;
          skills[_i2].textContent = _objectName4;
        }
      }

      for (var _i3 = 0; _i3 < workTheSameClass.length; _i3++) {
        var _objectName5 = data.aboutMeFirst;

        if (workTheSameClass[_i3].classList.contains('work__text--first')) {
          workTheSameClass[_i3].textContent = _objectName5;
        } else {
          var _objectName6 = data.aboutMesecond;
          workTheSameClass[_i3].textContent = _objectName6;
        }
      }

      for (var _i4 = 0; _i4 < workHeaders.length; _i4++) {
        var _objectName7 = data.worksHeaders;
        workHeaders[_i4].textContent = _objectName7[_i4];
      }

      document.querySelector('.work__company--span').textContent = data.warsawPlace;
      document.querySelector('.work__presently').textContent = data.presently;

      for (var _i5 = 0; _i5 < workLinks.length; _i5++) {
        var _objectName8 = data.jobsAndOther;
        workLinks[_i5].textContent = _objectName8[_i5];
      }

      for (var _i6 = 0; _i6 < workTitleHeaders.length; _i6++) {
        var _objectName9 = data.jobsTitle;
        workTitleHeaders[_i6].textContent = _objectName9[_i6];
      }

      document.querySelector('.footer__p').textContent = data.permision;
      document.querySelector('#english-menu').addEventListener('click', changeTextToEnglish, false);
    };

    document.querySelector('#polish-menu').addEventListener('click', changeTextToPolish, false);

    var clickOnBurger = function clickOnBurger() {
      event.preventDefault();
      this.classList.toggle('burger__active');

      if (this.classList.contains('burger__active')) {
        document.querySelector('.button-wrapper ').style.display = 'flex';
      } else {
        document.querySelector('.button-wrapper ').style.display = 'none';
      }
    };

    burger.addEventListener('click', clickOnBurger, true);

    var windowResizeEvent = function windowResizeEvent(e) {
      if (window.innerWidth < 1220) {
        for (var i = 0; i < document.querySelectorAll('.button-with-text').length; i++) {
          document.querySelectorAll('.button-with-text')[i].style.margin = '0px';
          document.querySelectorAll('.button-wrapper button')[i].style.position = 'static';
          document.querySelector('.button-wrapper').style.right = '40px';
          document.querySelector('.button-wrapper').style.display = 'none';
        }
      } else {
        for (var _i7 = 0; _i7 < document.querySelectorAll('.button-with-text').length; _i7++) {
          document.querySelectorAll('.button-with-text')[_i7].style.margin = '0px';
          document.querySelectorAll('.button-wrapper button')[_i7].style.position = 'relative';
          document.querySelector('.button-wrapper').style.display = 'flex';
        }
      }
    };

    window.addEventListener('resize', windowResizeEvent);
  }
};

request.send();