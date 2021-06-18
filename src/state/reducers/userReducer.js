import { ADD_USER, REMOVE_USER } from "../actions/actionTypes";

// interface InitState {
//   id: number;
//   name: string;
// }

// type UserType = InitState[];

// type ActionType =
//   | {
//       type: "ADD_USER";
//       payload: string;
//     }
//   | {
//       type: "REMOVE_USER";
//       payload: number;
//     };

const initState = {
  users: [
    {
      id: Date.now() * Math.random(),
      name: "User1",
    },
    {
      id: Date.now() * Math.random(),
      name: "User2",
    },
    {
      id: Date.now() * Math.random(),
      name: "User3",
    },
    {
      id: Date.now() * Math.random(),
      name: "User4",
    },
  ],
};

export const userReducer = function (state = initState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
