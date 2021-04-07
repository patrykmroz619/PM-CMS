export const setViewportHeight = () => {
  const onResize = () => {
    document.documentElement.style.setProperty("--viewportHeight", `${window.innerHeight}px`);
  };

  window.addEventListener("resize", onResize);

  onResize();
};
