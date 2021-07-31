const sc = document.createElement("script");
sc.setAttribute("src", browser.runtime.getURL("resources/pmdl.js"));
document.head.appendChild(sc);

readers_button(browser.runtime.getURL("resources/dl.png"), "Download .txt", "download_txt()");
readers_button(browser.runtime.getURL("resources/print.png"), "Print pages", "print_manga()");

function readers_button(src, title, trigger) {
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("height", "20vh");
    const btn = document.createElement('a');
    btn.setAttribute("style", "margin:5px;");
    btn.setAttribute("class", "menu active");
    btn.setAttribute("title", title);
    btn.setAttribute("href", "javascript:;");
    btn.setAttribute("onclick", trigger+";return false;");
    btn.appendChild(img);
    document.getElementById("readers").appendChild(btn);
}