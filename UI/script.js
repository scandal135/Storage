var articles = [
  {
    id: '1',
    title: 'Рыбак пошел на лед после того, как провалились двое, и тоже провалился ',
    summary: 'Вчера в 17:15 спасателям поступило сообщение о рыбаке, тонущем на Лукомльском озере (Витебская область). По прибытии на место внештатные водолазы Чашникского РОЧС увидели человека в полынье в полутора километрах от берега.',
    createdAt: new Date('2017-02-26T15:00:00'),
    author: 'Автор 1',
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
    author: 'Автор 2',
    content: 'Михаэль Рот встретится с министром иностранных дел Беларуси, представителями гражданского общества и студентами.'   
  },
  {
    id: '5',
    title: 'Белоруска не отдала ни одного гейма россиянке на турнире в Шеньчжене',
    summary: 'Вера Лапко победила Валерию Савиных и вышла во второй круг квалификации турнира в Китае.',
    createdAt: new Date('2017-02-24T02:13:00'),
    author: 'Автор 1',
    content: 'Вера Лапко (293 ВТА) вышла во 2-й круг квалификации турнира в Шеньчжене (Китай, призовой фонд — $60,000)'
  },
  {
    id: '6',
    title: 'В законопроекте о финансировании NASA прописан отказ от услуг РФ',
    summary: 'Обе палаты Конгресса приняли законопроект, который утверждает финансирование для NASA.',
    createdAt: new Date('2017-02-23T23:59:00'),
    author: 'Автор 2',
    content: 'Бюджет NASA в 2017 году равен $ 19,508 млрд. В прошлом году финансирование NASA составило $ 19,3 млрд или 0,5% федерального бюджета.'
  },
  {
    id: '7',
    title: 'Великобритания покинет ЕС в марте 2019 года',
    summary: 'Британский министр по вопросам Brexit сказал, что переговоры между Лондоном и Брюсселем об условиях выхода из Евросоюза будут сложными.',
    createdAt: new Date('2017-02-23T02:28:00'),
    author: 'Автор 1',
    content: 'Великобритания покинет Евросоюз в марте 2019 года. Об этом в воскресенье в эфире вещательной корпорации Би-би-си заявил британский министр по вопросам Brexit Дэвид Дэвис'  
  },
  {
    id: '8',
    title: 'В США уволили прокурора, который вел связанные с РФ громкие дела',
    summary: 'Уволенный прокурор по Южному округу Нью-Йорка Прит Бхарара является фигурантом черного списка Москвы.',
    createdAt: new Date('2017-02-22T22:16:00'),
    author: 'Автор 3',
    content: 'Федеральный прокурор по Южному округу Нью-Йорка Прит Бхарара, ранее отказавшийся от ухода в отставку по требованию Минюста США, уволен. Об этом сообщает сам прокурор у себя в Twitter'
  },
  {
    id: '9',
    title: 'Магистр архитектуры о том, как наши спальные районы делают людей больными',
    summary: 'Почему хочется уехать из белорусских спальных районов?',
    createdAt: new Date('2017-02-22T20:34:00'),
    author: 'Автор 1',
    content: 'Все улицы и кварталы рисуются в большом проектном институте, людьми, которым совершенно без разницы, как в итоге будет выглядеть улица, «проектируемая № 1 или № 3». Только недавно над этим стали более тщательно работать.'   
  },
  {
    id: '10',
    title: 'В Беларусь по безвизовому режиму приехало почти 3900 иностранцев.',
    summary: 'Чаще всех нашу страну посещают граждане Германии.',
    createdAt: new Date('2017-02-22T15:05:00'),
    author: 'Автор 3',
    content: 'В Беларусь по безвизовому режиму приехало уже 3869 иностранцев из 58 стран мира — такую статистику предоставляет Государственный пограничный комитет.'   
  },
  {
    id: '11',
    title: 'Российских тележурналистов обвиняют в «постановке» мигрантских бунтов в Швеции.',
    summary: 'Недавно по российским телеканалам прошли репортажи об «опасном для жизни» шведском городе Мальме.',
    createdAt: new Date('2017-02-22T08:33:00'),
    author: 'Автор 2',
    content: 'Сообщалось, что город «захватили мигранты», и коренные жители боятся выходить на улицу.'    
  },
  {
    id: '12',
    title: 'В сети посмеялись над фото Тома Хэнкса с «буханкой»',
    summary: 'Американский актер Том Хэнкс похвастался в соцсетях «своим новым грузовичком».',
    createdAt: new Date('2017-02-21T20:53:00'),
    author: 'Автор 2',
    content: 'На своей странице в Instagram он выложил снимок с российским автомобилем УАЗ, прозванным в народе «буханкой».'  
  },
  {
    id: '13',
    title: 'В Жодино директор фирмы подделывал автозапчасти БелАЗ для продажи в России.',
    summary: 'Из-за подделки запчастей предприятию причинен ущерб в размере более 11,5 тысяч рублей.',
    createdAt: new Date('2017-02-21T20:17:00'),
    author: 'Автор 2',
    content: 'В Жодино 39-летний директор коммерческого предприятия подделывал автозапчасти БелАЗ для продажи в России. Возбуждено уголовное дело.'
  },
  {
    id: '14',
    title: 'Названы главные открытия в диетологии, которые помогут продлить молодость.',
    summary: 'Здоровое питание становится все более привлекательным и модным.',
    createdAt: new Date('2017-02-21T17:03:00'),
    author: 'Автор 3',
    content: 'За прошедший год произошло несколько важных открытий, - говорит доктор медицинских наук, профессор Олег Медведев.'
  },
  {
    id: '15',
    title: 'Как Калачев в Могилеве вместо травы играл на резине.',
    summary: 'Тимофей Калачев после матча с «Манчестер Юнайтед» стал знаменит на весь мир.',
    createdAt: new Date('2017-02-21T14:21:00'),
    author: 'Автор 2',
    content: 'Позавчера футбольный клуб «Ростов», в составе которого играет белорусский ветеран Тимофей Калачев, сыграл в Лиге Европы с «Манчестер Юнайтед». В одном из эпизодов футболист обматерил тренера англичан Жозе Моуриньо'
  },
  {
    id: '16',
    title: 'В Беларуси планируют ограничить продажу электронных сигарет.',
    summary: 'Запрет на продажу электронных сигарет лицам, не достигшим 18 лет, планируется ввести в Беларуси.',
    createdAt: new Date('2017-02-21T05:00:00'),
    author: 'Автор 1',
    content: 'Об этом сообщила БелТА заместитель главного врача Республиканского центра гигиены, эпидемиологии и общественного здоровья Людмила Наройчик.'
  },
  {
    id: '17',
    title: 'Quisque suscipit massa a sem congue sed.',
    summary: 'Aenean eget lacus fermentum, facilisis odio molestie, blandit tellus. Etiam eu massa nunc.',
    createdAt: new Date('2017-02-20T19:20:00'),
    author: 'Автор 1',
    content: 'Etiam mattis quis nunc eu suscipit. Ut vel turpis pulvinar, viverra arcu id, tincidunt nisi. Mauris urna dui, congue et semper eget, maximus rutrum orci. Nullam id metus lorem. Etiam egestas mollis mi, in venenatis amet.'
  },
  {
    id: '18',
    title: 'Ученые вырастили картошку в марсианских условиях.',
    summary: 'Результаты оказались многообещающими.',
    createdAt: new Date('2017-02-20T17:18:00'),
    author: 'Автор 3',
    content: 'Несмотря на характерную для Марса сухую почву, необычный воздух и низкое атмосферное давление, многим сортам удалось успешно прорасти.'
  },
  {
    id: '19',
    title: 'Ученые рассказали, почему в голове «крутятся» песни.',
    summary: '«Прилипчивые» песни получили даже собственное название.',
    createdAt: new Date('2017-02-20T10:23:00'),
    author: 'Автор 3',
    content: 'В ходе одной из посвященных этой теме научных работ они выяснили, что такие песни похожи друг на друга. Чаще всего они достаточно известны, в них есть повторяющиеся ноты или неожиданные интервалы.'
  },
  {
    id: '20',
    title: 'Минского чиновника-коммунальщика задержали за взятку. ',
    summary: 'На протяжении нескольких лет чиновник закупал от поставщиков оборудование по завышенным ценам, получая откаты.',
    createdAt: new Date('2017-02-19T16:48:00'),
    author: 'Автор 1',
    content: 'Во время получения взятки задержан руководитель коммунального унитарного предприятия Минска. Такая информация размещена на сайте ГУВД Мингорисполкома.'
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
   if(filterConfig.author!=undefined && filterConfig.date==undefined){
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
            return;
        }
    }
}