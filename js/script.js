let request = new XMLHttpRequest();
request.open('GET', '../../src/js/data.json', true);

request.onload = () => {

  if (request.status >= 200 && request.status < 400) {

    let data = JSON.parse(request.responseText),
      clonedBody = document.querySelector('.container').cloneNode(true),
      burger = document.querySelector('.burger');

    const changeTextToEnglish = () => {

        document.querySelector('.container').replaceWith(clonedBody.cloneNode(true));
        document.querySelector('#polish-menu').addEventListener('click', changeTextToPolish, true);
        document.querySelector('.burger').addEventListener('click', clickOnBurger, true);
        window.addEventListener('resize', windowResizeEvent, true);
      },

      changeTextToPolish = () => {

        let personlData = document.querySelectorAll('.about__data'),
          personalDataProperties = document.querySelectorAll('.about__properties'),
          skills = document.querySelectorAll('.about__level--type'),
          workTheSameClass = document.querySelectorAll('.work__text'),
          workHeaders = document.querySelectorAll('.work__company--check'),
          workLinks = document.querySelectorAll('.work__link'),
          workTitleHeaders = document.querySelectorAll('.work__company--res');

        document.querySelector('.work__company--span').textContent = data.warsawPlace;
        document.querySelector('.work__presently').textContent = data.presently;
        document.querySelector('.footer__p').textContent = data.permision;
        document.querySelector('#english-menu').addEventListener('click', changeTextToEnglish, true);
        document.querySelector('.button-wrapper').style.display = 'none';


        for (let i = 0; i < personlData.length; i++) {

          let objectName = data.headers;

          personlData[i].innerHTML = objectName[i];
        }

        for (let i = 0; i < personalDataProperties.length; i++) {

          let objectName = data.personData;

          personalDataProperties[i].innerHTML = objectName[i];
        }

        for (let i = 0; i < skills.length; i++) {

          if (skills[i].textContent === 'good') {

            let objectName = data.skills.good;

            skills[i].textContent = objectName;
          } else if (skills[i].textContent === 'basic') {

            let objectName = data.skills.basic;

            skills[i].textContent = objectName;
          } else if (skills[i].textContent === 'advanced') {

            let objectName = data.skills.advanced;
            skills[i].textContent = objectName;
          }
        }

        for (let i = 0; i < workTheSameClass.length; i++) {

          let objectName = data.aboutMeFirst;

          if (workTheSameClass[i].classList.contains('work__text--first')) {

            workTheSameClass[i].textContent = objectName;
          } else {

            let objectName = data.aboutMesecond;
            workTheSameClass[i].textContent = objectName;
          }
        }

        for (let i = 0; i < workHeaders.length; i++) {

          let objectName = data.worksHeaders;

          workHeaders[i].textContent = objectName[i];
        }

        for (let i = 0; i < workLinks.length; i++) {

          let objectName = data.jobsAndOther;

          workLinks[i].textContent = objectName[i];
        }

        for (let i = 0; i < workTitleHeaders.length; i++) {

          let objectName = data.jobsTitle;

          workTitleHeaders[i].textContent = objectName[i];
        }
      },

      clickOnBurger = event => {

        event.preventDefault();
        let buttonWrapper = document.querySelector('.button-wrapper ');

        event.target.classList.toggle('burger__active');

        if (event.target.classList.contains('burger__active')) {

          buttonWrapper.style.display = 'flex';
        } else {

          buttonWrapper.style.display = 'none';
        }
      },

      windowResizeEvent = e => {

        let buttonWrapper = document.querySelector('.button-wrapper'),
          buttonWithText = document.querySelectorAll('.button-with-text'),
          buttonWrapperToButton = document.querySelectorAll('.button-wrapper button');

        if (window.innerWidth < 1220) {

          for (let i = 0; i < buttonWithText.length; i++) {

            buttonWithText[i].style.margin = '0px';
            buttonWrapperToButton[i].style.position = 'static';
            buttonWrapper.style.right = '40px';
            buttonWrapper.style.display = 'none';
          }

        } else {

          for (let i = 0; i < buttonWithText.length; i++) {

            buttonWithText[i].style.margin = '0px';
            buttonWrapperToButton[i].style.position = 'relative';
            buttonWrapper.style.display = 'flex';
          }
        }
      };

    burger.addEventListener('click', clickOnBurger, true);
    document.querySelector('#polish-menu').addEventListener('click', changeTextToPolish, true);
    window.addEventListener('resize', windowResizeEvent);
  }
};

request.send();