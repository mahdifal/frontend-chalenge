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

const AddButton = styled.div<{ color: string; cursor?: string }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  padding-top: 5px;
  padding-left: 1px;
  align-self: end;
  cursor: ${(props) => props.cursor};
  margin: 0 auto;
  margin-bottom: 1rem;
`;

type UserType = {
  id: number;
  name: string;
};

const Main: React.FC = () => {
  const users = useSelector((state: any) => state.userState.users);
  const dispatch = useDispatch();

  const userLength = users.length;

  const handleAddUser = () => {
    let user: UserType = {
      id: Date.now() * Math.random(),
      name: `User${userLength + 1}`,
    };

    dispatch(addUser(user));
  };

  const handleRemoveUser = (user: IUser) => {
    dispatch(removeUser(user));
  };

  const renderAddButton =
    userLength >= 12 ? (
      <AddButton color="#fff">
        <Icon iconColor="#e7e7e7" size={26} iconTitle="plus" />
      </AddButton>
    ) : (
      <AddButton onClick={handleAddUser} color="#05b6d4" cursor="pointer">
        <Icon iconColor="#fff" size={26} iconTitle="plus" />
      </AddButton>
    );

  return (
    <Wrapper>
      <UserWrapper className="flexcontainer wrap row">
        {users?.map((item: any) => (
          <User
            key={item.id}
            data={item}
            removeUser={() => handleRemoveUser(item.id)}
          />
        ))}
      </UserWrapper>
      {renderAddButton}
    </Wrapper>
  );
};

export default Main;
