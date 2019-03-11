import isDesktop from "./is-desktop";

const FACTOR = 10;
const TEMPLATE_MOBILE_WIDTH = 1100;
const TEMPLATE_DESKTOP_WIDTH = 1500;
const TEMPLATE_DESKTOP_HEIGHT = 1000;
const TEMPLATE_DESKTOP_RATIO = TEMPLATE_DESKTOP_HEIGHT / TEMPLATE_DESKTOP_WIDTH;

const $html = $("html");

export default () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let ratio = height / width;

  if (isDesktop()) {
    console.log(true);
    if (ratio <= TEMPLATE_DESKTOP_RATIO) {
      let newWidth = height / TEMPLATE_DESKTOP_RATIO;
      console.log(newWidth);
      $html.css({
        "font-size": `${(newWidth / TEMPLATE_DESKTOP_WIDTH) * FACTOR}px`
      });
    } else {
      let newHeight = width * TEMPLATE_DESKTOP_RATIO;
      $html.css({
        "font-size": `${(newHeight / TEMPLATE_DESKTOP_HEIGHT) * FACTOR}px`
      });
    }
  } else {
    $html.css({ "font-size": `${(width / TEMPLATE_MOBILE_WIDTH) * FACTOR}px` });
  }
};
