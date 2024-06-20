window.addEventListener('DOMContentLoaded', function () {
    // Greeting message based on the time of day
    var greetingElement = document.getElementById('greeting');
    var nameInput = document.getElementById('nameInput');
    var greetButton = document.getElementById('greetButton');

    if (greetingElement && nameInput && greetButton) {
        var currentTime = new Date().getHours();
        var greetingMessage_1 = '';

        if (currentTime < 12) {
            greetingMessage_1 = 'おはよう！';
        }
        else if (currentTime < 18) {
            greetingMessage_1 = 'こんにちは！';
        }
        else {
            greetingMessage_1 = 'こんばんは！';
        }

        greetButton.addEventListener('click', function () {
            var name = nameInput.value;
            if (name) {
                greetingElement.textContent = "".concat(greetingMessage_1, " ").concat(name, "\u3055\u3093\u3001\u3053\u308C\u306FTypeScript\u3067\u4F5C\u6210\u3055\u308C\u305F\u304A\u3057\u3083\u308C\u306A\u30B7\u30F3\u30B0\u30EB\u30DA\u30FC\u30B8\u30B5\u30A4\u30C8\u3067\u3059\u3002");
            }
            else {
                greetingElement.textContent = "".concat(greetingMessage_1, " \u3053\u308C\u306FTypeScript\u3067\u4F5C\u6210\u3055\u308C\u305F\u304A\u3057\u3083\u308C\u306A\u30B7\u30F3\u30B0\u30EB\u30DA\u30FC\u30B8\u30B5\u30A4\u30C8\u3067\u3059\u3002");
            }
        });
    }

    // Color changing button functionality
    var colorButton = document.getElementById('colorButton');
    var contentSection = document.querySelector('.content');

    if (colorButton && contentSection) {
        colorButton.addEventListener('click', function () {
            var randomColor = "#".concat(Math.floor(Math.random() * 16777215).toString(16));
            contentSection.style.backgroundColor = randomColor;
        });
    }

    // Theme switching functionality
    var themeButton = document.getElementById('themeButton');
    var bodyElement = document.body;

    if (themeButton && bodyElement) {
        themeButton.addEventListener('click', function () {
            bodyElement.classList.toggle('dark-mode');
            themeButton.textContent = bodyElement.classList.contains('dark-mode') ? '元に戻す' : 'ダークモードに切り替えられないボタン';
        });
    }

    // Fetch weather information
    var weatherInfo = document.getElementById('weatherInfo');

    if (weatherInfo) {
        // 仮の天気データを使用
        var weatherData = {
            temp: 25,
            description: '晴れ'
        };
        weatherInfo.textContent = "\u73FE\u5728\u306E\u6C17\u6E29\u306F".concat(weatherData.temp, "\u2103\u3067\u3001\u5929\u6C17\u306F").concat(weatherData.description, "\u3067\u3059\u3002");
    }

    // Contact form submission handling
    var contactForm = document.getElementById('contactForm');
    var formResponse = document.getElementById('formResponse');

    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            formResponse.textContent = "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9: ".concat(email, ", \u30E1\u30C3\u30BB\u30FC\u30B8: ").concat(message, " \u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3002\u500b\u4eba\u60c5\u5831\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01");
        });
    }

    // ToDo list functionality
    var todoInput = document.getElementById('todoInput');
    var addTodoButton = document.getElementById('addTodoButton');
    var todoList = document.getElementById('todoList');

    if (todoInput && addTodoButton && todoList) {
        addTodoButton.addEventListener('click', function () {
            var task = todoInput.value.trim();
            if (task) {
                var li_1 = document.createElement('li');
                li_1.textContent = task;
                var deleteButton = document.createElement('button');
                deleteButton.textContent = '削除';
                deleteButton.classList.add('deleteTodo');
                deleteButton.addEventListener('click', function () {
                    li_1.remove();
                });
                li_1.appendChild(deleteButton);
                todoList.appendChild(li_1);
                todoInput.value = '';
            }
        });
    }
});
