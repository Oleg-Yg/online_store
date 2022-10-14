import { Dispatch } from "redux";
import { ProductAction, ProductActionTypes } from "../../types/product";
import axios from "axios";
import { BACKEND_URL } from "../../constants/global";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
      const response = await axios.get(`${BACKEND_URL}api/product`);
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Произошла ошибка при загрузке продуктов",
      });
    }
  };
};
