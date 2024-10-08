const { useState } = React;
const rootElement = document.getElementById('app');

function App() {
  const arr = [
  {'id': 1, 'description': 'Ваша усердная работа будет вознаграждена, но сон тоже важен!'},
  {'id': 2, 'description': 'Вас ждет приятный сюрприз от судьбы, возможно, он в конверте.'},
  {'id': 3, 'description': 'Ваша интуиция вас не подведет, особенно если она подсказывает выключить будильник.'},
  {'id': 4, 'description': 'Кто-то оценит вашу доброту... или хотя бы постарается!'},
  {'id': 5, 'description': 'В ближайшее время вам представится шанс что-то изменить... возможно, это рецепт завтрака.'},
  {'id': 6, 'description': 'Скоро вы откроете для себя новый источник вдохновения. Например, как складывать белье!'},
  {'id': 7, 'description': 'Ваш труд будет оценен, особенно если вы начнете с мытья посуды.'},
  {'id': 8, 'description': 'Вас ждут приятные новости, которые придут после пятой попытки дозвониться.'},
  {'id': 9, 'description': 'Скоро вы найдете способ улучшить настроение. Может быть, с чашкой чая?'},
  {'id': 10, 'description': 'Кто-то сделает вам комплимент, который согреет душу. Возможно, за ваш выбор кофейного напитка.'},
  {'id': 11, 'description': 'У вас будет шанс улучшить свои навыки, даже если это всего лишь навык выбора пиццы.'},
  {'id': 12, 'description': 'Ваша настойчивость будет вознаграждена... заказом еды на дом!'},
  {'id': 13, 'description': 'Скоро вы найдете что-то давно утерянное... особенно если это были ваши ключи.'},
  {'id': 14, 'description': 'Ваша поддержка кому-то станет очень ценной... например, если вы поднимете Wi-Fi у друзей.'},
  {'id': 15, 'description': 'Кто-то сделает вам неожиданно приятный комплимент... вроде "ты выглядишь выспавшимся!"'},
  {'id': 16, 'description': 'Ваша жизнь станет ярче благодаря новому плану. Даже если это план по выходным.'},
  {'id': 17, 'description': 'Скоро у вас будет важный разговор, возможно, с любимым диваном.'},
  {'id': 18, 'description': 'Ваша искренность будет оценена по достоинству, особенно если вы наконец скажете, что устали.'},
  {'id': 19, 'description': 'Ваше терпение приведет вас к успеху, даже если успех — это вовремя включенный сериал.'},
  {'id': 20, 'description': 'Кто-то из ваших друзей нуждается в вашей поддержке... в выборе пиццы на вечер.'},
  {'id': 21, 'description': 'Вас ждет интересное событие, которое перевернет вашу жизнь... или хотя бы украсит вечер.'},
  {'id': 22, 'description': 'Вы получите ответ на важный вопрос, например, почему выходные так быстро заканчиваются.'},
  {'id': 23, 'description': 'Кто-то сделает вам неожиданно приятный подарок — возможно, это лишний день отпуска.'},
  {'id': 24, 'description': 'Ваша жизнь станет немного проще... например, если вы, наконец, найдете инструкцию.'},
  {'id': 25, 'description': 'Ваши идеи принесут плоды, даже если это идея начать утро с кофе.'},
  {'id': 26, 'description': 'Вас ждет неожиданная встреча... возможно, с вашим отражением в зеркале утром.'},
  {'id': 27, 'description': 'Ваша интуиция приведет вас к важному решению, возможно, как пережить понедельник.'},
  {'id': 28, 'description': 'Ваша доброта вернется к вам обратно. Например, в виде найденной сдачи.'},
  {'id': 29, 'description': 'Скоро вы встретите кого-то, кто сделает ваш день лучше. Может быть, это будет кот.'},
  {'id': 30, 'description': 'Вас ждет радостное событие, например, когда вы найдете последний кусочек шоколада.'},
  {'id': 31, 'description': 'Ваш труд принесет плоды... и это не просто фигурально, это будет фрукт.'},
  {'id': 32, 'description': 'Кто-то оценит ваше внимание и заботу, особенно если это пицца на вечеринке.'},
  {'id': 33, 'description': 'В ближайшее время вас ждет сюрприз, возможно, это выспавшийся день.'},
  {'id': 34, 'description': 'Ваша поддержка поможет кому-то завершить важный проект, даже если это просто выбор фильма.'},
  {'id': 35, 'description': 'Скоро вы найдете неожиданный способ улучшить жизнь... может быть, это будет чек-лист.'},
  {'id': 36, 'description': 'Ваши навыки будут замечены и оценены, даже если это искусство варить кофе.'},
  {'id': 37, 'description': 'Скоро вы сможете отдохнуть, когда поймете, что выходные всё-таки настали.'},
  {'id': 38, 'description': 'Ваши идеи будут приняты с восторгом, даже если это идея посмотреть сериал в пятницу.'},
  {'id': 39, 'description': 'Скоро вы найдете способ сделать день лучше, может быть, это будет решение не работать ночью.'},
  {'id': 40, 'description': 'Кто-то поделится с вами важным секретом... например, как не опоздать утром.'},
  {'id': 41, 'description': 'Вас ждет приятное известие... например, «выходной продлен на день!»'},
  {'id': 42, 'description': 'Ваши старания скоро принесут результаты, возможно, в виде нового хобби.'},
  {'id': 43, 'description': 'Ваша интуиция подскажет вам, что самое важное — быть собой.'},
  {'id': 44, 'description': 'Кто-то удивит вас приятной новостью, возможно, это скидка на любимый продукт.'},
  {'id': 45, 'description': 'В ближайшее время вас ждет что-то неожиданное и хорошее, например, заказ, который приедет вовремя.'},
  {'id': 46, 'description': 'Ваши идеи помогут не только вам, но и окружающим.'},
  {'id': 47, 'description': 'Скоро вы сможете решить важную задачу, даже если это задача найти время для отдыха.'},
  {'id': 48, 'description': 'Ваш день будет наполнен радостью, возможно, из-за маленького, но приятного подарка.'},
  {'id': 49, 'description': 'Ваша жизнь станет ярче благодаря новым знаниям и впечатлениям.'},
  {'id': 50, 'description': 'Вас ждет приятное событие, которое наполнит ваш день хорошим настроением.'},
  {'id': 51, 'description': 'Скоро вы поймете, что лучшая диета — это забыть еду в магазине.'},
  {'id': 52, 'description': 'Кто-то из ваших коллег похвалит ваш стиль, но не будет уверен, где начинается творчество и заканчивается лень.'},
  {'id': 53, 'description': 'Ваша интуиция подскажет вам, что не стоит писать сообщение на эмоциях. Лучше подождите до утра.'},
  {'id': 54, 'description': 'Ваша настойчивость поможет вам победить, особенно в битве за последнее место на диване.'},
  {'id': 55, 'description': 'Кто-то предложит вам отличный совет... и вы благополучно о нём забудете.'},
  {'id': 56, 'description': 'Ваши попытки жить по расписанию начнут приносить плоды. Хотя бы раз будете ложиться спать до полуночи.'},
  {'id': 57, 'description': 'В ближайшее время вам придет озарение... особенно когда вы поймете, что забыли ключи.'},
  {'id': 58, 'description': 'Ваша жизнь станет проще, если вы наконец-то перестанете забывать зарядку дома.'},
  {'id': 59, 'description': 'Скоро вас ждет приятный сюрприз, возможно, это доставка, которую вы давно забыли.'},
  {'id': 60, 'description': 'Вас ждет вдохновение, когда вы осознаете, что впереди долгожданный выходной.'},
  {'id': 61, 'description': 'Кто-то сделает вам комплимент, и вы долго будете гадать, был ли он искренним.'},
  {'id': 62, 'description': 'Скоро вы узнаете, что идеальный порядок — это миф, особенно в вашем шкафу.'},
  {'id': 63, 'description': 'Ваша настойчивость приведет к успеху, особенно если успех — это доесть пирог до конца.'},
  {'id': 64, 'description': 'Ваша интуиция подскажет вам, что лучшие решения приходят после второго завтрака.'},
  {'id': 65, 'description': 'Ваша работа принесет вам удовлетворение... если не считать вечного вопроса «почему так много писем?»'},
  {'id': 66, 'description': 'Вас ждет приятная неожиданность — возможно, ваш будильник решит вас не будить.'},
  {'id': 67, 'description': 'Кто-то предложит вам новый взгляд на жизнь. Скорее всего, это будет кот с пустой миской.'},
  {'id': 68, 'description': 'Ваша удача улыбнется вам в очереди за кофе, особенно если перед вами закончатся стаканчики.'},
  {'id': 69, 'description': 'Ваша поддержка окажется бесценной, особенно когда другу нужно оправдать покупку нового гаджета.'},
  {'id': 70, 'description': 'Скоро вам предстоит решить важный вопрос: печь пирог или заказать доставку?'},
  {'id': 71, 'description': 'Ваша целеустремленность будет вознаграждена... возможно, отпуском за просмотр сериалов.'},
  {'id': 72, 'description': 'Кто-то похвалит ваш стиль, но не уточнит, где вы покупали столь изысканную пижаму.'},
  {'id': 73, 'description': 'Ваша креативность поможет вам выйти из сложной ситуации... когда снова забудете пароль.'},
  {'id': 74, 'description': 'Скоро вам предстоит сложный выбор — остаться в кровати или всё-таки встать по будильнику.'},
  {'id': 75, 'description': 'Ваш день будет полон сюрпризов, особенно если вы наконец решитесь открыть почту.'},
  {'id': 76, 'description': 'Ваша доброта будет вознаграждена... неожиданной благодарностью от кофемашины.'},
  {'id': 77, 'description': 'В ближайшее время вы узнаете, что лучший план — это отсутствие плана.'},
  {'id': 78, 'description': 'Вас ждут перемены, особенно если вы решитесь переставить мебель посреди ночи.'},
  {'id': 79, 'description': 'Ваша интуиция подскажет вам, что лучший путь к успеху — это избегать понедельников.'},
  {'id': 80, 'description': 'Скоро вы узнаете что-то новое... например, что ваш любимый сериал закончился два года назад.'},
  {'id': 81, 'description': 'Кто-то похвалит ваш выбор, когда вы наконец решитесь на нечто радикальное... вроде нового рецепта блинов.'},
  {'id': 82, 'description': 'Ваш труд будет оценен... по количеству съеденных вами конфет на работе.'},
  {'id': 83, 'description': 'Ваша жизнь станет ярче, если вы наконец купите лампочку.'},
  {'id': 84, 'description': 'Скоро вы найдете вдохновение в самом неожиданном месте — в холодильнике.'},
  {'id': 85, 'description': 'Кто-то предложит вам ценный совет, который вы сможете использовать... когда захотите.'},
  {'id': 86, 'description': 'Ваша поддержка будет оценена, особенно если это будет совет по выбору пиццы.'},
  {'id': 87, 'description': 'В ближайшее время вас ждет интересное открытие... возможно, это тот самый давно потерянный носок.'},
  {'id': 88, 'description': 'Кто-то удивит вас новостью, которая полностью изменит ваш взгляд на выходные — они закончились.'},
  {'id': 89, 'description': 'Ваша решительность поможет вам наконец убрать квартиру... хотя бы в одном углу.'},
  {'id': 90, 'description': 'Скоро вы почувствуете прилив энергии, возможно, когда поймете, что кофе уже кончился.'},
  {'id': 91, 'description': 'Ваша интуиция вас не подведет... если вы все же вспомните, зачем пришли в магазин.'},
  {'id': 92, 'description': 'Кто-то оценит ваш креативный подход, особенно если это была ваша попытка приготовить ужин.'},
  {'id': 93, 'description': 'Вас ждет новый опыт, возможно, это понимание того, что еда ночью — это всё-таки не лучший вариант.'},
  {'id': 94, 'description': 'Ваша настойчивость будет вознаграждена, особенно если вы будете настаивать на дополнительной порции десерта.'},
  {'id': 95, 'description': 'Ваша доброта поможет вам узнать, как быстро заканчивается кофе у соседей.'},
  {'id': 96, 'description': 'Кто-то сделает вам неожиданный комплимент... например, за умение жонглировать дедлайнами.'},
  {'id': 97, 'description': 'В ближайшее время вы узнаете, что лучшие моменты происходят тогда, когда перестаешь смотреть на часы.'},
  {'id': 98, 'description': 'Ваши старания будут вознаграждены... если вы решитесь не откладывать дела на завтра.'},
  {'id': 99, 'description': 'Скоро вы поймете, что лучший способ расслабиться — это отменить все планы.'},
  {'id': 100, 'description': 'Вас ждет новый взгляд на вещи, особенно когда вы посмотрите на них из-под одеяла.'}
];


  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const getPrediction = () => {
    const randomIndex = Math.floor(Math.random()*arr.length);
    setValue(randomIndex);
    setValue1(arr[randomIndex].description);
  }

  return (
    <div className='container'>
      <div className='app'>
        <button onClick={getPrediction}>Получить предсказание</button>
        <h2>Ваше предсказание:</h2>
      </div>
      <div className="prediction">{value1}</div>
    </div>
  );
}

ReactDOM.createRoot(rootElement).render(<App />);
