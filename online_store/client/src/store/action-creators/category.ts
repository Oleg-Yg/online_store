import { Dispatch } from "redux";
import { CategoryAction, CategoryActionTypes } from "../../types/category";
import axios from "axios";
import { BACKEND_URL } from "../../constants/global";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      dispatch({ type: CategoryActionTypes.FETCH_CATEGORY });
      const response = await axios.get(`${BACKEND_URL}api/category`);
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_ERROR,
        payload: "Произошла ошибка при загрузке категорий",
      });
    }
  };
};
