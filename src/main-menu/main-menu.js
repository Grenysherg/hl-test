export default () => {
  const $menu = $(".js-menu");

  if (!$menu.length) {
    return false;
  }

  const $openMenu = $(".js-open-menu");
  const $closeMenu = $(".js-close-menu");

  $openMenu.on("click", toggleMenu);
  $closeMenu.on("click", toggleMenu);

  function toggleMenu(event) {
    event.preventDefault();
    $menu.animate({
      width: "toggle"
    });
  }
};
