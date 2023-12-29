// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


document.getElementById('theme-switcher').onclick = function () {
    var themeStyle = document.getElementById('theme-style');

    if (themeStyle.getAttribute('href') == '/css/light-theme.css') {
        themeStyle.href = '/css/dark-theme.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeStyle.href = '/css/light-theme.css';
        localStorage.setItem('theme', 'light');
    }
};

// On page load, set the theme from localStorage
var savedTheme = localStorage.getItem('theme') || 'light';
document.getElementById('theme-style').href = '/css/' + savedTheme + '-theme.css';