 var img = document.createElement("img");
img.id = "gotop";
img.src = "http://img-chilezhang.qiniudn.com/top.png";
img.setAttribute("style","position: fixed;bottom: 113px;z-index: 99;right: 50px;cursor:pointer;opacity: 0.5;");
img.onclick = function (){ 
    go = function() {
        var height = document.documentElement.scrollTop || document.body.scrollTop;
        var speed = -50 - height / 10;
        window.scrollBy(0, speed);
        if(height == 0) clearInterval(scrolldelay);
    }
    scrolldelay = setInterval(go, 10); 
}
img.onmouseover = function() {
    this.style.opacity = 1;
}
img.onmouseout = function() {
    this.style.opacity = 0.5;
}
document.body.appendChild(img);