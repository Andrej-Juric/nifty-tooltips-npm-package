export class Tooltip {
  constructor(selector, content, options) {
    this.selector = selector;
    this.content = content;
    this.options = options;
  }
  static attach(selector, content, options) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip-text";
        tooltip.textContent = content;

        tooltip.classList.add(`tooltip-${options.position || "top"}`);
        tooltip.classList.add(`tooltip-${options.theme || "info"}`);
        tooltip.classList.add(`animation-${options.animation || ""}`);

        if (options.delay > 0) {
          const animationDelay = options.delay / 1000 + "s";
          document.documentElement.style.setProperty(
            "--animation-delay",
            animationDelay
          );
        }

        element.appendChild(tooltip);

        setTimeout(() => {
          tooltip.style.opacity = 1;
        }, options.delay);
      });

      element.addEventListener("mouseleave", () => {
        const tooltip = element.querySelector(".tooltip-text");
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  }
}

Tooltip.attach(".tooltip", "Front Tribe!", {
  position: "top", // top, right, bottom, left
  theme: "info", // info, warning, error, success,
  animation: "fade", // fade, slide, expand
  delay: 0,
});
