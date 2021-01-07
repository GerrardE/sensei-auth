/* eslint-disable max-len */
import apiService from "./api.service";

const getItems = (actions: any, path: string) => async (dispatch: React.Dispatch<any>): Promise<any> => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path);
    dispatch(actions.loading(false));
    dispatch(actions.getItemsSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.getItemsFail(errors));
  }
};

const getItem = (actions: any, path: any) => async (dispatch: React.Dispatch<any>): Promise<any> => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.getResource(path);
    dispatch(actions.loading(false));
    dispatch(actions.getItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.getItemFail(errors));
  }
};

const createItem = (actions: any, path: string, data: any, callBackUrl: string, history: any) => async (dispatch: React.Dispatch<any>): Promise<any> => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.postResource(path, data);
    dispatch(actions.loading(false));
    dispatch(actions.createItemSuccess(response));
    history.push(callBackUrl);
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.createItemFail(errors));
  }
};

const updateItem = (actions: any, path: string, data: any, callBackUrl: string, history: any) => async (dispatch: React.Dispatch<any>): Promise<any> => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.putResource(path, data);
    dispatch(actions.loading(false));
    dispatch(actions.updateItemSuccess(response));
    history.push(callBackUrl);
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.updateItemFail(errors));
  }
};

const deleteItem = (actions: any, path: string) => async (dispatch: React.Dispatch<any>): Promise<any> => {
  try {
    dispatch(actions.loading(true));
    const response = await apiService.deleteResource(path);
    dispatch(actions.loading(false));
    dispatch(actions.deleteItemSuccess(response));
  } catch (errors) {
    dispatch(actions.loading(false));
    dispatch(actions.deleteItemFail(errors));
  }
};

export {
  getItems, getItem, updateItem, deleteItem, createItem,
};
