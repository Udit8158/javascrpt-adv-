// d34ab57786dc4ece9656435b68646fa5

//Initialize the variable
let newsItems = document.getElementById("newsItems");

//Variable for ajax
let source = "the-times-of-india";
let apiKey = "d34ab57786dc4ece9656435b68646fa5";

//News fetch from news api by ajax
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=Apple&from=2021-11-02&source=${source}&apiKey=${apiKey}`,
  true
);

xhr.onprogress = function () {
  //   console.log("operation is under progress");
};
xhr.onload = function () {
  if (this.status == 200) {
    const newsContents = JSON.parse(this.responseText).articles;
    // console.log(newsContents);
    let newsHtml = "";
    newsContents.forEach(function (element, index) {
      let news = `
            <div class="accordion-item ">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapse${index}">
                ${element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more here</a> 
              </div>
            </div>   `;

      newsHtml += news;
      //   console.log(element)
    });
    newsItems.innerHTML = newsHtml;
  } else {
    console.log("Any error occured");
  }
};
xhr.send();