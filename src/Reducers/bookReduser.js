import { BOOK_LIST_SUCCESS } from "../constants/bookConstants";

export const bookListReducer = (states = { books: [] }, actions) => {
  switch (actions.type) {
    case BOOK_LIST_SUCCESS:
      return {
        books: actions.payload,
          };
      
    default:
      return states;
  }
};

