//改变主题
function changeTheme(theme) {
    document.getElementsByTagName('link')[0].href = "//cdn.jsdelivr.net/npm/docsify/lib/themes/" + theme + ".css";
}

//开启夜间模式
function nightComing() {
    var now = (new Date()).getHours();
    if (now >= 22 || now < 6) {
        changeTheme('dark');
    }
}

nightComing();

var div = document.createElement("DIV");
div.classList.add("pio-container", "right");
var div2 = document.createElement("DIV");
div2.classList.add("pio-action");
div.appendChild(div2);
var canvas = document.createElement("CANVAS");
canvas.id = "pio";
canvas.width = "300";
canvas.height = "536";
div.appendChild(canvas);
document.body.appendChild(div);

var pio = new Paul_Pio({
    "mode": "fixed",
    "hidden": true,
    "content": {
        "welcome": ["欢迎来到LoganのWIKI Hi~ o(*￣▽￣*)ブ", "欢迎来自 %t 的朋友！"],
        "touch": ["你不会是个Hentai吧!", "再摸的话我可要报警了！⌇●﹏●", "别摸我，有什么好摸的", "110吗，这里有个变态一直在摸我(ó﹏ò｡)", "干嘛动我呀！小心我咬你！", "不可以这样欺负我啦！"],
        "skin": ["想看看我的新服装吗？", "新衣服真漂亮~"],
        "home": "让我们回家吧！",
        "link": "https://blog.logan.ren",
        "close": "有缘再会吧~",
        "referer": "你在 %t 的指引下来到这里(๑•̀ㅂ•́)و✧",
        "custom": []
    },
    "night": "changeTheme('dark')",
    "model": ["https://wp.oss.logan.ren/live2d-models/sagiri/model.json"],
    "tips": true
});

if (window.console && window.console.log) {
    console.log("%c Logan %c", "background:#FFA500; color:#ffffff", "", "https://blog.logan.ren/");
}
