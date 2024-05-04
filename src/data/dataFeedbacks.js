const feedbacks = [
  {
    id: 0,
    avatar: "kseniya",
    name: "Ксения",
    feedback:
      "Попробовала впервые, ощущения только положительные. Слышала, что данная техника использовалась ещё нашими предками. Гениальный и простой тренажёр. Растяжка мышц потрясающая. На следующий день приятная лёгкость во всем теле. Особая благодарность инструктору. Грамотный и внимательный подход индивидуально к каждому. Тренировка на одном дыхании. Возможности Правило огромные как для меня новичка, так и для продвинутых. Мои рекомендации всем и бодрое настроение.",
    contact: "@Ksy_Gri",
  },
  {
    id: 1,
    avatar: "anna_klubnikina",
    name: "Анна",
    feedback:
      "Волшебные руки Павла помогают от всего! Моя спина теперь в порядке, а значит и голова :) Отдельная тема - кинезиотейпирование. Лимфодренажный эффект заметен сразу, что при сидячей работе просто спасает. Ну, и конечно, похудение. Когда я выхожу после сеанса, мне кажется я сбросила килограммов 5 и просто парю над землей! Спасибо, Павел!",
    contact: "@anna_klubnikina",
  },
  {
    id: 2,
    avatar: "tatiana",
    name: " Татьяна",
    feedback:
      "К Павлу хожу на массаж около года. Делаем лимфо дренажный, но каждый раз новая методика. После массажа всегда прекрасное настроение, чувство лёгкости, ощущение мышц, на утро лёгкий подъём и прилив энергии. Если анализировать работу других массажистов, то у них как будто просто поглаживание. Поэтому рекомендую только к Павлу!",
    contact: "@tatia_ch7",
  },
  {
    id: 3,
    avatar: "ts_andreeva",
    name: "Татьяна",
    feedback:
      "Павел - массажист от Бога! Очень внимательно относится к запросу клиентов. Детально прорабатывает проблемные зоны. Очень понравился и общий массаж, и антицеллюлитный. Для антицеллюлитного подбирает уникальные средства. Всегда в отличном настроении и с юмором - мне нравится такой подход! Всем рекомендую!",
    contact: "@TS_Andreeva",
  },
  {
    id: 4,
    avatar: "kristina",
    name: "Кристина",
    feedback:
      "Хочу выразить огромную благодарность Павлу, за то, что помогает мне избавиться от болей в спине. Я по профессии мастер маникюра и педикюра, и спина страдает очень сильно. После массажа у Павла, любая боль снимается, как по волшебству. Не хватит всех слов, чтоб выразить мою благодарность его профессионализму.",
    contact: "@KrisKim87",
  },
  {
    id: 5,
    avatar: "diana",
    name: "Диана",
    feedback:
      "Прихожу к Павлу на массаж уже не в первый раз. Все как всегда на высшем уровне: качественный массаж, после которого хочется летать, приятная, комфортная обстановка, расслабляющая музыка. Внимательный, очень тактичный специалист с доброй энергетикой.",
    contact: "@mrs_Diana_M",
  },
  {
    id: 6,
    avatar: "irina",
    name: "Ирина",
    feedback:
      "Проблемы со спиной и шеей всегда, на курсы массажа хожу 2-3 раза в год, поэтому оценить качество данной процедуры могу. Павел - профессионал! Если есть проблемы - записывайтесь, приходите на массаж, не пожалеете. Золотые руки! Да это про данного мастера!",
    contact: "@PO4EMY4E4KA",
  },
  {
    id: 7,
    avatar: "9",
    name: "Анна",
    feedback:
      "От сидячей работы очень начала болеть спина, а особенно плечи. Пришла на пробный массаж, и после сеанса сразу поняла, что Павел сделает с моими плечами то, что надо. Павел очень хорошо чувствует проблемные зоны и прорабатывает те точки, которые необходимы. Техника очень хорошая и сильные руки. Из всех, у кого я делала, он лучше всех. Всем советую!!!",
    contact: "",
  },
  {
    id: 8,
    avatar: "8",
    name: "Светлана",
    feedback:
      "Павел, хочу выразить вам свою благодарность за курс проведенных массажей. После вашей умелой техники и сильных, волшебных рук, у меня перестала болеть спина и осанка стала ровнее. Надеюсь повторим курс по весне))) P.S. К хорошему привыкаешь быстро.",
    contact: "",
  },
  {
    id: 9,
    avatar: "juju_juliya_nails",
    name: "Юлия",
    feedback:
      "Моя работа - это постоянное напряжение спины, шеи и поясницы. Я очень мучилась головными болями после работы. Стала ходить на массаж к Павлу. После него в теле ощущается легкость и бодрость. Просто кайфую и отдыхаю во время массажа, полный релакс. Так что если вы хотите отдохнуть телом и душой, то добро пожаловать на массаж к Павлу.",
    contact: "@juju_juliya_nails",
  },
  {
    id: 10,
    avatar: "10",
    name: "Алена Михайловна",
    feedback:
      "Обатилась к Павлу в феврале с сильными болями в пояснице и воротниковой зоны. 10 сеансов глубокого массажа спины и тейпирование. Иии... пока про боли не вспоминаю. Понравилось: Профессионализм, Пунктуальность, Ненавязчивость, Доброжелательность, Конфиденц-ть. Павел спасибо огромное!!!",
    contact: "",
  },
  {
    id: 11,
    avatar: "svetlana",
    name: "Светлана",
    feedback:
      "Павел, великолепный специалист своего дела . Заботливый, внимательный, отзывчивый. Помог  решить мои проблемы. Спасибо за гвозди, что помог поставить и пройти первый путь. Ни с кем другим, я бы не смогла). С уверенностью РЕКОМЕНДУЮ всем своим знакомым)))",
    contact: "@Sv_cosm",
  },
  {
    id: 12,
    avatar: "nataliya",
    name: "Наталья",
    feedback:
      "Мастер, который полностью отдаeтся процессу и работает не только с отдельными группами мышц, а всем телом в целом. Не отпустит вас, пока сам не будет удовлетворен, тем насколько тщательно проработал все проблемные места)). В ходе массажа применяются разные методики. Помимо массажа, обращались к Павлу и за тейпированием растяжения голеностопа. Эффект очевиден сразу же на следующий день. Если ваш массажист Павел, то вы в надежных руках!",
    contact: "@dar_nat",
  },
  {
    id: 13,
    avatar: "alex_p",
    name: "Александр",
    feedback:
      "Познакомился с Павлом в далеком 2017 году, когда после травмы плеча и не очень удачной реабилитации попал у нему на сеанс массажа-был разработан план возвращения плечевому поясу мобильности! Буквально после третьего сеанса уже вернулся уверенно в зал-приступил к работе с весами! И вот уже 7 лет пользуюсь его услугами ,переодически посещаю ,много знакомых к нему отправил и получил от них благодарственный камбек! Стал не просто спасителем, но и хорошим товарищем за эти годы! Однозначно рекомендация! Спасибо, Паш🙏",
    contact: "@SaintBeard",
  },
];

export default feedbacks;
