import React from "react";
import styled from "styled-components";
import Icon from "../../components/icon/icon";
import Draggable from "react-draggable";

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
  const nodeRef = React.useRef(null);
  return (
    <Draggable bounds="parent" nodeRef={nodeRef}>
      <UserBox ref={nodeRef}>
        <Icon
          iconTitle="trash-empty"
          size={16}
          iconColor="#fff"
          onClick={() => removeUser(data.id)}
        />
        <p>{data.name}</p>
      </UserBox>
    </Draggable>
  );
};

export default User;
