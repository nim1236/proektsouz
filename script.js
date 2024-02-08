// Получаем разрешение экрана пользователя
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Формируем URL с разрешением изображения
var imageUrl = "fon.png";
var dynamicImageUrl = imageUrl + "?width=" + screenWidth + "&height=" + screenHeight;

// Создаем элемент изображения и устанавливаем его атрибут src
var imgElement = document.getElementById("dynamicImage");
imgElement.src = dynamicImageUrl;