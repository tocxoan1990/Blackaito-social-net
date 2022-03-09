// SIDEBAR VARIABLE
const menuItems = document.querySelectorAll(".menu__item");

// MESSAGES VARIABLES
const messagesNoti = document.querySelector("#mess--link");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message--search");

// THEME VARIABLES
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize__theme");
const fontSizes = document.querySelectorAll('.choose__size span');
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll('.choose__color span');
const backgroundPalette = document.querySelectorAll('.choose__bg div');


// SIDEBAR CALLBACKS
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "noti--link") {
            document.querySelector(".noti__popup").style.display = "none";
        } else {
            document.querySelector(".noti__popup").style.display = "block";
            document.querySelector("#noti--link .noti__count").style.display = "none";
        }
    });
});

// MESSAGES

//search messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach((mess) => {
        let name = mess.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            mess.style.display = "flex";
        } else {
            mess.style.display = "none";
        }
    });
};

//search messages
messageSearch.addEventListener("keyup", searchMessage);

// hightlight messages card when messages menu item is clicked
messagesNoti.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNoti.querySelector(".mess__count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// THEME/DISPLAY CUSTOMIZATION
// opens modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
};
// closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize__theme")) {
        themeModal.style.display = "none";
        changeActiveItem();
    }
};
// close modal
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// FONTS
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('size01')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('size02')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('size03')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('size04')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('size05')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        //change font size of the root html
        // console.log(fontSize);
        document.querySelector('html').style.fontSize = fontSize;
    })
});

// COLOR
//change primary colors
//remove active class from spans or color selectors
const removeColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        removeColorSelector();
        if (color.classList.contains('color01')) {
            primaryHue = 252;

        } else if (color.classList.contains('color02')) {
            primaryHue = 52;

        } else if (color.classList.contains('color03')) {
            primaryHue = 352;

        } else if (color.classList.contains('color04')) {
            primaryHue = 152;

        } else if (color.classList.contains('color05')) {
            primaryHue = 202;

        }
        color.classList.add('active');
        root.style.setProperty('--huecolor', primaryHue);
    })
})

// BACKGROUND
//change background colors
let dark;
let light;
let white;
const changeBG = () => {
        root.style.setProperty('--dark-color-lightness', dark);
        root.style.setProperty('--light-color-lightness', light);
        root.style.setProperty('--white-color-lightness', white);
    }
    //remove active class from spans or background selectors
const removeBackgroundSelector = () => {
    backgroundPalette.forEach(bg => {
        bg.classList.remove('active');
    })
}
backgroundPalette.forEach(bg => {
    bg.addEventListener('click', () => {
        // console.log(bg);
        removeBackgroundSelector();
        if (bg.classList.contains('bg__01')) {
            dark = '17%';
            light = '95%';
            white = '100%';
            // window.location.reload();
        } else if (bg.classList.contains('bg__02')) {
            dark = '95%';
            light = '15%';
            white = '20%';
        } else if (bg.classList.contains('bg__03')) {
            dark = '95%';
            light = '0%';
            white = '10%';
        }
        bg.classList.add('active');
        changeBG();
    })
})