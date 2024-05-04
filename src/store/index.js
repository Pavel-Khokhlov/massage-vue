import { createStore } from "vuex";
import Services from "../data/dataServices";

const initialServices = (service) => {
  return service.map((s) => {
    return (s = { ...s, isOpened: false });
  });
};

export const store = createStore({
  state() {
    return {
      isMenuOpen: false,
      currentServiceOpen: "",
      currentScrollPosition: "",
      services: initialServices(Services),
    };
  },
});
