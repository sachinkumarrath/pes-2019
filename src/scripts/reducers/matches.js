const matches = (state = [], action) => {
  switch(action.type) {
    case "ADD_MATCH":
      return [
        ...state,
        action.matchRecord
      ];
    case "EDIT_MATCH":
      return [
        ...state
      ];
    default:
      return state;
  }
};

export default matches;