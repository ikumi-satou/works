var daySchedule = [ // 平日
    "9:22", "9:32", "9:42"
];
var holSchedule = [ // 土日
    "9:15", "9:25", "9:35", "11:30"
];

var weeks = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];

function clock() {
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    document.getElementById("date").innerHTML = y + "/" + mo + "/" + d + "(" + w + ")";
    document.getElementById("time").innerHTML = h + ":" + mi + ":" + s;
    document.getElementById("left-side").style.fontSize = window.innerWidth / 9 + "px";
    document.getElementById("right-side").style.fontSize = window.innerWidth / 40 + "px";
}

setInterval(clock, 1000);

function trash() {
    var now = new Date();
    var contents = ["もえるゴミ", "プラスチック", "もえないゴミ"];
    var w = now.getDay();

    switch (w) {
        case 1:
        case 4:
            document.getElementById("trash-contents").innerHTML = contents[0];
            break;
        case 2:
            document.getElementById("trash-contents").innerHTML = contents[1];
            break;
        case 5:
            document.getElementById("trash-contents").innerHTML = contents[2];
            break;
        default:
            document.getElementById("trash-contents").innerHTML = "　";
            break;
    }
}

trash();

function timeStringToNumber(a) {
    var array = [];
    var str = a.split(":");
    for (var i = 0; i < str.length; i++) {
        array.push(parseInt(str[i], 10));
    }
    return array[0] * 60 + array[1];
}

function getCurrentTime() {
    var d = new Date();
    return d.getHours() + ":" + d.getMinutes();
}

function getNextTrainTime(a, getCurrentTime) {
    var num = [];
    for (var j = 0; j < a.length; j++) {
        num.push(timeStringToNumber(a[j])); // 空の配列に時刻表を数値に変換して合計をpush
    }
    var now = timeStringToNumber(getCurrentTime); // 現在時刻を数値に変換

    var minSub = null;
    var minSubString = "";
    for (var z = 0; z < num.length; ++z) {
        var nextSub = num[z] - now;
        if (nextSub < 0) {
            continue;
        }
        if (minSub === null || nextSub < minSub) {
            minSub = nextSub;
            minSubString = a[z]; // 元文字列は、aに持っているね。　そして、subの順序とaの順序は一緒ですから、sub[i]に該当している要素は、a[i]にあるはず
        }
    }
    if (minSub === null) {
        document.getElementById("train-time").style.fontSize = "small";
        return "本日の電車は終了しました。";
    } else {
        return minSubString;
    }
}

// 時刻表の平日・土日の切り替え
var now = new Date;
var w = now.getDay();
switch (w) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.getElementById("train-time").innerHTML = getNextTrainTime(daySchedule, getCurrentTime());
        break;
    case 0:
    case 6:
        document.getElementById("train-time").innerHTML = getNextTrainTime(holSchedule, getCurrentTime());
        break;
}

var holiday = [
    [1, 1], [1, 2], [1, 3],
    [2, 11],
    [4, 29],
    [5, 3], [5, 4], [5, 5],
    [8, 11],
    [11, 3], [11, 23],
    [12, 23], [12, 30], [12, 31]
];
var mo = now.getMonth() + 1;
var d = now.getDate();

for (var i = 0; i < holiday.length; i++) {
    if (mo === holiday[i][0] && d === holiday[i][1]) {
        document.getElementById("train-time").innerHTML = getNextTrainTime(holSchedule, getCurrentTime());
    }
}

function getWeekOfDay(year, month, week, day) {

    // 指定した年月の最初の曜日を取得
    var date = new Date(year + "/" + month + "/ 1");
    var firstDay = date.getDay();

    // 求めたい曜日の第1週の日付けを計算
    var date2 = day - firstDay + 1;
    if (date2 <= 0) {
        day += 7;
    }

    // n週まで1週間を足す
    date2 += 7 * (week - 1);
    return date2;
}

var holiday2 = [
    [2017, 1, 2, 1], [2017, 7, 3, 1], [2017, 9, 3, 1], [2017, 10, 2, 1]
];

for (var j = 0; j < holiday2.length; j++) {
    var day = getWeekOfDay(holiday2[j][0], holiday2[j][1], holiday2[j][2], holiday2[j][3]);
    if (mo === holiday2[j][1] && d === day) {
        document.getElementById("train-time").innerHTML = getNextTrainTime(holSchedule, getCurrentTime());
        break;
    }
}