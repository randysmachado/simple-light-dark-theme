const html = document.querySelector("html");
const checkbox = document.querySelector("[data-checkbox]");

function getStyle(element, style) {
  return window.getComputedStyle(element).getPropertyValue(style);
}

const lightMode = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
};

const darkMode = {
  bg: "#030304",
  bgPanel: "#222126",
  colorHeadings: "#F19E18",
  colorText: "#FBFBFC",
};

function transformKey(key) {
  return "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function changeTheme(colors) {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeTheme(darkMode) : changeTheme(lightMode);
});
