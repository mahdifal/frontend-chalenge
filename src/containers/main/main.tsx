import React, { useState } from "react";
import User from "./user";
import styled from "styled-components";
import Icon from "../../components/icon/icon";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/reducers/rootReducer";
import { addUser, IUser, removeUser } from "../../state/actions/userAction";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-flow: row wrap;
  width: 80rem;
  height: 100%;
`;

const AddButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: #05b6d4;
  padding-top: 5px;
  padding-left: 1px;
  align-self: end;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

// type UserType = {
//   id: number;
//   name: string;
// }[];

type UserType = {
  id: number;
  name: string;
};

const userList = [
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
];

const Main: React.FC = () => {
  // const [user, setUser] = useState<UserType>(userList);
  const users = useSelector((state: any) => state.userState.users);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    let user: UserType = {
      id: Date.now() * Math.random(),
      name: "User1",
    };

    dispatch(addUser(user));
  };

  const handleRemoveUser = (user: IUser) => {
    dispatch(removeUser(user));
  };

  return (
    <Wrapper>
      <UserWrapper className="flexcontainer wrap row">
        {users?.map((item: any) => (
          <User
            key={item.id}
            data={item}
            removeUser={() => handleRemoveUser(item.id)}
            // removeUser={() => dispatch(removeUser(item.id))}
          />
        ))}
      </UserWrapper>
      <AddButton onClick={handleAddUser}>
        <Icon iconColor="#fff" size={26} iconTitle="plus" />
      </AddButton>
    </Wrapper>
  );
};

export default Main;
