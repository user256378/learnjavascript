function goToLesson(thisItem) {
    let k;
    for (
        let i = 0; i < document.getElementsByClassName("lessons-page__item").length; i++
    ) {
        if (document.getElementsByClassName("lessons-page__item")[i] == thisItem) {
            console.log(i);
            k = i + 1;
            break;
        }
    }
    window.location.href = `lesson${k}.html`;
}

function socialMedia(thisItem, name, text) {
    thisItem.src =
        thisItem.src.slice(0, thisItem.src.lastIndexOf("/") + 1) +
        name +
        text +
        ".png";
}

for (let i = 0; i < document.getElementsByClassName("nav__link").length; i++) {
    if (
        document.getElementsByClassName("nav__link")[i].getAttribute("href") ==
        window.location.hash
    ) {
        document
            .getElementsByClassName("nav__item")[i].setAttribute("class", "nav__item nav__item-active");
    } else {
        document
            .getElementsByClassName("nav__item")[i].setAttribute("class", "nav__item");
    }
}
/*
function scrollElem(elem) {
  window.scrollBy({
    top: document.getElementById(elem).offsetTop,
    left: 0,
    behavior: "smooth",
  });
}*/

function isVisible(ele) {
    const {
        top,
        bottom
    } = ele.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    return (top > 0 || bottom > 0) && top < 0.7 * vHeight;
}

window.onload = function() {
    window.addEventListener("resize", function() {
        if (window.innerWidth > 626) {
            document.querySelector(".mobile-menu").style.display = "none";
        }
    });

    for (
        let i = 0; i < document.getElementsByClassName("container__item").length; i++
    ) {
        let element = document.getElementsByClassName("container__item")[i];
        if (isVisible(element)) {
            if (
                document
                .getElementsByClassName("nav__link")[i].getAttribute("href")
                .slice(
                    1,
                    document.getElementsByClassName("nav__link")[i].getAttribute("href")
                    .length
                ) == element.getAttribute("id")
            ) {
                for (
                    let j = 0; j < document.getElementsByClassName("nav__item").length; j++
                ) {
                    if (j == i) {
                        document
                            .getElementsByClassName("nav__item")[j].setAttribute("class", "nav__item nav__item-active");
                    } else {
                        document
                            .getElementsByClassName("nav__item")[j].setAttribute("class", "nav__item");
                    }
                }
            }
        }
    }
};

document.addEventListener("scroll", function() {
    for (
        let i = 0; i < document.getElementsByClassName("container__item").length; i++
    ) {
        let element = document.getElementsByClassName("container__item")[i];
        if (isVisible(element)) {
            if (
                document
                .getElementsByClassName("nav__link")[i].getAttribute("href")
                .slice(
                    1,
                    document.getElementsByClassName("nav__link")[i].getAttribute("href")
                    .length
                ) == element.getAttribute("id")
            ) {
                for (
                    let j = 0; j < document.getElementsByClassName("nav__item").length; j++
                ) {
                    if (j == i) {
                        document
                            .getElementsByClassName("nav__item")[j].setAttribute("class", "nav__item nav__item-active");
                    } else {
                        document
                            .getElementsByClassName("nav__item")[j].setAttribute("class", "nav__item");
                    }
                }
            }
        }
    }
});

function hashHandler() {
    this.oldHash = window.location.hash;
    this.Check;

    var that = this;
    var detect = function() {
        if (that.oldHash != window.location.hash) {
            for (
                let i = 0; i < document.getElementsByClassName("nav__link").length; i++
            ) {
                if (
                    document
                    .getElementsByClassName("nav__link")[i].getAttribute("href") == window.location.hash
                ) {
                    document
                        .getElementsByClassName("nav__item")[i].setAttribute("class", "nav__item nav__item-active");
                } else {
                    document
                        .getElementsByClassName("nav__item")[i].setAttribute("class", "nav__item");
                }
            }
            that.oldHash = window.location.hash;
        }
    };
    this.Check = setInterval(function() {
        detect();
    }, 100);
}

var hashDetection = new hashHandler();

function openMenu() {
    document.querySelector(".mobile-menu").style.display = "flex";
    let i = 0;
    const interval = setInterval(function() {
        document.querySelector(".mobile-menu").style.opacity = i;
        i = i + 0.1;
        if (i > 1) {
            clearInterval(interval);
        }
    }, 5);
}

function hideMenu() {
    let i = 1;
    const interval = setInterval(function() {
        document.querySelector(".mobile-menu").style.opacity = i;
        i = i - 0.1;
        if (i < -0.1) {
            clearInterval(interval);
            document.querySelector(".mobile-menu").style.display = "none";
        }
    }, 5);
}