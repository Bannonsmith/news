let newClass = document.getElementById("newsClass")

/*
// for loop through the object to grab articles array
for (i = 0; i < news.articles.length; i++ ) {
    console.log(articles[i])
}
*/
let articles = news.articles.map(function(articles) {

  let img = ``

  if(articles.urlToImage == null) {
    img = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" />`
  } else {
    img = `<img src='${articles.urlToImage}' />`
  }


  return `<div>
          <h1>${articles.source.name}</h1>
          <p>${articles.author}</p>
          <h3>${articles.title}</h3>
          <div id="class"><img id="picture" src="${articles.urlToImage}"></img>
          <p2 id="font">${articles.description}</p2></div>
          <p3>${articles.url}</p3>
          <p4>${articles.publishedAt}</p4>
          </div>`
})
newClass.innerHTML = articles.join("")
