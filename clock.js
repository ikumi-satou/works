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
    document.getElementById("left-side").style.fontSize = window.innerWidth / 10 + "px";
    document.getElementById("right-side").style.fontSize = window.innerWidth / 45 + "px";
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
        if (minSub == null || nextSub < minSub) {
            minSub = nextSub;
            minSubString = a[z]; // 元文字列は、aに持っているね。　そして、subの順序とaの順序は一緒ですから、sub[i]に該当している要素は、a[i]にあるはず
        }
    }
    if (minSub == null) {
        document.getElementById("train-time").style.fontSize = "medium";
        return "本日の電車は終了しました。";
    } else {
        return minSubString;
    }
}

var schedule = ["9:32", "9:42", "9:52"];
document.getElementById("train-time").innerHTML = getNextTrainTime(schedule, getCurrentTime());