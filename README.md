# nifty-tooltips-npm-package
Usefull npm package. Customizable tooltip library allowing for varied positions and themes.

Example:
static attach(selector, content, options)

Tooltip.attach(".tooltip", "Front Tribe!", {
  position: "top", // top, right, bottom, left
  theme: "success", // info, warning, error, success,
  animation: "expand", // fade, slide, expand
  delay: 500,
});
