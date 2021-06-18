import { ADD_USER, REMOVE_USER } from "./actionTypes";

export interface IUser {
  id: number;
  name: string;
}

export const addUser = (user: IUser) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (user: IUser) => ({
  type: REMOVE_USER,
  payload: user,
});
