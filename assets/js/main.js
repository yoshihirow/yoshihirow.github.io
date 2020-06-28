function doWhenIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateShow(entry.target);
    }
  });
}

function activateShow(element) {
  element.classList.add("show");
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2
};

const observer = new IntersectionObserver(doWhenIntersect, options);

const contents = document.querySelectorAll(".main-contents > section");

contents.forEach(content => {
  observer.observe(content);
});
