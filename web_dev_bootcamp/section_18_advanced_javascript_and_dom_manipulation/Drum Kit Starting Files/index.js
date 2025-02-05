let btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     alert("glot licked");
//   });
// });

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    alert("got licked");
  });
}
