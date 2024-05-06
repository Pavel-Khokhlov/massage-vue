import { createStore } from "vuex";
import Services from "../data/dataServices";

const initialServices = (service) => {
  return service.map((s) => {
    return (s = { ...s, isOpened: false });
  });
};

const initialFormState = {
  name: "",
  contact: "+7",
  message: "Здравствуйте, ",
};

export const store = createStore({
  state() {
    return {
      isMenuOpen: false,
      isDiplomasOpen: false,
      currentDiploma: "",
      currentServiceOpen: "",
      currentScrollPosition: "",
      services: initialServices(Services),
      formState: initialFormState,
    };
  },
});
