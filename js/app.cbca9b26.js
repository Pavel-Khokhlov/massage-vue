(function(){var e={6739:function(e,t,n){"use strict";var a=n(5130),r=n(6768);function s(e,t,n,a,s,o){const i=(0,r.g2)("my-header"),c=(0,r.g2)("main-carousel"),l=(0,r.g2)("my-about"),u=(0,r.g2)("my-massage"),d=(0,r.g2)("my-pravilo"),p=(0,r.g2)("my-kinezio"),m=(0,r.g2)("my-sadhu"),f=(0,r.g2)("my-feedbacks"),v=(0,r.g2)("my-contacts"),g=(0,r.g2)("my-faq"),_=(0,r.g2)("my-footer"),h=(0,r.g2)("my-menu-modal");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.bF)(c,{slides:s.slides},null,8,["slides"]),(0,r.bF)(l),(0,r.bF)(u),(0,r.bF)(d),(0,r.bF)(p),(0,r.bF)(m),(0,r.bF)(f),(0,r.bF)(v),(0,r.bF)(g),(0,r.bF)(_),(0,r.bF)(h,{isOpen:e.$store.state.isMenuOpen},null,8,["isOpen"])],64)}const o=[{id:0,title:"Массаж",path:"massage",text:"Эффективный массаж с применением миофасциальных техник"},{id:1,title:"Правило",path:"pravilo",text:'Исправление симметрии организма на инструменте "Правило"'},{id:3,title:"Кинезиотейпирование",path:"kinezio",text:"Мягкое воздействие на организм при помощи тейпирования"},{id:4,title:"Гвоздестояние",path:"nailstanding",text:'Проработка эмоционального состояния и психологических зажимов на досках "Садху"'}];var i=o,c={name:"App",data(){return{slides:i}}},l=n(1241);const u=(0,l.A)(c,[["render",s]]);var d=u,p=n(4232);function m(e,t,n,a,s,o){return(0,r.uX)(),(0,r.CE)("div",{class:"scroll",style:(0,p.Tr)({width:`${s.scrollWidth}vw`})},null,4)}var f={data(){return{scrollWidth:0}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(e){let t=Math.max(e.target.body.scrollHeight,e.target.documentElement.scrollHeight,e.target.body.offsetHeight,e.target.documentElement.offsetHeight,e.target.body.clientHeight,e.target.documentElement.clientHeight);const n=t-window.innerHeight,a=window.scrollY?window.scrollY:window.pageYOffset,r=a/n*100;this.scrollWidth=r}}};const v=(0,l.A)(f,[["render",m]]);var g=v;const _={class:"header"},h=(0,r.Lk)("h2",{class:"header__logo"},"П",-1);function k(e,t){const n=(0,r.g2)("scroll-indicator"),a=(0,r.g2)("my-burger");return(0,r.uX)(),(0,r.CE)("header",_,[(0,r.bF)(n),h,(0,r.bF)(a)])}const b={},y=(0,l.A)(b,[["render",k]]);var w=y;const C={class:"footer"},x={class:"footer__copyright"},E={class:"footer__copyright"};function S(e,t,n,a,s,o){return(0,r.uX)(),(0,r.CE)("footer",C,[(0,r.Lk)("p",x," @ 2016-"+(0,p.v_)(o.getCurrentYear())+" Copyright by Pavel&Co ",1),(0,r.Lk)("p",E,"Version: "+(0,p.v_)(s.VERSION_APP),1)])}var O={rE:"0.1.0"},L={data(){return{VERSION_APP:O.rE,CURRENT_YEAR:0}},methods:{getCurrentYear(){return(new Date).getFullYear()}}};const F=(0,l.A)(L,[["render",S]]);var X=F;const A=["on:click"];function q(e,t,n,a,s,o){return(0,r.uX)(),(0,r.CE)("button",{class:(0,p.C4)(["burger",{_active:e.$store.state.isMenuOpen}]),"on:click":o.handleBurgerClick},null,42,A)}var j={data(){return{}},methods:{handleBurgerClick(){this.$store.state.isMenuOpen=!this.$store.state.isMenuOpen}}};const z=(0,l.A)(j,[["render",q]]);var P=z;function I(e,t,n,a,s,o){const i=(0,r.g2)("my-navigation");return(0,r.uX)(),(0,r.CE)("section",{class:(0,p.C4)(["menu-modal",{_active:n.isOpen}])},[(0,r.bF)(i,{isOpen:n.isOpen},null,8,["isOpen"])],2)}var N={props:{isOpen:{type:Boolean,default:!1}}};const T=(0,l.A)(N,[["render",I]]);var M=T;const $={class:"nav__list"},H=["href"];function V(e,t,n,a,s,o){return(0,r.uX)(),(0,r.CE)("nav",{class:(0,p.C4)(["nav",{_active:n.isOpen}])},[(0,r.Lk)("ul",$,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.links,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.title},[(0,r.Lk)("a",{href:`#${e.path}`,class:"nav__link"},(0,p.v_)(e.title),9,H)])))),128))])],2)}const R=[{id:0,title:"Главная",path:"#main"},{id:1,title:"Миофасциальный массаж",path:"#massage"},{id:2,title:"Правило",path:"#pravilo"},{id:3,title:"Кинезиотейпирование",path:"#kinezio"},{id:4,title:"Гвоздестояние",path:"#nailstanding"},{id:5,title:"Обо мне",path:"#about"},{id:6,title:"Отзывы",path:"#feedbacks"},{id:7,title:"Написать мне",path:"#contacts"}];var U=R,W={data(){return{links:U}},props:{isOpen:{type:Boolean,default:!1}}};const D=(0,l.A)(W,[["render",V]]);var K=D;const Y=e=>((0,r.Qi)("data-v-8a9611d4"),e=e(),(0,r.jt)(),e),B={class:"section"},Q={class:"carousel__info"},G={class:"carousel__title"},J={class:"carousel__text"},Z=Y((()=>(0,r.Lk)("button",{type:"button",class:"carousel__button"},"Записаться",-1))),ee=["src"],te=["src"],ne={class:"carousel__pagination"},ae=["onClick"];function re(e,t,a,s,o,i){const c=(0,r.g2)("slide"),l=(0,r.g2)("carousel");return(0,r.uX)(),(0,r.CE)("section",B,[(0,r.bF)(l,{ref:"carousel",modelValue:o.currentSlide,"onUpdate:modelValue":t[2]||(t[2]=e=>o.currentSlide=e),"items-to-show":1,autoplay:5e3,"wrap-around":!0,transition:500,pauseAutoplayOnHover:!0,currentSlide:o.currentSlide},{addons:(0,r.k6)((()=>[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.prevSlide&&i.prevSlide(...e)),class:"carousel__nav prev"},[(0,r.Lk)("img",{src:s.arrowPrev,alt:"my-logo",class:"carousel__nav-icon"},null,8,ee)]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.nextSlide&&i.nextSlide(...e)),class:"carousel__nav next"},[(0,r.Lk)("img",{src:s.arrowNext,alt:"my-logo",class:"carousel__nav-icon"},null,8,te)]),(0,r.Lk)("div",ne,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.slides,((e,t)=>((0,r.uX)(),(0,r.CE)("button",{key:t,type:"button",class:(0,p.C4)(["carousel__dot",{_active:o.currentSlide===t}]),onClick:e=>i.handleClickPage(t)},null,10,ae)))),128))])])),default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.slides,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e.id,class:"carousel__slide",style:(0,p.Tr)({backgroundImage:`url(${n(4535)(`./${e.path}.webp`)})`})},{default:(0,r.k6)((()=>[(0,r.Lk)("div",Q,[(0,r.Lk)("h1",G,(0,p.v_)(e.title),1),(0,r.Lk)("p",J,(0,p.v_)(e.text),1),Z])])),_:2},1032,["style"])))),128))])),_:1},8,["modelValue","currentSlide"])])}var se=n(3225),oe=n.p+"img/arrowPrev.1f70f3fe.svg",ie=n.p+"img/arrowNext.e292a653.svg",ce={components:{Carousel:se.FN,Slide:se.q7},setup(){return{arrowPrev:oe,arrowNext:ie}},data(){return{currentSlide:0}},props:{slides:{type:Array}},methods:{handleClickPage(e){this.currentSlide=e},getImage(e){return n(5807)(`./${e}.webp`)},nextSlide(){this.currentSlide+=1},prevSlide(){this.currentSlide-=1}}};const le=(0,l.A)(ce,[["render",re],["__scopeId","data-v-8a9611d4"]]);var ue=le;const de={class:"carousel"},pe={class:"carousel__stack"},me=["src"],fe={class:"carousel__title"},ve={class:"carousel__text"},ge={class:"carousel__contact"},_e={class:"carousel__pagination"},he=["onClick"];function ke(e,t,n,a,s,o){const i=(0,r.g2)("slide"),c=(0,r.g2)("carousel");return(0,r.uX)(),(0,r.CE)("section",de,[(0,r.bF)(c,{ref:"carousel",modelValue:s.currentSlide,"onUpdate:modelValue":t[2]||(t[2]=e=>s.currentSlide=e),"items-to-show":s.itemsToShow,autoplay:5e3,"wrap-around":!0,transition:500,pauseAutoplayOnHover:!0,currentSlide:s.currentSlide},{addons:(0,r.k6)((()=>[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.prevSlide&&o.prevSlide(...e)),class:"carousel__button prev"}),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>o.nextSlide&&o.nextSlide(...e)),class:"carousel__button next"}),(0,r.Lk)("div",_e,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.slides,((e,t)=>((0,r.uX)(),(0,r.CE)("button",{key:t,type:"button",class:(0,p.C4)(["carousel__dot",{_active:s.currentSlide===t}]),onClick:e=>o.handleClickPage(t)},null,10,he)))),128))])])),default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.slides,(e=>((0,r.uX)(),(0,r.Wv)(i,{key:e.id+20},{default:(0,r.k6)((()=>[(0,r.Lk)("div",pe,[(0,r.Lk)("img",{src:o.itemImage(e.avatar),alt:"avatar",class:"carousel__avatar"},null,8,me),(0,r.Lk)("h3",fe,(0,p.v_)(e.name),1),(0,r.Lk)("q",ve,(0,p.v_)(e.feedback),1),(0,r.Lk)("p",ge,(0,p.v_)(e.contact),1)])])),_:2},1024)))),128))])),_:1},8,["modelValue","items-to-show","currentSlide"])])}var be={components:{Carousel:se.FN,Slide:se.q7},data(){return{currentSlide:0,itemsToShow:1.2}},props:{slides:{type:Array}},computed:{itemImage(e){return n(9098)(`./${e}.png`)}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{handleClickPage(e){this.currentSlide=e},nextSlide(){this.currentSlide+=1},prevSlide(){this.currentSlide-=1},handleResize(){let e=Math.max(document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth);return e<=768?this.itemsToShow=1.2:e>768&&e<=1200?this.itemsToShow=1.25:e>1200?this.itemsToShow=1.3:void 0}}};const ye=(0,l.A)(be,[["render",ke],["__scopeId","data-v-05014028"]]);var we=ye;const Ce={class:"section"},xe=(0,r.Lk)("h2",{class:"section__title"},"Обо мне",-1),Ee=[xe];function Se(e,t){return(0,r.uX)(),(0,r.CE)("section",Ce,Ee)}const Oe={},Le=(0,l.A)(Oe,[["render",Se]]);var Fe=Le;const Xe={class:"section"},Ae=(0,r.Lk)("h2",{class:"section__title"},"Миофасциальный массаж",-1),qe=[Ae];function je(e,t){return(0,r.uX)(),(0,r.CE)("section",Xe,qe)}const ze={},Pe=(0,l.A)(ze,[["render",je]]);var Ie=Pe;const Ne={class:"section"},Te=(0,r.Lk)("h2",{class:"section__title"},"Правило",-1),Me=[Te];function $e(e,t){return(0,r.uX)(),(0,r.CE)("section",Ne,Me)}const He={},Ve=(0,l.A)(He,[["render",$e]]);var Re=Ve;const Ue={class:"section"},We=(0,r.Lk)("h2",{class:"section__title"},"Кинезиотейпирование",-1),De=[We];function Ke(e,t){return(0,r.uX)(),(0,r.CE)("section",Ue,De)}const Ye={},Be=(0,l.A)(Ye,[["render",Ke]]);var Qe=Be;const Ge={class:"section"},Je=(0,r.Lk)("h2",{class:"section__title"},"Гвоздестояние",-1),Ze=[Je];function et(e,t){return(0,r.uX)(),(0,r.CE)("section",Ge,Ze)}const tt={},nt=(0,l.A)(tt,[["render",et]]);var at=nt;const rt={class:"section feedbacks"},st=(0,r.Lk)("h2",{class:"section__title feedbacks"},"Отзывы",-1),ot=(0,r.Lk)("p",{class:"section__text feedbacks"}," Благодарю вас за оказанное мне доверие. Мне очень приятно получать от вас обратную связь. Благодарю от всей души! С уважением Павел. ",-1);function it(e,t,n,a,s,o){const i=(0,r.g2)("feedbacks-carousel");return(0,r.uX)(),(0,r.CE)("section",rt,[st,ot,(0,r.bF)(i,{slides:s.feedbacks},null,8,["slides"])])}const ct=[{id:0,avatar:"2",name:"Ксения",feedback:"В таком случае, сделав запрос по media_session_access_url, вы прекратите выполнение сценария. Возвращаемся к реализации нашего колбэка на телефонные номера. Создаем приложение в соответствующем разделе панели управления, назовем его банально callback (в итоге полное название будет callback.имя_аккаунта.voximplant.com), и в разделе «Сценарии» создаем новый сценарий CallbackHabr следующего вида:",contact:"mail@mail.ru"},{id:1,avatar:"2",name:"Анна",feedback:"Волшебные руки Павла помогают от всего! Моя спина теперь в порядке, а значит и голова :) Отдельная тема - кинезиотейпирование. Лимфодренажный эффект заметен сразу, что при сидячей работе просто спасает. Ну, и конечно, похудение. Когда я выхожу после сеанса, мне кажется я сбросила килограммов 5 и просто парю над землей! Спасибо, Павел!",contact:"mail@mail.ru"},{id:2,avatar:"1",name:"Александр",feedback:"Свои мышцы я доверяю только ему. Приходите к Павлу на массаж не пожалеете.",contact:"mail@mail.ru"},{id:3,avatar:"3",name:"Татьяна",feedback:"Павел - массажист от Бога! Очень внимательно относится к запросу клиентов. Детально прорабатывает проблемные зоны. Очень понравился и общий массаж, и антицеллюлитный. Для антицеллюлитного подбирает уникальные средства. Всегда в отличном настроении и с юмором - мне нравится такой подход! Всем рекомендую!",contact:"mail@mail.ru"},{id:4,avatar:"2",name:"Светлана",feedback:"Нашла потрясающего массажиста рядом с домом. Рекомендую ;)",contact:"mail@mail.ru"},{id:5,avatar:"5",name:"Полина",feedback:"Павел спасибо огромное за массаж, чувствую легкость во всем теле, обязательно запишусь снова..",contact:"mail@mail.ru"},{id:6,avatar:"2",name:"Оля",feedback:"В конце рабочей недели обязательно прихожу к Павлу на массаж. Павел создает хорошую атмосферу во время сеанса, Обожаю общий массаж, после него ощущаю себя волшебно. Жду новых встреч с нетерпением.",contact:"mail@mail.ru"},{id:7,avatar:"2",name:"Анна",feedback:"От сидячей работы очень начала болеть спина, а особенно плечи. Пришла на пробный массаж, и после сеанса сразу поняла, что Павел сделает с моими плечами то, что надо. Павел очень хорошо чувствует проблемные зоны и прорабатывает те точки, которые необходимы. Техника очень хорошая и сильные руки. Из всех, у кого я делала, он лучше всех. Всем советую!!!",contact:"mail@mail.ru"},{id:8,avatar:"2",name:"Светлана",feedback:"Павел, хочу выразить вам свою благодарность за курс проведенных массажей. После вашей умелой техники и сильных, волшебных рук, у меня перестала болеть спина и осанка стала ровнее. Надеюсь повторим курс по весне))) P.S. К хорошему привыкаешь быстро.",contact:"mail@mail.ru"},{id:9,avatar:"2",name:"Юлия",feedback:"Моя работа - это постоянное напряжение спины, шеи и поясницы. Я очень мучилась головными болями после работы. Стала ходить на массаж к Павлу. После него в теле ощущается легкость и бодрость. Просто кайфую и отдыхаю во время массажа, полный релакс. Так что если вы хотите отдохнуть телом и душой, то добро пожаловать на массаж к Павлу.",contact:"mail@mail.ru"},{id:10,avatar:"10",name:"Алена Михайловна",feedback:"Обатилась к Павлу в феврале с сильными болями в пояснице и воротниковой зоны. 10 сеансов глубокого массажа спины и тейпирование. Иии... пока про боли не вспоминаю. Понравилось: Профессионализм, Пунктуальность, Ненавязчивость, Доброжелательность, Конфиденц-ть. Павел спасибо огромное!!!",contact:"mail@mail.ru"}];var lt=ct,ut={data(){return{feedbacks:lt}}};const dt=(0,l.A)(ut,[["render",it]]);var pt=dt;const mt={class:"section"},ft=(0,r.Lk)("h2",{class:"section__title"},"Контакты",-1),vt=[ft];function gt(e,t){return(0,r.uX)(),(0,r.CE)("section",mt,vt)}const _t={},ht=(0,l.A)(_t,[["render",gt]]);var kt=ht;const bt={class:"section faq"},yt=(0,r.Lk)("h2",{class:"section__title"},"Вопрос-Ответ",-1),wt={class:"faq__list"},Ct={class:"faq__text question"},xt={class:"faq__text answer"};function Et(e,t,n,a,s,o){return(0,r.uX)(),(0,r.CE)("section",bt,[yt,(0,r.Lk)("ul",wt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.faqs,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id,class:"faq__item"},[(0,r.Lk)("p",Ct,(0,p.v_)(e.question),1),(0,r.Lk)("p",xt,(0,p.v_)(e.answer),1)])))),128))])])}const St=[{id:0,question:"Где вы принимаете и как можно к вам записатться?",answer:"В настоящий момент я принимаю в кабинете г.Москва район метро Белорусская. Также работаю по субботам в Термальном комплексе города Мытищи и принимаю у себя. Записаться можно на сайте, через форму."},{id:1,question:"Можно ли есть перед массажем и после него?",answer:"Желательно поесть минимум за час до процедуры массажа, чтобы у тебя не возникло каких-либо сложностей во время сеанса, в частности — ощущение переполненности желудка. Это, как правило, не способствует комфорту во время самой процедуры. Комфортное состояние пациента во время сеанса очень важный момент терапии, который однозначно способствует ее успешности и общему оздоровлению организма. Также перед процедурой не стоит курить или употреблять алкогольные напитки. Непосредственно перед сеансом, если ты очень проголодался, допустимо съесть какой-то фрукт или фруктовый салат. Поесть можно спустя полчаса после массажа."},{id:2,question:"Какие существуют противопоказания к массажу?",answer:"Грипп, ОРВИ, ангина, любые острые воспалительные процессы. Болезни крови, внутренние кровотечения. Злокачественные новообразования и опухоли. Гнойные процессы любой локализации. Цинга. Остеомиелит. Осложненные формы варикозного расширения вен: тромбоз, тромбофлебиты и трофические язвы, любые острые воспаления кровеносных и лимфатических сосудов. Аневризма аорты и сердца, острая ишемия миокарда. Легочно-сердечная недостаточность третьей степени. Гипер- и гипотонический кризис. Активная форма туберкулеза. Почечная и печеночная недостаточность. Венерические заболевания. Психические заболевания с чрезмерным возбуждением и значительно измененной психикой."},{id:3,question:"Помогает ли Правило при болях в спине?",answer:"Причин болей в спине великое множество, некоторые из них могут служить противопоказаниями для занятий. Если болевые ощущения возникли из-за острого воспаления, травмы или инфекции – занятия придется отложить. Однако при остеохондрозе, грыжах межпозвоночного диска, сколиозе, нарушениях осанки, миофасциальном синдроме тренировки на Правиле рекомендованы для улучшения состояния. Самым главным источником боли в спине является спазм мышц, поддерживающих позвоночник, которые находятся в постоянно гипертонусе. Растянув и расслабив мышцы, мы убираем половину болевого синдрома. Вторая половина боли связана с защемлением тканей, так называемым корешковым синдромом. Растянув позвоночник и суставы, мы высвобождаем ткани из своеобразного капкана, и это позволяет избавиться от боли вообще."},{id:4,question:"Правило VS Массаж",answer:"Для себя я решил однозначный выбор в сторону правило. Во первых: один сеанс правило заменит несколько посещений на массаж. Во вторых: работа идет в более глубоких слоях организма, куда существующими техниками массажа просто не добраться. В третьих: это работа на симметрию организма. Ну и конечно: это возможность полностью заменить фитнес и оставаться в отличной форме."}];var Ot=St,Lt={data(){return{faqs:Ot}}};const Ft=(0,l.A)(Lt,[["render",Et]]);var Xt=Ft,At=n(782);const qt=(0,At.y$)({state(){return{isMenuOpen:!1}}}),jt=(0,a.Ef)(d);jt.use(qt),jt.component("scroll-indicator",g),jt.component("my-header",w),jt.component("my-footer",X),jt.component("my-burger",P),jt.component("my-menu-modal",M),jt.component("my-navigation",K),jt.component("main-carousel",ue),jt.component("feedbacks-carousel",we),jt.component("my-about",Fe),jt.component("my-massage",Ie),jt.component("my-pravilo",Re),jt.component("my-kinezio",Qe),jt.component("my-sadhu",at),jt.component("my-feedbacks",pt),jt.component("my-contacts",kt),jt.component("my-faq",Xt),jt.mount("#app")},9098:function(e,t,n){var a={"./1.png":1188,"./10.png":9518,"./2.png":4751,"./20200601_191403_0000.png":2986,"./20200601_191605_0000.png":6062,"./20200601_191719_0000.png":2144,"./20200601_193756_0000.png":8119,"./20200601_193939_0000.png":4850,"./3.png":6662,"./5.png":6096};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=9098},4535:function(e,t,n){var a={"./kinezio.jpg":6568,"./kinezio.webp":4545,"./massage.jpg":7042,"./massage.webp":5951,"./nailstanding.jpg":2411,"./nailstanding.webp":6056,"./pravilo.jpg":5216,"./pravilo.webp":9481};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=4535},5807:function(e,t,n){var a={"./kinezio.webp":4545,"./massage.webp":5951,"./nailstanding.webp":6056,"./pravilo.webp":9481};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=5807},1188:function(e,t,n){"use strict";e.exports=n.p+"img/1.f002f341.png"},9518:function(e,t,n){"use strict";e.exports=n.p+"img/10.e9cfc369.png"},4751:function(e,t,n){"use strict";e.exports=n.p+"img/2.a37260f8.png"},2986:function(e,t,n){"use strict";e.exports=n.p+"img/20200601_191403_0000.7b93d08b.png"},6062:function(e,t,n){"use strict";e.exports=n.p+"img/20200601_191605_0000.3043aeb6.png"},2144:function(e,t,n){"use strict";e.exports=n.p+"img/20200601_191719_0000.e55fcaef.png"},8119:function(e,t,n){"use strict";e.exports=n.p+"img/20200601_193756_0000.9f213d26.png"},4850:function(e,t,n){"use strict";e.exports=n.p+"img/20200601_193939_0000.3dc4c83c.png"},6662:function(e,t,n){"use strict";e.exports=n.p+"img/3.3f8b7267.png"},6096:function(e,t,n){"use strict";e.exports=n.p+"img/5.1cb18666.png"},6568:function(e,t,n){"use strict";e.exports=n.p+"img/kinezio.917f9094.jpg"},4545:function(e,t,n){"use strict";e.exports=n.p+"img/kinezio.b1374622.webp"},7042:function(e,t,n){"use strict";e.exports=n.p+"img/massage.d22252d6.jpg"},5951:function(e,t,n){"use strict";e.exports=n.p+"img/massage.9cf46b36.webp"},2411:function(e,t,n){"use strict";e.exports=n.p+"img/nailstanding.b61a6513.jpg"},6056:function(e,t,n){"use strict";e.exports=n.p+"img/nailstanding.51e4c554.webp"},5216:function(e,t,n){"use strict";e.exports=n.p+"img/pravilo.07fda272.jpg"},9481:function(e,t,n){"use strict";e.exports=n.p+"img/pravilo.4833324c.webp"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],s=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],i=a[1],c=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var u=c(n)}for(t&&t(a);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunkmassage_vue"]=self["webpackChunkmassage_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(6739)}));a=n.O(a)})();
//# sourceMappingURL=app.cbca9b26.js.map