export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: null | string;
}

export interface Category {
  id: number;
  name: string;
}

export enum CategoryActionTypes {
  FETCH_CATEGORY = "FETCH_CATEGORY",
  FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS",
  FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR",
}

interface FetchCategoriesAction {
  type: CategoryActionTypes.FETCH_CATEGORY;
}

interface FetchCategoriesSuccessAction {
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS;
  payload: Category[];
}

interface FetchCategoriesErrorAction {
  type: CategoryActionTypes.FETCH_CATEGORY_ERROR;
  payload: string;
}

export type CategoryAction =
  | FetchCategoriesAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesErrorAction;
