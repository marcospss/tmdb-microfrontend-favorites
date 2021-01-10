import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  border: none;
  &.add {
    background-color: #0008ff;
  }
  &.remove {
    background-color: #ff0000;
  }
`;

export default Button;
