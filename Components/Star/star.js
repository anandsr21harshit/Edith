const allStars = document.querySelectorAll(".bi-star-fill");


allStars.forEach((star, index) => {
  ["click", "mouseover", "mouseout"].forEach((event) => {
    star.addEventListener(event, () => {
      let curr = index;
      allStars.forEach((ele, j) => {
        if (event === "click") {
          if (curr >= j) {
            ele.classList.add("star");
          } else {
            ele.classList.remove("star");
          }
        } else if (event === "mouseover") {
          if (curr >= j) {
            ele.classList.add("hover");
          } else {
            ele.classList.remove("hover");
          }
        } else if (event === "mouseout") {
          ele.classList.remove("hover");
        }
      });
    });
  });
});
