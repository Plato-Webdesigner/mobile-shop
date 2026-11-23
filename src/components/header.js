import { headerBanner } from '../globals.js';
import { loadBanner3 } from '../globals.js';
import { loadBanner2 } from '../globals.js';
import { loadBanner1 } from '../globals.js';
import { bannerTitle } from '../globals.js';
import { bannerDetails } from '../globals.js';
import { bannerLink } from '../globals.js';
import { searchBox } from '../globals.js';
import { searchIcon } from '../globals.js';

const banners = [
    { id: 1, title: "آیفون 18 پرومکس", detail: "آیفون 18 پرومکس موجود است جهت نمایش اطلاعات گوشی کلیک نمایید", href: "https://www.apple.com/", src: "./imgs/iphone-18-news.jpg" },
    { id: 2, title: "S26 Ultra", detail: "گوشی گلکسی S26 Ultra موجود است جهت نمایش اطلاعات کلیک نمایید", href: "https://www.samsung.com/us/", src: "./imgs/galaxy-s26-ultra-features-colors-durability-a-mo.jpg" },
    { id: 3, title: "شیائومی 17 پرومکس", detail: "شیائومی 17 پرومکس موجود است جهت نمایش اطلاعات گوشی کلیک نمایید", href: "https://www.mi.com/global/", src: "./imgs/mi17Pro.jpg" }
];

let currentIndex = 0;
const changeBanner = () => {
    headerBanner.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % banners.length;
        if (currentIndex === 0) {
            loadBanner1.classList.remove("active");
            loadBanner2.classList.remove("active");
            loadBanner3.classList.add("active");
        }

        else if (currentIndex === 1) {
            loadBanner1.classList.remove("active");
            loadBanner2.classList.add("active");
            loadBanner3.classList.remove("active");
        }

        else if (currentIndex === 2) {
            loadBanner1.classList.add("active");
            loadBanner2.classList.remove("active");
            loadBanner3.classList.remove("active");
        }

        headerBanner.style = `
        background-image: url(${banners[currentIndex].src});
        `;

        headerBanner.style.opacity = "1";

        bannerTitle.textContent = banners[currentIndex].title;
        bannerDetails.textContent = banners[currentIndex].detail;
        bannerLink.href = banners[currentIndex].href;

    }, 500);
    setTimeout(changeBanner, 4500);
};

setTimeout(changeBanner, 4000)

const searchIconHandler = event => {
    event.preventDefault();
    searchBox.classList.toggle("active-search");
}
searchIcon.addEventListener("click", searchIconHandler);




