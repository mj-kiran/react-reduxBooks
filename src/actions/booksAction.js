import {
  BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  
} from "../constants/bookConstants";

import axios from "axios";

// books call

export const listBooks = () => async (dispatch) => {
  try {
    dispatch({ type: BOOK_LIST_REQUEST });

    const { data } = await axios.get("/books.json");

      dispatch({ type: BOOK_LIST_SUCCESS, payload: data.books });
  } catch (error) {
    dispatch({ type: BOOK_LIST_FAIL, payload: error });
  }
};


