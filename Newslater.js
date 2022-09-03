
const topnewsBtn = document.getElementById("topnews");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");


var newsDataArr = [];

const API_KEY = "d247c538a93447959aa245209dd15616";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";


//Turkey News apis
const HEADLINES_NEWS_TK = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=";
const GENERAL_NEWS_TK = "https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=";
const BUSINESS_NEWS_TK = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=";
const SPORTS_NEWS_TK = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=";
const ENTERTAINMENT_NEWS_TK = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS_TK = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&pageSize=8&apiKey=";

//China API
const HEADLINES_NEWS_Ch = "https://newsapi.org/v2/top-headlines?country=ch&apiKey=";
const GENERAL_NEWS_Ch = "https://newsapi.org/v2/top-headlines?country=ch&category=general&apiKey=";
const BUSINESS_NEWS_Ch = "https://newsapi.org/v2/top-headlines?country=ch&category=business&apiKey=";
const SPORTS_NEWS_Ch = "https://newsapi.org/v2/top-headlines?country=ch&category=sports&apiKey=";
const ENTERTAINMENT_NEWS_Ch = "https://newsapi.org/v2/top-headlines?country=ch&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS_Ch = "https://newsapi.org/v2/top-headlines?country=ch&category=technology&pageSize=8&apiKey=";

//Nigeria
const HEADLINES_NEWS_ng = "https://newsapi.org/v2/top-headlines?country=ng&apiKey=";
const GENERAL_NEWS_ng = "https://newsapi.org/v2/top-headlines?country=ng&category=general&apiKey=";
const BUSINESS_NEWS_ng = "https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=";
const SPORTS_NEWS_ng = "https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=";
const ENTERTAINMENT_NEWS_ng = "https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS_ng = "https://newsapi.org/v2/top-headlines?country=ng&category=technology&pageSize=8&apiKey=";


//GErmany

const HEADLINES_NEWS_Gr = "https://newsapi.org/v2/top-headlines?country=gr&apiKey=";
const GENERAL_NEWS_Gr = "https://newsapi.org/v2/top-headlines?country=gr&category=general&apiKey=";
const BUSINESS_NEWS_Gr = "https://newsapi.org/v2/top-headlines?country=gr&category=business&apiKey=";
const SPORTS_NEWS_Gr = "https://newsapi.org/v2/top-headlines?country=gr&category=sports&apiKey=";
const ENTERTAINMENT_NEWS_Gr = "https://newsapi.org/v2/top-headlines?country=gr&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS_Gr = "https://newsapi.org/v2/top-headlines?country=gr&category=technology&pageSize=8&apiKey=";

//USA
const HEADLINES_NEWS_Us = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=";
const GENERAL_NEWS_Us = "https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=";
const BUSINESS_NEWS_Us = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=";
const SPORTS_NEWS_Us = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=";
const ENTERTAINMENT_NEWS_Us = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS_Us = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&pageSize=8&apiKey=";





window.onload = function() {
    newsType.innerHTML="<h4>Top News</h4>";
    fetchHeadlines();
};


topnewsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Trending News</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business News</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports News</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment News</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Tech News</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS_TK+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS_TK+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS_TK+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS_TK+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS_TK+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS_TK+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}


