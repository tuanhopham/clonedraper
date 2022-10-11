import styled from 'styled-components';

const Button = styled.button`
   /* Adapt the colors based on primary prop */
   background: ${(props) => (props.primary ? 'RGB(24, 45, 74)' : 'white')};
   color: ${(props) => (props.primary ? 'white' : '#2A2A2A')};
   background: ${(props) => (props.orange ? '#FFCC00' : '')};
   color: ${(props) => (props.orange ? '#2A2A2A' : '')};
   border: none;
   border-radius: 25px;
   padding: ${(props) => (props.min ? '9px 35px' : ' 15px 35px')};

   font-weight: 700;
   margin: auto;
`;
export default Button;
