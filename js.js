const inputFile = document.getElementById("picture_input");
const pictureImg = document.getElementById("fotinha");
const pictureImgText = "Selecione sua Foto";
pictureImg.innerHTML = pictureImgText;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("fotinha");

      pictureImg.innerHTML = "";

      pictureImg.appendChild(img);
    });
    reader.readAsDataURL(file);
  } else {
    pictureImg.innerHTML = pictureImgText;
  }
});

function onSubmit(event) {
  event.preventDefault();

  const nomeInput = document.getElementById("nome").value;
  const telInput = document.getElementById("telefone").value;
  const emailInput = document.getElementById("email").value;
  const portifolioInput = document.getElementById("portifolio").value;
  const enderecoInput = document.getElementById("endereco").value;
  const sobreInput = document.getElementById("sobre").value;

  if (
    nomeInput == "" ||
    telInput == "" ||
    emailInput == "" ||
    enderecoInput == "" ||
    sobreInput == ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("portifolio").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("sobre").value = "";

  document.getElementById("nome2").innerHTML = nomeInput;
  document.getElementById("telefone2").innerHTML = telInput;
  document.getElementById("email2").innerHTML = emailInput;
  document.getElementById("portifolio2").innerHTML = portifolioInput;
  document.getElementById("endereco2").innerHTML = enderecoInput;
  document.getElementById("sobre2").innerHTML = sobreInput;
}
document.getElementById("button").addEventListener("click", onSubmit);
