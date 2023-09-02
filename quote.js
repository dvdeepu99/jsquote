const apiurl = "https://api.quotable.io/random";
const quoteid = document.getElementById("mainquote");
const authorid = document.getElementById("author");

async function quote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quoteid.innerHTML = data.content;
    authorid.innerHTML = data.author;
}

quote(apiurl);

function post() {
    window.open("https://twitter.com/intent/tweet?text=" + "\"" + quoteid.innerHTML + "\"" + " - " + authorid.innerHTML, "Tweet Window", "width=600, height=300");
}