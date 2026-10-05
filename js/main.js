function openImage(img) {
  const dialog = document.getElementById("imgDialog");
  const dialogImg = document.getElementById("imgDialogContent");
  dialogImg.src = img.src;
  dialogImg.alt = img.alt;
  dialog.showModal();
}

const imgDialog = document.getElementById("imgDialog");
if (imgDialog) {
  imgDialog.addEventListener("click", function () {
    this.close();
  });
}