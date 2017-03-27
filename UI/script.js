var user="Гость";
var visible="none";
var articlesModel=(function (){

var articles = [
  {
    id: '1',
    title: 'Рыбак пошел на лед после того, как провалились двое, и тоже провалился ',
    summary: 'Вчера в 17:15 спасателям поступило сообщение о рыбаке, тонущем на Лукомльском озере (Витебская область). По прибытии на место внештатные водолазы Чашникского РОЧС увидели человека в полынье в полутора километрах от берега.',
    createdAt: new Date('2017-02-26T15:00:00'),
    author: 'Me',
    content: 'Озеро расположено у деревни Столбцы Чашникского района. В 17:43 работники МЧС с использованием спецоборудования извлекли из воды и доставили на берег 41-летнего жителя деревни Холопеничи Крупского района.'
  },
  {
    id: '2',
    title: '«На няню есть деньги, а на такси нет?»',
    summary: 'Таксист, взявший $30 за 10 километров, представил свою версию. Его коллеги в шоке .',
    createdAt: new Date('2017-02-26T12:35:00'),
    author: 'Автор 3',
    content: 'Вчера таксист Александр умудрился взять с пассажирки 63 рубля 55 копеек за 10-километровую поездку. '
     },
  {
    id: '3',
    title: 'Три человека пришли в гости и погибли при пожаре. Хозяин спасся ',
    summary: 'Вечер пятницы закончился трагедией в Толочине. Здесь при пожаре погибли две женщины и мужчина, пришедшие в гости к местному жителю, проинформировали в МЧС. ',
    createdAt: new Date('2017-02-24T18:56:00'),
    author: 'Автор 2',
    content: 'Сообщение о пожаре спасателям поступило в 20:12. К их прибытию дом горел открытым огнем. Впоследствии на месте пожара были найдены тела двух женщин 1984 и 1975 годов рождения, а также 45-летнего мужчины. '
 
  },
  {
    id: '4',
    title: 'Минск посетит государственный министр МИД ФРГ по делам Европы',
    summary: 'Визит приурочен к 25-летию установления дипломатических отношений между Германией и Беларусью.',
    createdAt: new Date('2017-02-24T15:27:00'),
    author: 'Me',
    content: 'Михаэль Рот встретится с министром иностранных дел Беларуси, представителями гражданского общества и студентами.'   
  },
  {
    id: '5',
    title: 'Белоруска не отдала ни одного гейма россиянке на турнире в Шеньчжене',
    summary: 'Вера Лапко победила Валерию Савиных и вышла во второй круг квалификации турнира в Китае.',
    createdAt: new Date('2017-02-24T02:13:00'),
    author: 'Автор 1',
    content: 'Вера Лапко (293 ВТА) вышла во 2-й круг квалификации турнира в Шеньчжене (Китай, призовой фонд — $60,000)'
  }
  
  
];

function compare(a,b){
  if(a.createdAt>b.createdAt)return 1;
  if(a.createdAt<b.createdAt)return -1;
  return 0;
}

function getArticles(skip,top,filterConfig){
   skip = skip || 0;
   top = top || 10;
  if(filterConfig==undefined){
    articles.sort(compare);
    return(articles.slice(skip,skip+top));
 }
   if(filterConfig.author!=undefined && filterConfig.date1==undefined){
    var result=[]; var m=0;
    for(var i=0;i<articles.length;i++){
      if(articles[i].author==filterConfig.author){result[m]=articles[i];m++;}
    }
    result.sort(compare);
     return(result.slice(skip,skip+top));
   }

   if(filterConfig.author==undefined && filterConfig.date1!=undefined && filterConfig.date2!=undefined ){
    var result=[];var b=0;
    for(i=0;i<articles.length;i++){
      if(articles[i].createdAt>filterConfig.date1 && articles[i].createdAt<filterConfig.date2){result[b]=articles[i];b++;}
    }
    result.sort(compare);
     return(result.slice(skip,skip+top));
   }

   if(filterConfig.author!=undefined && filterConfig.date1!=undefined){
    var result=[]; var m=0;
    for(i=0;i<articles.length;i++){
      if(articles[i].createdAt>filterConfig.date1 && articles[i].createdAt<filterConfig.date2 && articles[i].author==filterConfig.author)
        {result[m]=articles[i];m++;}
    }
    result.sort(compare);
     return(result.slice(skip,skip+top));
   }
   return 0;
}

function validateArticle(article){
    if(article.id==undefined) return false;
    if(article.title==undefined || article.title.length>100 || article.title.length<1) return false;
    if(article.summary==undefined || article.summary.length>200 || article.summary.length<1) return false;
    if(article.createdAt==undefined) return false;
    if(article.author==undefined) return false;
    if(article.content==undefined || article.content.length<1) return false;
    return true;
}

function getArticle(id) {
    for(i=0;i<articles.length;i++){
        if(articles[i].id==id) return articles[i];
    }
}

function addArticle(article) {
    if(validateArticle(article)) {articles[articles.length]=article;return true;}
    return false;
    
}

function editArticle(id,article){

    for(i=0;i<articles.length;i++){
        if(articles[i].id==id){
           articles[i].title=article.title;
           articles[i].summary=article.summary;
           articles[i].content=article.content;
           return true;      
        }

    }
     return false;
}

function removeArticle(id) {
    for(i=0;i<articles.length;i++){
        if(articles[i].id==id) {
            articles.splice(i,1);
            return true;
        }
    }
}



 return{
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle:addArticle,
        removeArticle:removeArticle,
        editArticle:editArticle
        
};

}());


var renderArticle=(function(){

  function addArticle(article){
   
    var element=document.getElementById("news_container");
    var div=document.createElement("div");
    div.className='news';
    div.innerHTML= article.title + "<br>" + article.summary + "</br>" + "<button>" + "Редактировать" + "</button>"+"<button>" + "Удалить" + "</button>"+"<button>" + "Показать" + "</button>";  
    if(user=="Гость"){
   
      div.getElementsByTagName('button')[1].style.display=visible;
      div.getElementsByTagName('button')[0].style.display=visible;
    }
    element.appendChild(div);
   
  }

  function showArticles(articles){
    var element=document.getElementById("news_container");
    for(var i=0;i<articles.length;i++){
    var div=document.createElement("div");
    div.className='news';
    div.innerHTML= articles[i].title + "<br>" + articles[i].summary + "</br>" + "<button>" + "Редактировать" + "</button>" + "<button>" + "Удалить" + "</button>" + "<button>" + "Показать" + "</button>";
   
    element.appendChild(div);
  }
  if(user=="Гость"){
   var a= document.getElementsByClassName("news").length;
    for(var i=0;i<a;i++){
      document.getElementsByClassName("news")[i].getElementsByTagName('button')[1].style.display=visible;
      document.getElementsByClassName("news")[i].getElementsByTagName('button')[0].style.display=visible;
    } 
  }
}

function delete_news(id){
   articlesModel.removeArticle(id);
   showArticles(articlesModel.getArticles(0,30));
}

function edit_news(id,article){
   articlesModel.editArticle(id,article);
   showArticles(articlesModel.getArticles(0,30));
}

  return{
    delete_news:delete_news,
    showArticles: showArticles,
    addArticle: addArticle
  };

}());

    

var ArticleHandlers=(function(){




}());








    if(user!="Гость"){
      document.getElementById("filters").getElementsByTagName('button')[3].style.display='none';
    }
    
    var login=document.getElementById("user");
    login.innerHTML=user;
    if(user=="Гость"){
 
      document.getElementById("filters").getElementsByTagName('button')[1].style.display='none';
      document.getElementById("filters").getElementsByTagName('button')[2].style.display='none';
    
           
    }




function clearList() {
        var list = document.getElementById("news_container");
        list.innerHTML="";
}

function Show_News(skip,top,filter){
    clearList();
    renderArticle.showArticles(articlesModel.getArticles(skip,top,filter));
}

function add_News(article){
  articlesModel.addArticle(article);
  renderArticle.addArticle(article);
}

function Delete_news(id){
  renderArticle.delete_news(id);
}

function edit_news(id,article){
  renderArticle.edit_news(id,article);
}


///////////

var button= document.getElementById("filters").getElementsByTagName('button')[3];
function handleClick() {
  document.getElementById('news_container').style.display='none';

  
}
button.addEventListener('click', handleClick);