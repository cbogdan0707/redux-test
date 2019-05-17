export default (state = [], action) => {
  switch (action.type) {
    case "CLICK_ON_PRODUCT":
      if (!state.includes(action.id)) {
        return [...state, action.id];
      } else {
        return state.filter(id => id !== action.id);
      }
    default:
      return state;
  }
};
