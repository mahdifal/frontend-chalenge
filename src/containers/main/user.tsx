import React from "react";
import styled from "styled-components";
import Icon from "../../components/icon/icon";

const UserBox = styled.section`
  height: 180px;
  width: 280px;
  background-color: #25292f;
  border-radius: 3px;
  margin: 3px;
  padding: 5px;
  color: #fff;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: column;

  & span {
    cursor: pointer;
  }
`;

interface UserProps {
  data: {
    id: number;
    name: string;
  };
  removeUser: (id: number) => void;
}

const User: React.FC<UserProps> = ({ data, removeUser }) => {
  const onDragStart = (event: React.DragEvent<HTMLElement>) => {
    console.log("drag start!", event);
  };

  return (
    <UserBox draggable onDragStart={onDragStart}>
      <Icon
        iconTitle="trash-empty"
        size={16}
        iconColor="#fff"
        onClick={() => removeUser(data.id)}
      />
      <p>{data.name}</p>
    </UserBox>
  );
};

export default User;
