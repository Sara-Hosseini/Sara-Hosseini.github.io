// Enlarge chart images in a modal dialog (mouse and keyboard accessible).
const imgDialog = document.getElementById("imgDialog");
const imgDialogContent = document.getElementById("imgDialogContent");

function openImage(img) {
  if (!imgDialog || !imgDialogContent) return;
  imgDialogContent.src = img.src;
  imgDialogContent.alt = img.alt;
  imgDialog.showModal();
}

document.querySelectorAll(".img-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const img = button.querySelector("img");
    if (img) openImage(img);
  });
});

if (imgDialog) {
  imgDialog.addEventListener("click", function () {
    this.close();
  });
}
