const indexes = document.querySelectorAll(".contents__index");

function doWhenIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateIndex(entry.target);
    }
  });
}

const options = {
  root: document.querySelector(".contents"),
  rootMargin: "-50% 0px",
  threshold: 0
};

const observer = new IntersectionObserver(doWhenIntersect, options);

indexes.forEach(box => {
  observer.observe(box);
});

function activateIndex(element) {
  const currentActiveIndex = document.querySelector(".indexList .active");

  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("active");
  }

  const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
  newActiveIndex.classList.add("active");
}
