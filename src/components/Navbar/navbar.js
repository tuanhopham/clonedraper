import React from 'react';
import styled from 'styled-components';
import logo from '~/assets/img/logo.jpg';
import Button from '../Button/button';

const Header = styled.nav`
   display: flex;
   justify-content: space-between;
   text-align: center;
   height: 90px;
   width: 100%;
   background: var(--primary);
   padding: 0 30px;
`;
const Box = styled.div`
   display: flex;
   justify-content: center;
   text-align: center;
`;
const Logo = styled.img`
   display: inline-flex;
   height: 100%;
`;
const ListItems = styled.ul`
   display: flex;
   width: 75%;
`;
const Item = styled.li`
   display: block;
   font-size: 12px;
   position: relative;
   padding: 30px 32px;
   width: 100%;
   opacity: 0.7;
   cursor: pointer;
   &:hover {
      opacity: 1;
   }
`;
const BoderBox = styled.div`
   border-left: 2px solid #ffff;
   opacity: 0.15;
   position: absolute;
   left: 0;
   top: 40%;
   bottom: 40%;
`;
const Link = styled.a`
   color: #fff;
   text-decoration: none;
`;
function NavBar() {
   return (
      <Header>
         <Box>
            <Logo src={logo} alt={logo} />

            <ListItems>
               <Item>
                  <Link>CITIES</Link>
                  <BoderBox></BoderBox>
               </Item>
               <Item>
                  <Link>VENTURES</Link>
                  <BoderBox></BoderBox>
               </Item>
               <Item>
                  <Link>ACADEMY</Link>
                  <BoderBox></BoderBox>
               </Item>
               <Item>
                  <Link>SERVICES</Link>
                  <BoderBox></BoderBox>
               </Item>
               <Item>
                  <Link>ACCELERATOR</Link>
                  <BoderBox></BoderBox>
               </Item>
               <Item>
                  <Link>ABOUT</Link>
                  <BoderBox></BoderBox>
               </Item>
            </ListItems>
         </Box>
         <Box>
            <Button>Join our community</Button>
         </Box>
      </Header>
   );
}

export default NavBar;
