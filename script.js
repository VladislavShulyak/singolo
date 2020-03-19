let displaySlideBlue = false;
let slideIndex = 1;
let displayOnVertical = false;
let displayOnHorizontal = false;
const overlay = document.getElementsByClassName('overlay');
const form = document.getElementById('form');

showSlides(slideIndex);

function showSlides(n) {

    if (displaySlideBlue) {
        document.querySelector('.slider').classList.add('sliderBlue');
        displaySlideBlue = false;
    } else {
        document.querySelector('.slider').classList.remove('sliderBlue');
        displaySlideBlue = true;
    }

    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.querySelector('.portfolio-navigation').addEventListener('click', (e) => {
    let clickedTag = e.target;
    if (clickedTag.classList.contains('portfolio_bordered')) {
        let tags = document.querySelectorAll('.portfolio-navigation > div');
        tags.forEach(tag => {
            tag.classList.remove('tag_bordered');
        });
        clickedTag.classList.add('tag_bordered');
        shuffleArr();
    }
});

document.querySelector('.flex-portfolio').addEventListener('click', (e) => {
    let clickedTag = e.target;
    if (clickedTag.tagName === "IMG") {
        let tags = document.querySelectorAll('.flex-portfolio > li > img');
        tags.forEach(tag => {
            tag.classList.remove('img_bordered');
            tag.classList.add('img_selected');
        });
        clickedTag.classList.add('img_bordered');
        clickedTag.classList.remove('img_selected');
    }
});

document.querySelector('.link').addEventListener('click', (e) => {
    let clickedTag = e.target;
    if (clickedTag.tagName === "A") {
        let tags = document.querySelectorAll('.link > li > a');
        tags.forEach(tag => {
            tag.classList.remove('link_active');
        });
        clickedTag.classList.add('link_active');
    }
});


function turnOffHorizontal(n) {
    const element = document.getElementsByClassName(n);
    displayOnHorizontal = !displayOnHorizontal;
    displayOnHorizontal ? element[0].style.opacity = "0" : element[0].style.opacity = "100%";

}

function turnOffVertical(n) {
    const element = document.getElementsByClassName(n);
    displayOnVertical = !displayOnVertical;
    displayOnVertical ? element[0].style.opacity = "0" : element[0].style.opacity = "100%";
}

function shuffleArr() {
    let array = [];
    let imageCollection = document.querySelectorAll('.flex-portfolio > li > img');
    let liCollection = document.querySelectorAll('.flex-portfolio > li');
    imageCollection.forEach(image => {
        array.push(image);
    });
    shuffle(array);
    liCollection.forEach(li => {
        li.innerHTML = '';
        li.innerHTML = array.pop().outerHTML;
    });
}

function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

form.addEventListener('submit', (e) => {
    if (document.forms["form"].name.checkValidity() && document.forms["form"].email.checkValidity()) {
        e.preventDefault();
        showFiddle();
        form.reset();
        return false;
    }
});

function showFiddle() {
    overlay[0].style.display = 'flex';
    let textValue = document.forms[0].text.value;
    let descriptionValue = document.forms[0].description.value;

    let inputTextValue = document.querySelector('.theme');
    let inputDescriptionValue = document.querySelector('.description');

    textValue !== "" ? inputTextValue.innerHTML = 'Тема: ' + textValue.toString() : inputTextValue.innerHTML = 'Без темы';
    descriptionValue !== "" ? inputDescriptionValue.innerHTML = 'Описание: ' + descriptionValue.toString() : inputDescriptionValue.innerHTML = 'Без описания';
}

function hiddenFiddle() {
    overlay[0].style.display = 'none';
}

// headerMenu.addEventListener('click', (event) => {
//     headerMenu.querySelectorAll('a').forEach(el => {
//         el.classList.remove("header-menu_active");
//         event.target.classList.add("header-menu_active");
//     });
// });