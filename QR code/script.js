const QRcode = document.querySelector("img");
const input = document.querySelector("input");
function generate() {
  if (input.value.length > 0) {
    QRcode.src =
      "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
    input.placeholder="please enter an URL"
  }
}
