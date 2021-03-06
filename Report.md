# Headless-браузери: що це таке та чим вони корисні для тестувальника
## І. Вступ

![image](https://user-images.githubusercontent.com/54907481/119243837-100f3f80-bb73-11eb-9cd5-984c70799e23.png)

Під кінець майже кожного проєкту єдиними тестами, які мають значення, є наскрізні тести користувацького інтерфейсу. Це тести, які доводять, що програма - з усіма своїми подіями, функціями та мікросервісами - дозволяє **зацікавленим сторонам досягти всіх своїх цілей.**

Але існують деякі невід'ємні проблеми з тестуванням на основі інтерфейсу користувача. 
1. **Стабільність**: навіть коли додаток працює коректно, тести користувацького інтерфейсу іноді не вдаються під час взаємодії з браузером. 
2. **Ефективність**: тестування користувацького інтерфейсу - це НАДЗВИЧАЙНО ПОВІІІІІІІІІІЛЬНЕ заняття в порівнянні з іншими видами автоматизованого тестування.

### Що таке тестування сайту "без голови"?
Є рішення: тестування з використанням **headless-браузеру**. 
Headless тестування - це спосіб запуску тестів інтерфейсу браузера без "голови", що в цьому випадку означає, що немає ЖОДНОГО графічного інтерфейсу. Це корисно, оскільки під час запуску тестів ви не «*спостерігаєте*» за візуальними елементами, тому немає необхідності мати додаткові витрати на графічний інтерфейс веб-сайту.

Як і звичайний браузер, **headless браузер** може аналізувати та інтерпретувати веб-сторінки (хоча поведінка може відрізнятися між різними реалізаціями браузера), тому він може забезпечити реальний контекст браузера без будь-яких витрат в пам'яті та швидкості запуску повноцінного браузера з графічним інтерфейсом .
>Наприклад, headless браузер повинен мати можливість аналізу JavaScript, натискання на посилання, боротьби з будь-якими завантаженнями тощо. Запуск headless браузера зазвичай означає, що тести будуть проводитись через інтерфейс командного рядка або за допомогою мережевого зв'язку.

___
### Headless тестування: де це можна використовувати?
1. Автоматизація
Оскільки headless браузери можуть забезпечувати управління веб-сторінками, їх можна використовувати для автоматизації завдань, сценаріїв та тестів користувальницького інтерфейсу щодо браузера без необхідності запускати користувальницький інтерфейс сайту. 

2. Тестування макету
Headless тестування може полегшити багато перевірок макету, оскільки headless реалізації можуть відображати та інтерпретувати HTML та CSS як справжній браузер. Це означає, що можна протестувати такі елементи стилю, як макети сторінок (наприклад, визначення ширини сторінки за замовчуванням, координати місця знаходження елемента), вибір кольору для будь-яких елементів, використовуваний шрифт тощо.

3. Вилучення даних
Можливо, вам не хочеться запустити повний веб-сайт, зайти на нього та вилучити для себе певну інформацю. Набагато простіше і швидше перейти до веб-сайту "безголово", вилучити дані та використовувати результати для тестування декількох веб-сторінок.

4. Продуктивність
Headless браузери швидші за справжні браузери, оскільки не мають усіх накладних витрат на запуск графічного інтерфейсу сторінки, і це прирівнюється до швидших результатів ваших тестів.  Можливість виконувати завдання за допомогою командного рядка без необхідності оновлювати сторінку вручну або запускати браузер може заощадити багато зусиль.

___
## IІ. Headless тестування за допомогою PhantomJS
![image](https://user-images.githubusercontent.com/54907481/119244588-caef0b80-bb7a-11eb-851f-e40688a1e348.png)

>PhantomJS являє собою WebKit без вікна з API JavaScript.

Як ми знаємо, **Webkit** - це механізм компонування, який використовують Chrome, Safari і кілька інших браузерів. Отже, PhantomJS - це браузер, але без активного вікна. Це означає, що веб-сторінки, що переглядаються  ніколи не відображаються. Це може здатися  дивним, тому розглядаємо його як програмований браузер для терміналу. Ми зовсім скоро розглянемо простий приклад, але спочатку нам потрібно встановити ***PhantomJS***.
### Встановлення PhantomJS
Встановлення PhantomJS насправді досить просте: це всього лише один бінарний файл, який ви завантажуєте і вставляєте в свій path. На [сторінці завантаження PhantomJS][1] виберіть свою операційну систему і завантажте необхідний пакет. Все! 
Все, що залишилось — розархівувати архів до потрібної директорії, додати директорію до файлу `phantomjs.exe` в `path` та запустити термінал в папці з файлом `phantomjs.exe`.
>Запускати `phantomjs.exe` НЕ ПОТРІБНО, це інтерпретатор

З'явиться така консоль (на всі мої Z на скріншотах не звертайте уваги, гарячі клавіші мого скріншотеру прив'язані до цієї клавіші):
![image](https://user-images.githubusercontent.com/54907481/119245049-b6ad0d80-bb7e-11eb-962a-16983e1e895b.png)

Якщо ви працюєте в Mac OS X, існує більш простий спосіб установки PhantomJS. Просто використовуйте Homebrew, ось так:
```
brew update && brew install phantomjs
```
Тепер ви повинні встановити PhantomJS. Ви можете двічі перевірити своє встановлення, виконавши такі дії:
```
phantomjs --version
```
### Маленький приклад
Почнемо з невеликого прикладу.

***simple.js***

```
console.log("we can log stuff out.");

function add(a, b) {
    return a + b;
}
console.log("We can execute regular JS too:", add(1, 2));
phantom.exit();
```
Продовжуйте і запустіть цей код, виконавши наступну команду:
```
phantomjs simple.js
```
Отримаємо:

![image](https://user-images.githubusercontent.com/54907481/119245430-02ad8180-bb82-11eb-9e71-d6347f6b6d0b.png)

Звичайно, це простий, але це хороший момент: **PhantomJS** може виконувати JavaScript так само, як браузер. Однак в цьому прикладі немає ніякого коду, специфічного для **PhantomJS** ... ну, крім останнього рядка. Це важливий рядок для кожного скрипта **PhantomJS**, тому що він завершує сценарій. Це може не мати сенсу тут, але пам'ятайте, що JavaScript не завжди виконується лінійно. Наприклад, ви можете помістити виклик `exit ()` в функцію зворотного виклику.

Давайте розглянемо більш складний приклад.
___
### Завантаження сторінок
Використовуючи API PhantomJS, ми можемо завантажити будь-який URL-адресу та працювати зі сторінкою з двох точок зору:

- як JavaScript на сторінці.
- як користувач, що переглядає сторінку.

Почнемо з завантаження сторінки. Створимо новий файл сценарію і додамо наступний код:
***page.js***
```
var page = require('webpage').create();

page.open('http://net.tutsplus.com', function (s) {
    console.log(s);
    phantom.exit();
});
```

Ми починаємо з завантаження модуля PhantomJS `webpage` і створення об'єкта веб-сторінки. Потім ми викликаємо метод `open`, передаючи йому URL-адресу та функцію зворотного виклику; всередині цієї функції зворотного виклику ми можемо взаємодіяти з фактичної сторінкою. У наведеному вище прикладі ми просто реєструємо статус запиту, що надається параметром функції зворотного виклику. Якщо запустити цей скрипт, ми отримаємо статус «success», надрукований в терміналі:
![image](https://user-images.githubusercontent.com/54907481/119245604-4a80d880-bb83-11eb-9fd4-e75403a174d4.png)

Але давайте зробимо приклад ще більш цікавим, завантаживши сторінку і виконавши над нею JavaScript код. Почнемо з наведеного вище коду, але потім ми викликаємо `page.evaluate`:
```
page.open('https://code.tutsplus.com/', function () {
    var title = page.evaluate(function () {
        var posts = document.getElementsByClassName("post");
        posts[0].style.backgroundColor = "#000000";
        return document.title;
    });
    page.clipRect = { top: 0, left: 0, width: 600, height: 700 };
    page.render(title + ".png");
    phantom.exit();
});
```
Функція, яку ми передаємо на `page.evaluate`, виконується як JavaScript на завантаженій веб-сторінці. В цьому випадку ми знаходимо всі елементи з класом `post`; потім ми встановлюємо фон першого поста в чорний. Нарешті, ми повертаємо `document.title`. Це зручна можливість - повертати значення з нашого зворотного виклику `evaluate` і привласнювати його змінної (в даному випадку, `title`).

Потім ми встановлюємо `clipRect` на сторінці; це розміри екрану, який ми знімаємо за допомогою методу `render`. Як ви можете бачити, ми встановлюємо `top` і `left` значення щоб встановити початкової точки, а також встановлюємо `width` і `height`. Нарешті, ми викликаємо `page.render`, передаючи йому ім'я для файлу (змінна `title`). Потім завершуємо викликом `phantom.exit ().`

Тепер запустимо цей скрипт, і у нас повинно вийти зображення, яке виглядає приблизно так:
![image](https://user-images.githubusercontent.com/54907481/119274627-88304080-bc19-11eb-8e86-6f5faf5c0126.png)

Тут ви можете побачити обидві сторони медалі **PhantomJS**: ми можемо виконати JavaScript зсередини сторінки та ззовні над самим екземпляром сторінки.

Це було весело, але не неймовірно корисно :(. Давайте зосередимося на використанні **PhantomJS** при тестуванні нашого JavaScript, пов'язаного з DOM.
___
### Тестування за допомогою PhantomJS
У більшості випадків ви можете протестувати веб-сайт, не використовуючи DOM, але є моменти, коли ваші тести повинні взаємодіяти з елементами HTML. Якщо ви надаєте перевагу запускати тести в командному рядку, це означає, що **PhantomJS** - якраз те, що вам потрібно.

Звичайно, **PhantomJS** не є тестовою бібліотекою, але багато інших популярних бібліотек тестування можуть працювати поверх **PhantomJS**. Як показано [на вікі-сторінці PhantomJS](https://phantomjs.org/headless-testing.html), тестові бігуни **PhantomJS** доступні практично для будь-якої бібліотеки тестування, яку ви, можливо, захочете використовувати. Давайте подивимося, як використовувати **PhantomJS** разом з ***Jasmine*** і ***Mocha***.
![image](https://user-images.githubusercontent.com/54907481/119277127-7a34ec80-bc26-11eb-81dc-4685a9c71fb0.png)
>Наразі Jasmine немає хорошого бігуна тестів для **PhantomJS**. Якщо ви використовуєте Windows і Visual Studio, варто звернути увагу на [Chutzpah](https://chutzpah.codeplex.com/), а розробникам **Rails** слід спробувати [guard-jasmine](https://github.com/netzpirat/guard-jasmine). В інших же випадках підтримка ***Jasmine*** + ***PhantomJS*** досить хороша.

#### ОДНАК...
Можливо, у вас вже є проект з використанням **Jasmine** і ви хочете використовувати його разом з **PhantomJS**. Є один проект, [phantom-jasmine](https://github.com/jcarver989/phantom-jasmine), який вимагає трохи роботи для настройки, але в ньому все запуститься.

Почнемо з набору тестів **JasmineJS**. Потрібно завантажити код (посилання вгорі) і перевірити папку `examples`. Ви побачите, що у нас є файл `example.js`, який створює елемент DOM, встановлює кілька властивостей і додає його в тіло. Потім ми запускаємо тест **Jasmine** `example_spec.js`, щоб гарантувати, що процес дійсно працює правильно. Ось вміст цього файлу:
***example.js***
```Javascript
var DOM Tests = {
  map: function(array, func) {
    var len = array.length;
    var results = new Array(len);

    for(var i = 0; i < len; i++) {
      results[i] = func(array[i]);
    }

    return results;
  },

  reduce: function(array, acc, func) {
    for (var i = 0, len = array.length; i < len; i++) {
      acc = func(acc, array[i]);
    }

    return acc;
  }
};
```
***example_spec.js***
```Javascript
describe("DOM_Tests", function() {
var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);

    var myEl = document.getElementById('myDiv');
    it("is in the DOM", function () {
        expect(myEl).not.toBeNull();
    });

    it("is a child of the body", function () {
        expect(myEl.parentElement).toBe(document.body);
    });

    it("has the right text", function () {
        expect(myEl.innerHTML).toEqual("Hi there!");
    });

    it("has the right background", function () {
        expect(myEl.style.background).toEqual("rgb(204, 204, 204)");
    });
    it ("should map some values", function() {
    var array = [1,2,3];
    var results = DOM_Tests.map(array, function(item) {
      return item * 2;
    });

    expect(results).toEqual([2,4,6]);
  });

  it ("should reduce some values", function() {
    var array = [1,2,3];
    var result = DOM_Tests.reduce(array, 0, function(acc, item){
      return acc + item;
    });

    expect(result).toEqual(6);
  });

  it ("should fail for the example", function() {
    expect(false).toBeTruthy();
  });
});
```
Файл `TestRunner.html` є досить простим; єдина відмінність полягає в тому, що я перемістив теги сценарію в body, щоб гарантувати, що DOM повністю завантажиться до запуску наших тестів. Ми можемо відкрити файл в браузері і побачити, що всі тести проходять просто відмінно.
![image](https://user-images.githubusercontent.com/54907481/119277484-b36e5c00-bc28-11eb-8e00-9d001be62d24.png)
___
Давайте перейдемо до проекту **PhantomJS**. По-перше, потрібно клонувати проект **phantom-jasmine**:
```
git clone git: //github.com/jcarver989/phantom-jasmine.git
```
Можливо, цей проект не так вже й добре організований, але в ньому є дві важливі частини:
- бігун PhantomJS (який змушує Jasmine використовувати PhantomJS DOM).
- репортер консолі Jasmine (який дає консольний висновок).
Обидва цих файли знаходяться в папці `lib`. Скопіюйте їх в `examples / lib.` Тепер нам потрібно відкрити наш файл TestRunner.html і налаштувати елементи `<script />`. Ось як вони повинні виглядати:

```Javascript
<script src="lib/jasmine-1.2.0/jasmine.js"></script>
<script src="lib/jasmine-1.2.0/jasmine-html.js"></script>
<script src="lib/console-runner.js"></script>
<script src="tests.js"></script>
 
<script>
    var console_reporter = new jasmine.ConsoleReporter()
    jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
    jasmine.getEnv().addReporter(console_reporter);
    jasmine.getEnv().execute();
</script>
```
>Зверніть увагу, що у нас є два репортера для наших тестів: репортер HTML і консольний репортер. Це означає, що `TestRunner.html` і його тести можуть виконуватися як в браузері, так і в консолі. Це зручно. На жаль, нам потрібна змінна `console_reporter`, але вона використовується усередині файлу CoffeeScript, який ми збираємося запустити.

Отже, **як** ми можемо почати виконання цих тестів **в консолі**? Припускаючи, що ми перебуваємо в папці `examples`, ось команда для запуску через термінал:
```
phantomjs lib/run_jasmine_test.coffee ./TestRunner.html
```
Ми запускаємо сценарій `run_jasmine_test.coffee` за допомогою **PhantomJS** і передаємо наш файл TestRunner.html як параметр. Ми повинні побачити щось на зразок цього:

![image](https://user-images.githubusercontent.com/54907481/119277828-80c56300-bc2a-11eb-8953-a4adf994a4b4.png)

Звичайно, якщо тест не вдався, ви побачите щось типу такого:
![image](https://user-images.githubusercontent.com/54907481/119277868-bbc79680-bc2a-11eb-980e-70d481175c40.png)

Якщо ви плануєте часто це запускати, може бути гарною ідеєю перемістити `run_jasmine_test.coffee` в інше місце (наприклад, `~ / bin / run_jasmine_test.coffee`) і створити псевдонім терміналу для всієї команди. Ось як ми зробили б це в оболонці **Bash**:
```
alias phantom-jasmine='phantomjs /path/to/run_jasmine_test.coffee'
```
Просто додайте це в свій файл `.bashrc` або `.bash_profile`. Тепер ми можемо просто запустити:
```
phantom-jasmine TestRunner.html
```
Тепер наші тести **Jasmine** відмінно працюють і в терміналі через **PhantomJS**. Ми зможемо побачити остаточний код в папці `jasmine-total`.

### PhantomJS і Mocha
![image](https://user-images.githubusercontent.com/54907481/119278152-2cbb7e00-bc2c-11eb-879d-472d224f27b2.png)
На щастя, набагато простіше інтегрувати **Mocha** і **PhantomJS** за допомогою `mocha-phantomjs`. Його дуже просто встановити, якщо у вас встановлений NPM:
```
npm install -g mocha-phantomjs
```

Ця команда встановлює бінарний файл `mocha-phantomjs`, який ми будемо використовувати для запуску наших тестів.

>Як і у випадку з **Jasmine**, ми почнемо з репортера HTML-тесту, який може працювати в браузері. Краса цього полягає в тому, що ми зможемо запустити той же файл на терміналі для результатів консольних тестів за допомогою **PhantomJS** (як ми зробили з **Jasmine**).

Отже, давайте побудуємо простий проект. Створимо каталог проекту і перейдемо в нього. Ми почнемо з файлу `package.json`:
```json
{
    "name": "project",
    "version": "0.0.1",
    "devDependencies": {
        "mocha": "*",
        "chai" : "*"
    }
}
```
**Mocha** - це тестове середовище, і ми будемо використовувати **Chai** як бібліотеку тверджень. Ми встановлюємо їх за допомогою NPM.

Ми назвемо наш тестовий файл `test / tests.js`, і ось його тести:
```Javascript
describe("DOM Tests", function () {
    var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);

    var myEl = document.getElementById('myDiv');
    it("is in the DOM", function () {
        expect(myEl).to.not.equal(null);
    });

    it("is a child of the body", function () {
        expect(myEl.parentElement).to.equal(document.body);
    });

    it("has the right text", function () {
        expect(myEl.innerHTML).to.equal("Hi there!");
    });

    it("has the right background", function () {
        expect(myEl.style.background).to.equal("rgb(204, 204, 204)");
    });
});
```
>Вони дуже схожі на тести **Jasmine**, але синтаксис затвердження **Chai** трохи відрізняється (так що не можна просто скопіювати тести **Jasmine**).

Останній фрагмент головоломки - файл `TestRunner.html`:
```html
<html>
    <head>
        <title> Tests </title>
        <link rel="stylesheet" href="./node_modules/mocha/mocha.css" />
    </head>
    <body>
        <div id="mocha"></div>
        <script src="./node_modules/mocha/mocha.js"></script>
        <script src="./node_modules/chai/chai.js"></script>
        <script>
            mocha.ui('bdd'); 
            mocha.reporter('html');
            var expect = chai.expect;
        </script>
        <script src="test/test.js"></script>
        <script>
            if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
            else { mocha.run(); }
        </script>
    </body>
</html>
```
Тут є кілька важливих факторів. По-перше, зверніть увагу, що достатньо просто працювати в браузері; у нас є **CSS** і **JavaScript** з модулів `node`, які ми встановили. Потім зверніть увагу на тег `script`. Він визначає, завантажений чи **PhantomJS**, і якщо це так, запускається функціонал **PhantomJS**. В іншому випадку, він дотримується простої функціональності **Mocha**. 

Щоб запустити його в консолі, просто виконайте це:
```
mocha-phantomjs TestRunner.html
```
# ТУТ КАРТІНКУ
Вуаля! Тепер ми запускаємо тести з консолі, і все це завдяки **PhantomJS**.
___
## PhantomJS і Yeoman
Ви точно не знали, що популярний [Yeoman](http://yeoman.io/) використовує **PhantomJS** в своїй процедурі тестування. Давайте подивимося на простий приклад. Щоб встановити **Yeoman**:
```
npm install -g yo
```

Створимо новий каталог проекту, запустимо `yoman init` всередині і задамо відповідь «No» на всі параметри. Відкриємо файл `test / index.html`, і ми знайдемо тег `script` внизу, де буде вказано, що ми замінимо його своїми специфікаціями. Повністю ігноруємо цю ДОБРУ ПОРАДУ і розміщуємо його всередині блоку `it`:
```Javascript
var el = document.createElement("div");
expect(el.tagName).to.equal("DIV");
```
Тепер запустимо `yoman test`, і ми побачимо, що тест працює нормально. Тепер відкриємо файл` test / index.html` в браузері:
# КАРТІНКА

>Все працює! Зашибумба!

___
# III. Висновки
>Використовуйте бібліотеки, що розширюють PhantomJS, щоб спростити тестування.

Якщо ви використовуєте **PhantomJS** самостійно, немає ніяких підстав дізнатися про сам **PhantomJS**; ви можете просто знати, що він існує, і використовувати бібліотеки, що розширюють **PhantomJS**, щоб спростити тестування.

Сподіваюся, ця робота спонукає вас заглянути в **PhantomJS**. Я рекомендую почати з [файлів прикладів](https://github.com/ariya/phantomjs/wiki/Examples) і [документації](https://github.com/ariya/phantomjs/wiki), пропонованої **PhantomJS**; вони дійсно відкриють вам очі на те, що ви можете зробити з **PhantomJS** - все починаючи від автоматизації сторінок і закінчуючи мережним сніффінгом.
___
Матеріал підготував: студент групи ІВ-93 [Дромашко Артем](https://github.com/modnoise)
___
Вихідні файли проектів:

https://github.com/modnoise/Headless-browsers
[1]: https://phantomjs.org/download.html "сторінці завантаження PhantomJS"
