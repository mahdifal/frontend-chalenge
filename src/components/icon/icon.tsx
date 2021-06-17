import styled from "styled-components";

const StyledIcon = styled.span<{ size: number }>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

interface IconProps {
  iconTitle: string;
  size: number;
  iconColor: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ iconTitle, size, iconColor, onClick }) => {
  return (
    <StyledIcon
      className={`icon-${iconTitle}`}
      size={size}
      color={iconColor}
      onClick={onClick}
    />
  );
};

export default Icon;
