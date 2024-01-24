let stars = document.querySelectorAll(".stars i");
let refresh = document.getElementsByClassName(" fa-arrows-rotate")[0];

stars.forEach((star, index1) => {
  //
  star.addEventListener("click", () => {
    //
    stars.forEach((star, index2) => {
      //
      if (index1 >= index2) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
      console.log(index1, index2);
    });
  });
});

refresh.addEventListener("click", () => {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
});
