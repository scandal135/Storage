var user="User";
var visible="none";
var count_of_news=0;//0-10-20-30....






var articlesModel=(function (){
  
var articles;

 articles = [
 {
    id: '1',
    title: 'Рыбак пошел на лед после того, как провалились двое, и тоже провалился ',
    summary: 'Вчера в 17:15 спасателям поступило сообщение о рыбаке, тонущем на Лукомльском озере (Витебская область). По прибытии на место внештатные водолазы Чашникского РОЧС увидели человека в полынье в полутора километрах от берега.',
    createdAt: new Date(2016, 7, 1, 0, 0, 0, 0),
    author: 'Автор 1',
    content: 'Озеро расположено у деревни Столбцы Чашникского района. В 17:43 работники МЧС с использованием спецоборудования извлекли из воды и доставили на берег 41-летнего жителя деревни Холопеничи Крупского района.'
  },
  {
    id: '2',
    title: '«На няню есть деньги, а на такси нет?»',
    summary: 'Таксист, взявший $30 за 10 километров, представил свою версию. Его коллеги в шоке .',
    createdAt: new Date(2016, 7, 2, 0, 0, 0, 0),
    author: 'Автор 3',
    content: 'Вчера таксист Александр умудрился взять с пассажирки 63 рубля 55 копеек за 10-километровую поездку. '
     },
  {
    id: '3',
    title: 'Три человека пришли в гости и погибли при пожаре. Хозяин спасся ',
    summary: 'Вечер пятницы закончился трагедией в Толочине. Здесь при пожаре погибли две женщины и мужчина, пришедшие в гости к местному жителю, проинформировали в МЧС. ',
    createdAt: new Date(2016, 7, 3, 0, 0, 0, 0),
    author: 'Автор 2',
    content: 'Сообщение о пожаре спасателям поступило в 20:12. К их прибытию дом горел открытым огнем. Впоследствии на месте пожара были найдены тела двух женщин 1984 и 1975 годов рождения, а также 45-летнего мужчины. '
 
  },
  {
    id: '4',
    title: 'Минск посетит государственный министр МИД ФРГ по делам Европы',
    summary: 'Визит приурочен к 25-летию установления дипломатических отношений между Германией и Беларусью.',
    createdAt: new Date(2016, 7, 4, 12, 0, 0, 0),
    author: 'Автор 2',
    content: 'Михаэль Рот встретится с министром иностранных дел Беларуси, представителями гражданского общества и студентами.'   
  },
  {
    id: '5',
    title: 'Белоруска не отдала ни одного гейма россиянке на турнире в Шеньчжене',
    summary: 'Вера Лапко победила Валерию Савиных и вышла во второй круг квалификации турнира в Китае.',
    createdAt: new Date(2016, 8, 16, 0, 0, 0, 0),
    author: 'Автор 1',
    content: 'Вера Лапко (293 ВТА) вышла во 2-й круг квалификации турнира в Шеньчжене (Китай, призовой фонд — $60,000)'
  },
  {
    id: '6',
    title: 'В законопроекте о финансировании NASA прописан отказ от услуг РФ',
    summary: 'Обе палаты Конгресса приняли законопроект, который утверждает финансирование для NASA.',
    createdAt: new Date(2016, 9, 1, 0, 0, 0, 0),
    author: 'Автор 2',
    content: 'Бюджет NASA в 2017 году равен $ 19,508 млрд. В прошлом году финансирование NASA составило $ 19,3 млрд или 0,5% федерального бюджета.'
  },
  {
    id: '7',
    title: 'Великобритания покинет ЕС в марте 2019 года',
    summary: 'Британский министр по вопросам Brexit сказал, что переговоры между Лондоном и Брюсселем об условиях выхода из Евросоюза будут сложными.',
    createdAt: new Date(2016, 11, 1, 0, 0, 0, 0),
    author: 'Автор 1',
    content: 'Великобритания покинет Евросоюз в марте 2019 года. Об этом в воскресенье в эфире вещательной корпорации Би-би-си заявил британский министр по вопросам Brexit Дэвид Дэвис'  
  },
  {
    id: '8',
    title: 'В США уволили прокурора, который вел связанные с РФ громкие дела',
    summary: 'Уволенный прокурор по Южному округу Нью-Йорка Прит Бхарара является фигурантом черного списка Москвы.',
    createdAt: new Date(2016, 11, 3, 0, 0, 0, 0),
    author: 'Автор 3',
    content: 'Федеральный прокурор по Южному округу Нью-Йорка Прит Бхарара, ранее отказавшийся от ухода в отставку по требованию Минюста США, уволен. Об этом сообщает сам прокурор у себя в Twitter'
  },
  {
    id: '9',
    title: 'Магистр архитектуры о том, как наши спальные районы делают людей больными',
    summary: 'Почему хочется уехать из белорусских спальных районов?',
    createdAt: new Date(2016, 11, 5, 0, 0, 0, 0),
    author: 'Автор 1',
    content: 'Все улицы и кварталы рисуются в большом проектном институте, людьми, которым совершенно без разницы, как в итоге будет выглядеть улица, «проектируемая №?1 или №?3». Только недавно над этим стали более тщательно работать.'   
  },
  {
    id: '10',
    title: 'В Беларусь по безвизовому режиму приехало почти 3900 иностранцев.',
    summary: 'Чаще всех нашу страну посещают граждане Германии.',
    createdAt: new Date(2016, 11, 6, 0, 0, 0, 0),
    author: 'Автор 3',
    content: 'В Беларусь по безвизовому режиму приехало уже 3869 иностранцев из 58 стран мира — такую статистику предоставляет Государственный пограничный комитет.'   
  },
  {
    id: '11',
    title: 'Российских тележурналистов обвиняют в «постановке» мигрантских бунтов в Швеции.',
    summary: 'Недавно по российским телеканалам прошли репортажи об «опасном для жизни» шведском городе Мальме.',
    createdAt: new Date(2016, 11, 15, 0, 0, 0, 0),
    author: 'Автор 2',
    content: 'Сообщалось, что город «захватили мигранты», и коренные жители боятся выходить на улицу.'    
  },
  {
    id: '12',
    title: 'В сети посмеялись над фото Тома Хэнкса с «буханкой»',
    summary: 'Американский актер Том Хэнкс похвастался в соцсетях «своим новым грузовичком».',
    createdAt: new Date(2016, 11, 16, 0, 0, 0, 0),
    author: 'Автор 2',
    content: 'На своей странице в Instagram он выложил снимок с российским автомобилем УАЗ, прозванным в народе «буханкой».'  
  },
  {
    id: '13',
    title: 'В Жодино директор фирмы подделывал автозапчасти БелАЗ для продажи в России.',
    summary: 'Из-за подделки запчастей предприятию причинен ущерб в размере более 11,5 тысяч рублей.',
    createdAt: new Date(2016, 11, 17, 0, 0, 0, 0),
    author: 'Автор 2',
    content: 'В Жодино 39-летний директор коммерческого предприятия подделывал автозапчасти БелАЗ для продажи в России. Возбуждено уголовное дело.'
  },
  {
    id: '14',
    title: 'Названы главные открытия в диетологии, которые помогут продлить молодость.',
    summary: 'Здоровое питание становится все более привлекательным и модным.',
    createdAt: new Date(2016, 11, 19, 0, 0, 0, 0),
    author: 'Автор 3',
    content: 'За прошедший год произошло несколько важных открытий, - говорит доктор медицинских наук, профессор Олег Медведев.'
  },
  {
    id: '15',
    title: 'Как Калачев в Могилеве вместо травы играл на резине.',
    summary: 'Тимофей Калачев после матча с «Манчестер Юнайтед» стал знаменит на весь мир.',
    createdAt: new Date(2016, 11, 22, 14, 11, 0, 0),
    author: 'Автор 2',
    content: 'Позавчера футбольный клуб «Ростов», в составе которого играет белорусский ветеран Тимофей Калачев, сыграл в Лиге Европы с «Манчестер Юнайтед». В одном из эпизодов футболист обматерил тренера англичан Жозе Моуриньо'
  },
  {
    id: '16',
    title: 'В Беларуси планируют ограничить продажу электронных сигарет.',
    summary: 'Запрет на продажу электронных сигарет лицам, не достигшим 18 лет, планируется ввести в Беларуси.',
    createdAt: new Date(2016, 11, 28, 0, 0, 0, 0),
    author: 'Автор 1',
    content: 'Об этом сообщила БелТА заместитель главного врача Республиканского центра гигиены, эпидемиологии и общественного здоровья Людмила Наройчик.'
  },
  {
    id: '17',
    title: 'Quisque suscipit massa a sem congue sed.',
    summary: 'Aenean eget lacus fermentum, facilisis odio molestie, blandit tellus. Etiam eu massa nunc.',
    createdAt: new Date(2017, 0, 1, 14, 0, 0, 0),
    author: 'Автор 1',
    content: 'Etiam mattis quis nunc eu suscipit. Ut vel turpis pulvinar, viverra arcu id, tincidunt nisi. Mauris urna dui, congue et semper eget, maximus rutrum orci. Nullam id metus lorem. Etiam egestas mollis mi, in venenatis amet.'
  },
  {
    id: '18',
    title: 'Ученые вырастили картошку в марсианских условиях.',
    summary: 'Результаты оказались многообещающими.',
    createdAt: new Date(2017, 0, 2, 2, 0, 0, 0),
    author: 'Автор 3',
    content: 'Несмотря на характерную для Марса сухую почву, необычный воздух и низкое атмосферное давление, многим сортам удалось успешно прорасти.'
  },
  {
    id: '19',
    title: 'Ученые рассказали, почему в голове «крутятся» песни.',
    summary: '«Прилипчивые» песни получили даже собственное название.',
    createdAt: new Date(2017, 0, 2, 3, 0, 0, 0),
    author: 'Автор 3',
    content: 'В ходе одной из посвященных этой теме научных работ они выяснили, что такие песни похожи друг на друга. Чаще всего они достаточно известны, в них есть повторяющиеся ноты или неожиданные интервалы.'
  },
  {
    id: '20',
    title: 'Минского чиновника-коммунальщика задержали за взятку. ',
    summary: 'На протяжении нескольких лет чиновник закупал от поставщиков оборудование по завышенным ценам, получая откаты.',
    createdAt: new Date(2017, 0, 2, 3, 16, 32, 0),
    author: 'Автор 1',
    content: 'Во время получения взятки задержан руководитель коммунального унитарного предприятия Минска. Такая информация размещена на сайте ГУВД Мингорисполкома.'
  },
  {
    id: '100',
    title: 'Рыбак пошел на лед после того, как провалились двое, и тоже провалился ',
    summary: 'Вчера в 17:15 спасателям поступило сообщение о рыбаке, тонущем на Лукомльском озере (Витебская область). По прибытии на место внештатные водолазы Чашникского РОЧС увидели человека в полынье в полутора километрах от берега.',
    createdAt: new Date(2016, 7, 1, 0, 0, 0, 0),
    author: 'Автор 1',
    content: 'Озеро расположено у деревни Столбцы Чашникского района. В 17:43 работники МЧС с использованием спецоборудования извлекли из воды и доставили на берег 41-летнего жителя деревни Холопеничи Крупского района.'
  },
  {
    id: '55',
    title: '«На няню есть деньги, а на такси нет?»',
    summary: 'Таксист, взявший $30 за 10 километров, представил свою версию. Его коллеги в шоке .',
    createdAt: new Date(2016, 7, 2, 0, 0, 0, 0),
    author: 'Автор 3',
    content: 'Вчера таксист Александр умудрился взять с пассажирки 63 рубля 55 копеек за 10-километровую поездку. '
     }
  
  
];





function get_articles_length(){
  return articles.length;
}

function compare(a,b){
  if(a.createdAt<b.createdAt)return 1;
  if(a.createdAt>b.createdAt)return -1;
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
    if(validateArticle(article)) {articles[articles.length]=article;
      localstorage_load();
      return true;
     
    }
    return false;
    
}

function editArticle(id,article){
 
    for(i=0;i<articles.length;i++){
        if(articles[i].id==id){
           articles[i].title=article.title;
           articles[i].summary=article.summary;
           articles[i].content=article.content;
            localstorage_load();
           return true;      
        }

    }
     return false;
}

function removeArticle(id) {

    for(i=0;i<articles.length;i++){
        if(articles[i].id==id) {
            articles.splice(i,1);
            localstorage_load();
            return true;
        }
    }

    

}

function localstorage_save(){
 if(localStorage.length==0){
 var articlesString = JSON.stringify(articlesModel.getArticles(0,articlesModel.get_articles_length()));
 localStorage.setItem("articles", articlesString);
}
if(localStorage.length!=0){
  
  var articlesString2 = localStorage.getItem("articles");
  var event = JSON.parse(articlesString2, function(key, value) {
  if (key == 'createdAt') return new Date(value);
  return value;
})
  articles=event;
}

}

function localstorage_load(){
  var articlesString = JSON.stringify(articlesModel.getArticles(0,articlesModel.get_articles_length()));
 localStorage.setItem("articles", articlesString);
}



 return{
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle:addArticle,
        removeArticle:removeArticle,
        editArticle:editArticle,
         get_articles_length: get_articles_length,
        articles:articles,
        localstorage_save:localstorage_save,
        localstorage_load:localstorage_load
        
};

}());

//////local storage

articlesModel.localstorage_save();




//////////
var renderArticle=(function(){

  function addArticle(article){
   
    var element=document.getElementById("news_container");
    var div=document.createElement("div");
    div.className='news';
    div.innerHTML= article.title + "<br>" + article.summary + "</br>" + "<button>" + "Редактировать" + "</button>"+"<button>" + "Удалить" + "</button>"+"<button>" + "Показать" + "</button>";  
    if(user=="Гость"){
   
      div.getElementsByTagName('button')[1].style.display="inline";
      div.getElementsByTagName('button')[0].style.display="inline"
    }
    element.appendChild(div);
   
  }

  function showArticles(articles){
    var element=document.getElementById("news_container");
    for(var i=0;i<articles.length;i++){
    var div=document.createElement("div");
    div.className='news';
    div.innerHTML= articles[i].title + "<br>" + articles[i].summary + "</br>" + '<button data-id='+articles[i].id+' data-action="edit">' + "Редактировать" + "</button>" + '<button data-id='+articles[i].id+' data-action="remove">' + "Удалить" + "</button>" + '<button data-id='+articles[i].id+' data-action="show">' + "Показать" + "</button>";
   
    element.appendChild(div);
  }
  if(user=="Гость"){
   var a= document.getElementsByClassName("news").length;
    for(var i=0;i<a;i++){
      document.getElementsByClassName("news")[i].getElementsByTagName('button')[1].style.display="none";
      document.getElementsByClassName("news")[i].getElementsByTagName('button')[0].style.display="none";
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

    





function clearList() {
        var list = document.getElementById("news_container");
        list.innerHTML="";
}

function Show_News(skip,top,filter){
    clearList();
    renderArticle.showArticles(articlesModel.getArticles(skip,top,filter));
    ArticleHandlers.news_remove();
    ArticleHandlers.button_show();
    ArticleHandlers.news_edit();



function show_more_news(){
var button= document.getElementById("show_more");
function handleClick() {
 
 Show_News(0,10*(count_of_news+1),filter);
  
   }
  button.addEventListener('click',handleClick);
}


   if(count_of_news!=0 && articlesModel.get_articles_length()>10*(count_of_news+1)){
        var div=document.createElement('div');
        div.innerHTML="<button id='show_more'>" + "Показать болльше"+ "</button>";
        document.getElementById("news_container").appendChild(div);
        show_more_news();
        count_of_news++;
    }


    if(count_of_news==0 && articlesModel.get_articles_length()>10){
      var div=document.createElement('div');
      div.innerHTML="<button id='show_more'>" + "Показать болльше"+ "</button>";
      document.getElementById("news_container").appendChild(div);
      count_of_news++;
      show_more_news();
    }

    

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





/////////// work with события 

var ArticleHandlers=(function(){

function button1(){
var button1= document.getElementById("filters").getElementsByTagName('button')[3];
function handleClick() {
  document.getElementById('news_container').style.display='none';
  document.getElementById('enter_page').style.display='block';
  document.getElementById('filters').style.display='none';
  document.getElementById('show_1_news').style.display='none';
  button_show(); ///////////
  ArticleHandlers.news_edit();

}
button1.addEventListener('click', handleClick);

}

function in_main_page(){
  var button= document.getElementById("filters").getElementsByTagName('button')[4];
  function handleClick() {
  document.getElementById('news_container').style.display='block';
  document.getElementById('enter_page').style.display='none';
  document.getElementById('show_1_news').style.display='none';
  
  }
  button.addEventListener('click', handleClick);
}

function button3(){
var button3= document.getElementById("filters").getElementsByTagName('button')[2];
function handleClick() {
  document.getElementById('news_container').style.display='none';
  document.getElementById('enter_page').style.display='block';
  document.getElementById('filters').style.display='none';
  document.getElementById('show_1_news').style.display='none';
  user="";
  check_user();
  button_show();///////
  ArticleHandlers.news_edit();
}
button3.addEventListener('click', handleClick);
}

function button2(){
var button2=document.getElementById('enter_page').getElementsByTagName('button')[0];
function handleClick() {
  document.getElementById('news_container').style.display='block';
  document.getElementById('enter_page').style.display='none';
  document.getElementById('filters').style.display='block';
  var field=document.getElementById('enter_page').getElementsByTagName('input')[0];
  user=field.value;
  check_user();
  count_of_news=0;
  Show_News();
  button_show();///////////
  ArticleHandlers.news_edit();

}
button2.addEventListener('click', handleClick);

}

function button_confirm(){
  var button=document.getElementById('filters').getElementsByTagName('button')[0];

  function handleClick(){
    var field1=document.getElementById('filters').getElementsByTagName('input')[2];
    var field2=document.getElementById('filters').getElementsByTagName('input')[0];
    var field3=document.getElementById('filters').getElementsByTagName('input')[1];

 

    if(field1.value=="" && field2.value==""){
      count_of_news=0;
      Show_News();
    }
    if(field1.value=="" && field2.value!=""){
      count_of_news=0;
      Show_News(null,null,{date1:new Date(field2.value),date2:new Date(field3.value)});
    }
    if(field1.value!=""&&field2.value==""){
      count_of_news=0;
      Show_News(null,null,{author:field1.value});}

    if(field1.value!=""&&field2.value!=""){
      count_of_news=0;
      Show_News(null,null,{author:field1.value,date1:new Date(field2.value),date2:new Date(field3.value)});}
 
  }
  button.addEventListener('click', handleClick);
}



function button_add_news(){
  var button= document.getElementById("filters").getElementsByTagName('button')[1];
  function handleClick() {
  document.getElementById('news_container').style.display='none';
  document.getElementById('enter_page').style.display='none';
  var a=document.getElementById('show_1_news');
  a.style.display='block';
  a.innerHTML="";
  var div=document.createElement("div");
  div.innerHTML =   "<textarea rows='3' cols='100' name='text' placeholder='Заголовок'>" 
  + "</textarea>" + "<br>" + "<textarea rows='6' cols='100' name='text' placeholder='Краткое описание'>" 
  + "</textarea>" +  "<textarea rows='10' cols='100' name='text' placeholder='Текст новости'>" + "</textarea>" + "<br>" 
  + "<button>" + " Применить"  + "</button>";
  a.appendChild(div);

  function confirm_add_news(){
   var button1=document.getElementById('show_1_news').getElementsByTagName('button')[0];
   function handleClick1() {
     document.getElementById('news_container').style.display='block';
     document.getElementById('show_1_news').style.display='none';
     var field1=document.getElementById('show_1_news').getElementsByTagName('textarea')[0];
     var field2=document.getElementById('show_1_news').getElementsByTagName('textarea')[1];
     var field3=document.getElementById('show_1_news').getElementsByTagName('textarea')[2];
     articlesModel.addArticle({title:field1.value,summary:field2.value,content:field3.value,id:articlesModel.get_articles_length()+1,author:user,createdAt:new Date()});
     count_of_news=0;
     Show_News();
    

   }
    button1.addEventListener('click', handleClick1);

}
 
confirm_add_news();

}
button.addEventListener('click', handleClick);

}



function handleClick(event) {
    var action=event.target.getAttribute('data-action');
    if(action=='show'){

      document.getElementById('news_container').style.display='none';
      var c=document.getElementById('show_1_news');
      c.innerHTML="";
      c.style.display='block';
      var div=document.createElement("div");
      var element=articlesModel.getArticle(event.target.dataset.id);
    //  var copy=Object.assign({},element.title);
      div.innerHTML=  element.author +"<h2>" +  element.title+"</h2>" + "<br>" + element.content ;
      c.appendChild(div);
      ArticleHandlers.news_edit();
      //alert(event.target.dataset.id);
  }


  if(action=='remove'){
    articlesModel.removeArticle(event.target.dataset.id);
    count_of_news=0;
    Show_News();
    button_show();
    ArticleHandlers.news_edit();

  }

  if(action=='edit'){
     document.getElementById('news_container').style.display='none';
     var c=document.getElementById('show_1_news');
     c.innerHTML="";
     c.style.display='block';
      var div=document.createElement("div");
      var element=articlesModel.getArticle(event.target.dataset.id);
      div.innerHTML = "<textarea rows='6' cols='60' name='text'>" + articlesModel.getArticle(event.target.dataset.id).title +"</textarea>" + "<br>" + "<textarea rows='10' cols='80' name='text'>" + articlesModel.getArticle(event.target.dataset.id).content+"</textarea>" +"<br>" + "<button>" + "Применить" +"</button>";
      c.appendChild(div);
      confirm_at_edit_news(event.target.dataset.id);
  }
  }
   
  
function confirm_at_edit_news(a){
   var button=document.getElementById('show_1_news').getElementsByTagName('button')[0];
   function handleClick() {
     document.getElementById('news_container').style.display='block';
     document.getElementById('show_1_news').style.display='none';
     var field1=document.getElementById('show_1_news').getElementsByTagName('textarea')[0];
     var field2=document.getElementById('show_1_news').getElementsByTagName('textarea')[1];
     articlesModel.editArticle(a,{title:field1.value,summary:articlesModel.getArticle(a).summary,content:field2.value});
     count_of_news=0;
     Show_News();
     

   }
    button.addEventListener('click', handleClick);
}

 
 


function button_show(){
  var razmer=document.getElementsByClassName("news").length;
  for(i=0;i<razmer;i++){
var button1= document.getElementsByClassName("news")[i].getElementsByTagName('button')[2];
button1.addEventListener('click', handleClick);
}

}

function news_remove(){
  var razmer=document.getElementsByClassName("news").length;
  for(i=0;i<razmer;i++){
var button = document.getElementsByClassName("news")[i].getElementsByTagName('button')[1];
button.addEventListener('click', handleClick);
 }
}

function news_edit(){
 var razmer=document.getElementsByClassName("news").length;
  for(i=0;i<razmer;i++){
var button = document.getElementsByClassName("news")[i].getElementsByTagName('button')[0];
button.addEventListener('click', handleClick);
 }
}

return{
  button1:button1,
  button2:button2,
  button3:button3,
  button_show:button_show,
  news_remove:news_remove,
  news_edit:news_edit,
  in_main_page:in_main_page,
  button_add_news:button_add_news,
  button_confirm:button_confirm


};
}());



Show_News();
 check_user();
ArticleHandlers.button_show();
ArticleHandlers.button2();
ArticleHandlers.button3();
ArticleHandlers.button1();
ArticleHandlers.news_remove();
ArticleHandlers.news_edit();
ArticleHandlers.in_main_page();
ArticleHandlers.button_add_news();
ArticleHandlers.button_confirm();




//////////////////





    function check_user(){
         if(user!="Гость"){
     document.getElementById("filters").getElementsByTagName('button')[3].style.display='none';
      document.getElementById("filters").getElementsByTagName('button')[1].style.display='inline';
      document.getElementById("filters").getElementsByTagName('button')[2].style.display='inline';
    }
    
    var login=document.getElementById("user");
    login.innerHTML=user;
    if(user=="Гость"){
 
    document.getElementById("filters").getElementsByTagName('button')[1].style.display='none';
      document.getElementById("filters").getElementsByTagName('button')[2].style.display='none';
      document.getElementById("filters").getElementsByTagName('button')[3].style.display='inline';

    
           
    }
    }

