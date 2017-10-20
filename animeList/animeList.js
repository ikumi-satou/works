window.onload = function () {
    var restext = document.getElementById("restext");

    if (!window.localStorage) {
        restext.innerText = "Web Storageに対応していません。";
    }
    for (var i = 0; i < localStorage.length; ++i) {
        var targetId = localStorage.key(i); // keyは関数＝>普通のかっこ()を使う
        var titleList = loadData(targetId, []);

        for (var j = 0; j < titleList.length; ++j){
          var title = titleList[j];
          addAnime(title, targetId)
        }
    }
};

function saveData(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function loadData(name, defaultValue) {
    var str = localStorage.getItem(name);
    if (str === null) {
        return defaultValue;
    } else {
        return JSON.parse(str);
    }
}

// console.log(loadData("hoge", 1));
// console.log(saveData("hoge", [7, 23, "犬"]));

// 曜日・昼夜・タイトルを取得して、jQueryでhtmlにテキストを追加

function addTitle() {
    var date = document.getElementById("select").value;

    var time = document.getElementsByName("time");
    var selectedTime;
    for (var i = 0; i < time.length; i++) {
        if (time[i].checked) { // チェックの状態をtrue/falseで返す
            selectedTime = time[i].value;
            break;
        }
    }
    var time2 = "noon";
    if (selectedTime === "夜") {
        time2 = "night";
    }

    var title = document.getElementById("id_title").value; // 文字列

    var targetId = date.toLowerCase() + "_" + time2;

    addAnime(title, targetId);

    var savedData = loadData(targetId, []);
    savedData.push(title);
    saveData(targetId, savedData);

    // localStorage.clear();
    document.getElementById("id_title").value = "";
}

function addAnime(title, targetId) {
    var getId = document.getElementById(targetId);


    var span = $("<span></span>");
    var button = $("<button>X</button>");

    if (title === "") {
        alert("タイトルを入力してください。");
        return false;
    }
    else {
        span.text(" " + title);
    }

    button.click(function () {
        span.remove();
        button.remove();

        var savedData = loadData(targetId, []);
        var idx = savedData.indexOf(title);
        savedData.splice(idx, 1);
        saveData(targetId, savedData);
    });

    $(getId).append(span);
    $(getId).append(button);
}

// 季節でCSS＆季節名切り替え
var now = new Date();
var m = now.getMonth() + 1;
var d = now.getDate();

if (m < 10) m = "0" + m;
if (d < 10) d = "0" + d;

var date = m + "/" + d;
var cssFile = document.getElementById("seasonCss");
var season = $("#season");

if (date >= "04/01" && date <= "06/30") {
    cssFile.href = "spring.css";
    season.text("春");
}
else if (date >= "07/01" && date <= "09/30") {
    cssFile.href = "summer.css";
    season.text("夏");
}
else if (date >= "10/01" && date <= "12/31") {
    cssFile.href = "autumn.css";
    season.text("秋");
}
else {
    cssFile.href = "winter.css";
    season.text("冬");
}
