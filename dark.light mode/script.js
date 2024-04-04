// function toggelmode() {
//   console.log("test");
//   let light = document.ReportBody.classList.toggle("light-mode");
//   let dark = document.ReportBody.classList.toggle("dark-mode");
// }

function toggleMode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}