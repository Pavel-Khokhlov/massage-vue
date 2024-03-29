import { createApp } from "vue";
import App from "./App.vue";
import ScrollIndicator from "./components/ScrollIndicator";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyBurger from "./components/MyBurger";
import MyMenuModal from "./components/MyMenuModal";
import MyNavigation from "./components/MyNavigation";
import MainCarousel from "./sections/MainCarousel";
import FeedbacksCarousel from "./components/FeedbacksCarousel.vue";
import AboutPage from "./sections/AboutPage";
import MassagePage from "./sections/MassagePage";
import PraviloPage from "./sections/PraviloPage";
import KinezioPage from "./sections/KinezioPage";
import SadhuPage from "./sections/SadhuPage";
import MyFeedbacks from "./sections/MyFeedbacks";
import MyContacts from "./sections/MyContacts";
import MyFaq from "./sections/MyFaq";
import "./sass/index.sass";
import { store } from "./store";

const app = createApp(App);
app.use(store);
app.component("scroll-indicator", ScrollIndicator);
app.component("my-header", MyHeader);
app.component("my-footer", MyFooter);
app.component("my-burger", MyBurger);
app.component("my-menu-modal", MyMenuModal);
app.component("my-navigation", MyNavigation);
app.component("main-carousel", MainCarousel);
app.component("feedbacks-carousel", FeedbacksCarousel);
app.component("my-about", AboutPage);
app.component("my-massage", MassagePage);
app.component("my-pravilo", PraviloPage);
app.component("my-kinezio", KinezioPage);
app.component("my-sadhu", SadhuPage);
app.component("my-feedbacks", MyFeedbacks);
app.component("my-contacts", MyContacts);
app.component("my-faq", MyFaq);
app.mount("#app");
