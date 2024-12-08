//ПРОВЕРКА НА ВХОД В ПРОФИЛЬ
document.getElementById('GoToProfile').addEventListener('click', function() {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'user_data.txt', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    var user = parseInt(xhr.responseText);
    if (user === 0) {
        window.location = 'registration.html';
    } else if (user === 1) {
        window.location = 'login.html';
    } else if (user === 2) {
        window.location = 'profile.html';
    } else {
        alert('User not found');
    }
    }
};
xhr.send();
});