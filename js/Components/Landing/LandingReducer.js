import { SET_CITY_SELECTOR } from "./actions";

const DEFAULT_STATE = {
  citySelector: "Борисов"
};

const setCitySelector = (state, action) => {
  Object.assign({}, state, { citySelector: action.payload });
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CITY_SELECTOR:
      return setCitySelector(state.citySelector, action);
    default:
      return state;
  }
};
