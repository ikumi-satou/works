// ラジオボタンの値を取得する部分を関数としてgetAmountOfFoodsから外に出す
function getSelectedFood(unit) {
    var unitName = document.getElementsByName(unit);
    var selectedUnit;

    for (var i = 0; i < unitName.length; i++) {
        if (unitName[i].checked) {
            selectedUnit = unitName[i].value;
            break;
        }
    }

    return selectedUnit;
}

function getInputedNum(id3) {
    var numberId = document.getElementById(id3);
    var nValue = numberId.value;
    return nValue;
}

// idを受け取って一つにしてreturn
function getAmountOfFoods(id1, id2, id3, unit) {
    var selectId = document.getElementById(id1);
    var sValue = selectId.value;

    var detailId = document.getElementById(id2);
    var dValue = detailId.value;

    var nValue = getInputedNum(id3);

    var selectedUnit = getSelectedFood(unit);

    return sValue + "（" + dValue + "）" + " " + nValue + selectedUnit;
}

// ==============================================================================

var obj = {};

// getAmountOfFoodsの結果を受け取ってadd-listに追加＆食品番号と重さをhashとしてfoodNumにpush
function addList(id1, id2, id3, unit) {
    getAmountOfFoods(id1, id2, id3, unit);
    var numberId = document.getElementById(id3);
    if (numberId.value === "") {
        return;
    }
    var list = getAmountOfFoods(id1, id2, id3, unit);
    var add = document.getElementById("add-list");
    var item = document.createElement("li");
    item.textContent = list;
    add.appendChild(item);

    // var selectedUnit = getSelectedFood(unit);
    var detailId = document.getElementById(id2);
    var dValue = detailId.value;

    var nValue = getInputedNum(id3);

    obj[allFoods[dValue]] = nValue;
    numberId.value = "";
}

// ==============================================================================

var red = {"牛肉": "1", "豚肉": "2", "鶏肉": "3", "魚": "4", "卵": "5", "乳製品": "6", "豆": "7"};

var beaf = {"肩1": "11004", "サーロイン": "11015", "ヒレ1": "11029", "バラ1": "11018", "もも1": "11019", "外もも": "11023"};
var pork = {"肩2": "11115", "肩ロース": "11119", "ロース": "11123", "ヒレ2": "11140", "バラ2": "11129", "もも2": "11130"};
var chicken = {"手羽": "11218", "胸肉": "11220", "もも肉": "11221", "ささみ": "11227", "皮": "11235"};
var fish = {
    "アマダイ": "10018",
    "イワシ": "10047",
    "うなぎ": "10070",
    "カツオ": "10086",
    "アジ": "10003",
    "サケ": "10134",
    "サバ": "10154",
    "サンマ": "10174",
    "タイ": "10193",
    "ヒラメ": "10235",
    "マグロ": "10259"
};
var egg = {"鶏卵": "12004"};
var dProducts = {"牛乳": "13003", "ヨーグルト": "13026", "乳酸菌飲料": "13028", "チーズ": "13040", "アイスクリーム": "13045"};
var beans = {"豆腐": "04033", "油揚げ": "04084", "納豆": "04046"};

var yellow = {"米": "1", "パン": "2", "麺類": "3", "いも類": "4", "油": "5", "砂糖": "6"};

var rice = {"ご飯": "01088", "もち": "01117"};
var bread = {
    "食パン": "01026",
    "コッペパン": "01028",
    "フランスパン": "01031",
    "ロールパン": "01034",
    "クロワッサン": "01035",
    "イーストドーナツ": "15077",
    "ケーキドーナツ": "15078"
};
var noodle = {"うどん": "01039", "そば": "01128", "中華麺": "01048", "スパゲティ": "01064", "インスタントラーメン": "01056", "カップ麺": "01059"};
var potato = {"ジャガイモ": "02017", "さつまいも": "02007", "里芋": "02010", "山芋": "02023", "こんにゃく": "02003"};
var oil = {"オリーブ油": "14001", "ごま油": "14002", "サラダ油": "14006", "バター": "14017"};
var suger = {"上白糖": "03003"};

var green = {"野菜": "1", "果物": "2", "きのこ類": "3", "海藻": "4"};

var vegetable = {
    "アスパラガス": "06007",
    "枝豆": "06016",
    "かぼちゃ": "06047",
    "キャベツ": "06061",
    "きゅうり": "06065",
    "ごぼう": "06085",
    "しそ": "06095",
    "生姜": "06103",
    "大根": "06134",
    "玉ねぎ": "06153",
    "トマト": "06182",
    "ナス": "06191",
    "人参": "06215",
    "にんにく": "17076",
    "ネギ": "06226",
    "ピーマン": "06245",
    "白菜": "06234",
    "ブロッコリー": "06264",
    "ほうれん草": "06268",
    "ミニトマト": "06183",
    "レタス": "06312",
    "れんこん": "06318"
};
var fruits = {
    "いちご": "07012",
    "柿": "07049",
    "キウイフルーツ": "07054",
    "さくらんぼ": "07070",
    "スイカ": "07077",
    "なし": "07088",
    "パイナップル": "07097",
    "バナナ": "07107",
    "みかん": "07027",
    "メロン": "07135",
    "もも": "07136",
    "りんご": "07148"
};
var mushroom = {
    "えのき茸": "08001",
    "エリンギ": "08025",
    "しいたけ": "08039",
    "しめじ": "08016",
    "なめこ": "08020",
    "まいたけ": "08028",
    "マッシュルーム": "08031"
};
var seaweed = {"のり": "09005", "昆布": "09019", "ひじき": "09050", "わかめ": "09044"};

// ==============================================================================
var allFoods = {};

// 全部の食材リストを一つの連想配列に収納
function registerFoods(objArray) {
    for (var k in objArray) {
        allFoods[k] = objArray[k];
    }
}

registerFoods(red);
registerFoods(beaf);
registerFoods(pork);
registerFoods(chicken);
registerFoods(fish);
registerFoods(egg);
registerFoods(dProducts);
registerFoods(beans);
registerFoods(yellow);
registerFoods(rice);
registerFoods(bread);
registerFoods(noodle);
registerFoods(potato);
registerFoods(oil);
registerFoods(suger);
registerFoods(green);
registerFoods(vegetable);
registerFoods(fruits);
registerFoods(mushroom);
registerFoods(seaweed);

// ==============================================================================
// option要素を作成し、optionのvalue属性に配列の値を設定→テキスト（配列の値）を追加
function create(objList, objArray) {
    // objList => select要素のオブジェクト、objArray => select要素へ代入する値の配列

    // select要素に代入する値の配列数
    var max = 0;
    for (var key in objArray) {
        max++;
    }
    var keyset = Object.keys(objArray);

    // もしoption要素を親要素に追加する前に既に子要素がある場合は削除
    while (objList.firstChild) {
        objList.removeChild(objList.firstChild);
    }

    // i = numberでないとlistの配列のインデックスを参照できない
    for (var i = 0; i < max; i++) {
        var createOpt = document.createElement("option");

        // option要素を親要素（select）に追加
        objList.appendChild(createOpt);

        // option要素のvalue属性に配列の値を設定
        objList.childNodes[i].setAttribute("value", keyset[i]);

        // 配列の値をテキストで作成
        var createTxt = document.createTextNode(keyset[i]);

        // もし既に子要素がある場合は削除
        if (objList.childNodes[i].firstChild != null) {
            objList.childNodes[i].removeChild(objList.childNodes[i].firstChild);
        }
        // 作成したテキストを親要素（option）に追加
        objList.childNodes[i].appendChild(createTxt);
    }
}

// ==============================================================================
// body要素のonload属性でcallされる
function createList() {
    create(document.getElementById("select1"), red);
    create(document.getElementById("detail1"), beaf);
    create(document.getElementById("select2"), yellow);
    create(document.getElementById("detail2"), rice);
    create(document.getElementById("select3"), green);
    create(document.getElementById("detail3"), vegetable);
}

// ==============================================================================
// 一つ目のselectの選ばれたインデックスによって、連動した二つ目のselectの値を書き換える
function createList2() {
    var getId = document.getElementById("detail1");
    var index = select1.options.selectedIndex;
    switch (index) {
        case 0:
            create(getId, beaf);
            break;

        case 1:
            create(getId, pork);
            break;

        case 2:
            create(getId, chicken);
            break;

        case 3:
            create(getId, fish);
            break;

        case 4:
            create(getId, egg);
            break;

        case 5:
            create(getId, dProducts);
            break;

        case 6:
            create(getId, beans);
            break;
    }
}

function createList3() {
    var getId = document.getElementById("detail2");
    var index = select2.options.selectedIndex;
    switch (index) {
        case 0:
            create(getId, rice);
            break;

        case 1:
            create(getId, bread);
            break;

        case 2:
            create(getId, noodle);
            break;

        case 3:
            create(getId, potato);
            break;

        case 4:
            create(getId, oil);
            break;

        case 5:
            create(getId, suger);
            break;
    }
}

function createList4() {
    var getId = document.getElementById("detail3");
    var index = select3.options.selectedIndex;
    switch (index) {
        case 0:
            create(getId, vegetable);
            break;

        case 1:
            create(getId, fruits);
            break;

        case 2:
            create(getId, mushroom);
            break;

        case 3:
            create(getId, seaweed);
            break;
    }
}

// ==============================================================================
var data = [];

function searchName() {
    var rep = ["エネルギー(kcal)", "たんぱく質(g)", "炭水化物(g)", "脂質(g)", "カルシウム(mg)", "鉄(mg)", "レチノール活性当量(ビタミンA)(µg)", "ビタミンB1(mg)", "ビタミンB2(mg)", "ビタミンC(mg)"];

    for(var key in obj) {
        var xhr = new XMLHttpRequest();
        var url = "http://food-health.numb86.net/api/v0/foods/" + key;
        var proxyUrl = "https://cors-allow.azurewebsites.net/?url=" + encodeURIComponent(url);

        // proxyUrl = https://cors-allow.azurewebsites.net/?url=http://food-health.numb86.net/api/v0/foods/" + key;
        xhr.open("GET", proxyUrl);

        xhr.onload = function() {
            var response = JSON.parse(this.responseText);
            var data2 = JSON.stringify(response, rep);
            console.log(data2);
            data.push(data2);
        };

        xhr.onerror = function() {
            alert("An error occurred, please try again.");
        };
        xhr.send();
    }
    sum();
}

var kcal = 0;
var protein = 0;
var carbo = 0;
var lipid = 0;
var ca = 0;
var fe = 0;
var retinol = 0;
var vB1 = 0;
var vB2 = 0;
var vC = 0;

function sum() {

    for(var i = 0; i < data.length; i++) {
        kcal = (kcal + data[i][a]) / 100;
        protein = (protein + d["たんぱく質(g)"]) / 100;
        carbo = (carbo + d["炭水化物(g)"]) / 100;
        lipid = (lipid + d["脂質(g)"]) / 100;
        ca = (ca + d["カルシウム(mg)"]) / 100;
        fe = (fe + d["鉄(mg)"]) / 100;
        retinol = (retinol + d["レチノール活性当量(ビタミンA)(µg)"]) / 100;
        vB1 = (vB1 + d["ビタミンB1(mg)"]) / 100;
        vB2 = (vB2 + d["ビタミンB2(mg)"]) / 100;
        vC = (vC + d["ビタミンC(mg)"]) / 100;
    }
/*
    for(var key in foodNum) {
        var rate = foodNum[key].amount;
        kcal *= rate;
        protein *= rate;
        carbo *= rate;
        lipid *= rate;
        ca *= rate;
        fe *= rate;
        retinol *= rate;
        vB1 *= rate;
        vB2 *= rate;
        vC *= rate;
    }
    */
}