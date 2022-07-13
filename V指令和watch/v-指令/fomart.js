export default function (app) {
  app.directive("format-time", {
    mounted(el) {
      const text = el.textContent;
      console.log(text);
    },
  });
}
