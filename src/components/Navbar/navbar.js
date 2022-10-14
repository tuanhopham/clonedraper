import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import logo from '~/assets/img/logo.jpg';
import menu from '~/assets/img/menu.jpg';
import Button from '../Button/button';
import { useState } from 'react';

const height = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const Header = styled.nav`
   display: flex;

   text-align: center;
   height: 90px;
   width: 100%;
   background: var(--primary);
   padding: 0 30px;
   @media (max-width: 430px) {
      justify-content: space-between;
      height: 80px;
      padding: 0 5px 0 0;
   }
`;
const Box = styled.div`
   display: flex;
   justify-content: space-between;
   text-align: center;
   width: 100%;
   @media (max-width: 430px) {
      display: none;
   }
`;
const Logo = styled.img`
   display: inline-flex;
   height: 100%;
   cursor: pointer;
   object-fit: contain;
   @media (max-width: 430px) {
      height: 100%;
      width: 60%;
      justify-content: center;
   }
`;
const Menu = styled.img`
   display: none;
   height: 100%;
   color: white;
   @media (max-width: 430px) {
      display: inline-flex;
   }
`;
const ListItems = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 75%;
`;
const ListItemsExtend = styled.ul`
   display: none;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: ${height} 35s;
   background: var(--primary);

   @media (max-width: 430px) {
      display: ${(props) => (props.open ? 'flex' : 'none')};
   }
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
const ItemExtend = styled.li`
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
   @media (max-width: 430px) {
      text-align: center;
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
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <>
         <Header>
            <Logo src={logo} alt={logo} />
            <Box>
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

               <Button>Join our community</Button>
            </Box>
            <Menu
               onClick={() => {
                  setMenuOpen((curr) => !curr);
               }}
               src={menu}
               alt={menu}
            />
         </Header>
         <ListItemsExtend open={menuOpen}>
            <ItemExtend>
               <Link>CITIES</Link>
               <BoderBox></BoderBox>
            </ItemExtend>
            <ItemExtend>
               <Link>VENTURES</Link>
               <BoderBox></BoderBox>
            </ItemExtend>
            <ItemExtend>
               <Link>ACADEMY</Link>
               <BoderBox></BoderBox>
            </ItemExtend>
            <ItemExtend>
               <Link>SERVICES</Link>
               <BoderBox></BoderBox>
            </ItemExtend>
            <ItemExtend>
               <Link>ACCELERATOR</Link>
               <BoderBox></BoderBox>
            </ItemExtend>
            <ItemExtend>
               <Link>ABOUT</Link>
               <BoderBox></BoderBox>
            </ItemExtend>
         </ListItemsExtend>
      </>
   );
}

export default NavBar;
