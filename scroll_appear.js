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
  threshold: 0.5
};

const observer = new IntersectionObserver(doWhenIntersect, options);

const contents = document.querySelectorAll(".contents__content");

contents.forEach(content => {
  observer.observe(content);
});

const ele = document.getElementsByClassName('con')

if (ele[0]) {
  ele[0].addEventListener('click', () => {
    console.log(observer.takeRecords())
  })
}
