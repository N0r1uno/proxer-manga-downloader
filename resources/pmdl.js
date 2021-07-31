function download_txt() {
    let srcs = "";
    for (let i = 0; i < pages.length; i++)
        srcs += pages[i][2]+"#"+pages[i][1]+"#http:"+serverurl + pages[i][0]+"\n";
    trigger_dl(srcs, get_title()+".txt");
}
function print_manga() {
    const title = get_title();
    var p = window.open(title);
    p.document.write("<html><head><title>"+title+"</title></head><body style='text-align: center;'>");
    for (let i = 0; i < pages.length; i++)
        p.document.write("<img src='"+serverurl+pages[i][0]+"'>");
    p.document.write("</body></html>");
    p.print();
}
function get_title() {
    return document.title.toLowerCase().replace(" - proxer.me", "").replaceAll(" ", "-");
}
function trigger_dl(data, filename){
    const contentType = 'application/octet-stream';
    var blob = new Blob([data], {type: contentType}),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')
    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  [contentType, a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}