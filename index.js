var color = ["red","pink","green","yellow","gray","orange","black"];
var count = 0;
document.querySelector("button").addEventListener("click",function(){
    cout = count < color.length ? ++count : 0;
    document.querySelector("body").style.background = color[count]
})