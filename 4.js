// 1. Перевірка текстових полів
let firstText = "Привіт";
let secondText = "Світ";

if (firstText !== "" && secondText !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// 2. Сума чисел
let num1 = 5;
let num2 = 2;
let sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// 3. Пошук слова у тексті
let message = "Я вивчаю JavaScript сьогодні";

if (message.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4. Перевірка діапазону
let myNumber = 9;

if (myNumber > 10 && myNumber < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// 5. Валідація форми
let userName = "Гліб";
let userEmail = "zvermedick3@gmail.com";
let userPassword = "password123";

let isNameValid = userName.length >= 3;
let isEmailValid = userEmail.includes("@") && userEmail.lastIndexOf(".") > userEmail.indexOf("@");
let isPasswordValid = userPassword.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}