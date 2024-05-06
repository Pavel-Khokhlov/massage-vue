import { createApp } from "vue";
import App from "./App.vue";
import ScrollIndicator from "./components/ScrollIndicator";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyBurger from "./components/MyBurger";
import MyMenuModal from "./components/MyMenuModal";
import MyDiplomasModal from "./components/MyDiplomasModal";
import MyNavigation from "./components/MyNavigation";
import MainCarousel from "./sections/MainCarousel";
import DiplomasCarousel from "./components/DiplomasCarousel.vue";
import FeedbacksCarousel from "./components/FeedbacksCarousel.vue";
import AboutPage from "./sections/AboutPage";
import ServicesPage from "./sections/ServicesPage";
import MyFeedbacks from "./sections/MyFeedbacks";
import MyContacts from "./sections/MyContacts";
import MyFaq from "./sections/MyFaq";
import { store } from "./store";

const app = createApp(App);
app.use(store);
app.component("scroll-indicator", ScrollIndicator);
app.component("my-header", MyHeader);
app.component("my-footer", MyFooter);
app.component("my-burger", MyBurger);
app.component("my-menu-modal", MyMenuModal);
app.component("my-diplomas-modal", MyDiplomasModal);
app.component("my-navigation", MyNavigation);
app.component("main-carousel", MainCarousel);
app.component("diplomas-carousel", DiplomasCarousel);
app.component("feedbacks-carousel", FeedbacksCarousel);
app.component("my-about", AboutPage);
app.component("my-services", ServicesPage);
app.component("my-feedbacks", MyFeedbacks);
app.component("my-contacts", MyContacts);
app.component("my-faq", MyFaq);
app.mount("#app");
