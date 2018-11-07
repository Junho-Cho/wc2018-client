var Http = new XMLHttpRequest();
var url = "http://localhost:3000/articles"; // local server
// var url = "http://52.79.152.207:3000/articles"; // use deployed server
Http.open("GET", url);
Http.send();
Http.onreadystatechange = e => {
  console.log(Http.responseText);
  var data = JSON.parse(Http.responseText).articles.new_articles;
  var articlesArea = document.getElementById('articles');
  articlesArea.innerHTML = '';
  var len = data.length;
  for (var i=0; i<len; i++) {
    articlesArea.append(data[i].id + '조\n' + data[i].text);
  }
};
