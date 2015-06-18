
function init(){
   var js_files = ["https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js", "https://rawgit.com/dilkhush/extension/master/TextHighlighter.js", "https://rawgit.com/dilkhush/extension/master/social_network.js"]
  for(var i = 0; i < js_files.length;  i += 1)
    load_js(js_files[i])
  load_css('https://rawgit.com/dilkhush/extension/master/index.css')
}

function load_js(file){
  var jsElm = document.createElement("script");
  jsElm.type = "application/javascript";
  jsElm.src = file;
  document.body.appendChild(jsElm);
}

function load_css(file){
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", file)
  document.body.appendChild(fileref);
}
init();
