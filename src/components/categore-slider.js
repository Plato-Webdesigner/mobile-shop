import { categoreSlider } from '../globals.js';
import { categoreLoader3 } from '../globals.js';
import { categoreLoader2 } from '../globals.js';
import { categoreLoader1 } from '../globals.js';
import { commentsSlider } from '../globals.js';
import { reviewLoader3 } from '../globals.js';
import { reviewLoader2 } from '../globals.js';
import { reviewLoader1 } from '../globals.js';

let isDragging = false;
let startX = 0;
let scrollStart = 0;
let lastX = 0;

function changeLoader(slider, sliderLoader3, sliderLoader2, sliderLoader1) {
    slider.addEventListener("pointerdown", (e) => {

        isDragging = true;

        slider.setPointerCapture(e.pointerId);

        startX = e.clientX;
        lastX = e.clientX;

        scrollStart = slider.scrollLeft;

        slider.classList.add("dragging");

    });

    slider.addEventListener("pointermove", (e) => {

        if (!isDragging) return;

        const currentX = e.clientX;

        const deltaX = currentX - lastX;

        const speed = e.pointerType === "touch" ? 1.5 : 1;

        slider.scrollLeft -= deltaX * speed;

        lastX = currentX;

    });

    function stopDragging() {

        isDragging = false;

        slider.classList.remove("dragging");

    }

    slider.addEventListener("pointerup", stopDragging);
    slider.addEventListener("pointercancel", stopDragging);

    slider.addEventListener("scroll", () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        const progress = Math.abs(slider.scrollLeft);

        const currentGroup = Math.min(
            2,
            Math.floor((progress / maxScroll) * 3)
        );


        if (currentGroup === 0) {
            sliderLoader3.classList.add("slider-active")
            sliderLoader2.classList.remove("slider-active")
            sliderLoader1.classList.remove("slider-active")
        }
        else if (currentGroup === 1) {
            sliderLoader3.classList.remove("slider-active")
            sliderLoader2.classList.add("slider-active")
            sliderLoader1.classList.remove("slider-active")
        }
        else if (currentGroup === 2) {
            sliderLoader3.classList.remove("slider-active")
            sliderLoader2.classList.remove("slider-active")
            sliderLoader1.classList.add("slider-active")
        }
    });
}

changeLoader(categoreSlider, categoreLoader3, categoreLoader2, categoreLoader1);
changeLoader(commentsSlider, reviewLoader3, reviewLoader2, reviewLoader1);