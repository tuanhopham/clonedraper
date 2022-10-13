import styled from 'styled-components';

const Button = styled.button`
   /* Adapt the colors based on primary prop */
   background: ${(props) => (props.primary ? 'RGB(24, 45, 74)' : props.orange ? '#FFCC00' : '')};
   color: ${(props) => (props.primary ? 'white' : props.orange ? '#2A2A2A' : '')};
   padding: ${(props) => (props.min ? '9px 35px' : ' 18px 35px')};
   border: ${(props) => (props.boder ? '1px solid var(--primary)' : ' none')};
   border-radius: 25px;
   font-weight: 700;
   margin: auto;
   cursor: pointer;
   &:hover {
      opacity: 0.9;
   }
`;
export default Button;
