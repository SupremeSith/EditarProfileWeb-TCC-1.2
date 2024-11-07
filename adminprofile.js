// Seleciona os elementos
const profileImage = document.getElementById('profileImage');
const fileInput = document.getElementById('fileInput');

// click de troca aqui
profileImage.addEventListener('click', () => {
    fileInput.click();
});

// Quando o usuário seleciona uma imagem, atualiza a imagem de perfil
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profileImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});



