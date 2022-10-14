import styled from 'styled-components';
import Button from '../Button/button';
import logo from '~/assets/img/footerlogo.jpg';

const Padding = styled.div`
   padding: 0 40px 0 120px;
   @media (max-width: 430px) {
      padding: 30px 0;
   }
`;
const BannerBox = styled.div`
   bottom: 0;
   width: 100%;
   background-color: var(--primary);
   padding: 95px 25%;
   height: 377px;
   text-align: center;
   margin: 100px 0;
   @media (max-width: 430px) {
      padding: 50px 12px;
   }
`;
const HeaderText = styled.h1`
   display: block;
   margin-bottom: 30px;
   font-style: normal;
   font-weight: 500;
   font-size: 56px;
   line-height: 56px;
   letter-spacing: -0.015em;
   text-transform: uppercase;
   color: #ffffff;
   font-family: var(--body-fonts);
   text-align: center;
   @media (max-width: 430px) {
      font-size: 46px;
      line-height: 46px;
   }
`;
const LayoutGrid = styled.div`
   display: grid;
   grid-template-columns: 10% 90%;
   @media (max-width: 430px) {
      grid-template-columns: 1fr;
      text-align: center;
   }
`;
const Logo = styled.img`
   width: 64px;
   margin: 0 auto;
`;

const Grid27 = styled.div`
   display: grid;
   grid-template-columns: 20% 80%;
   @media (max-width: 430px) {
      grid-template-columns: 1fr;
   }
`;
const Grid55 = styled.div`
   display: grid;
   grid-template-columns: 50% 50%;
   @media (max-width: 430px) {
      grid-template-columns: 1fr;
   }
`;
const GridThreeCol = styled.div`
   margin-top: 25px;
   display: grid;
   column-gap: 15px;
   row-gap: 10px;
   grid-template-columns: repeat(3, 1fr);
   @media (max-width: 430px) {
      grid-template-columns: 1fr 1fr;
      padding-bottom: 15px;
   }
`;
const GridFiveCol = styled.div`
   margin-top: 25px;
   display: grid;
   column-gap: 15px;
   row-gap: 10px;
   grid-template-columns: repeat(5, 1fr);
   @media (max-width: 430px) {
      grid-template-columns: 1fr 1fr;
   }
`;
const Text = styled.p`
   margin: 0 0 8px;
   font-size: 16px;
   line-height: 26px;
   color: rgba(23, 41, 64, 0.9);
   cursor: pointer;
`;
const LargeText = styled.p`
   font-size: 25px;
   line-height: 26px;
   color: #172940;
`;
const BigText = styled.h3`
   font-size: 30px;
   line-height: 30px;
   color: #172940;
   font-family: var(--body-fonts);

   letter-spacing: -0.015em;
   text-transform: uppercase;
`;
const Hr = styled.hr`
   margin: 20px 0;
   width: ${(props) => (props.min ? '50px' : ' 90%')};
   @media (max-width: 430px) {
      margin: 20px auto;
   }
`;
const Link = styled.a`
   text-decoration-line: underline;
   color: #4c8fcc;
   margin: 0 0 8px;
   font-size: 16px;
   line-height: 26px;
   cursor: pointer;
`;
function Footer() {
   return (
      <>
         <BannerBox>
            <HeaderText>WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND EMPOWERED</HeaderText>
            <Button orange>Join DEN</Button>
         </BannerBox>

         <LayoutGrid>
            <Logo src={logo} alt={logo} />
            <div>
               <Grid27>
                  <div>
                     <Text>We connect, inspire, and empower the world’s entrepreneurs.</Text>
                     <Hr min></Hr>
                     <LargeText>USA Headquarters</LargeText>
                     <Text>612 East 6th Street Austin, TX 78701 USA</Text>
                     <Link>austin@draperstartuphouse.com</Link>
                     <br></br>
                     <br></br>
                     <LargeText>International Headquarters</LargeText>
                     <Text>39 Ann Siang Road Singapore 069716</Text>
                     <Link>hello@draperstartuphouse.com</Link>
                  </div>
                  <Padding>
                     <BigText>What We Do</BigText>
                     <Grid55>
                        <GridThreeCol>
                           <Text>Community - DEN</Text>
                           <Text>Ventures</Text>
                           <Text>Academy</Text>
                           <Text>PartnerShips</Text>
                           <Text>Services</Text>
                           <Text>Location Partner</Text>
                        </GridThreeCol>
                        <Button primary>Join our community</Button>
                     </Grid55>
                     <Hr></Hr>
                     <BigText>HOW FAR DO YOU WANT TO GO TODAY?</BigText>
                     <GridFiveCol>
                        <Text>Bali</Text>
                        <Text>Bangalore</Text>
                        <Text>Buenos Aires</Text>
                        <Text>Singapore</Text>
                        <Text>Lisbon</Text>
                        <Text>Canary Islands</Text>
                        <Text>Chiang Mai</Text>
                        <Text>Da Nang Aires</Text>
                        <Text>Valencia</Text>
                        <Text>Manila</Text>
                        <Text>Penang</Text>
                        <Text>Canary Islands</Text>
                        <Text>Valencia</Text>
                        <Text>Da Nang Aires</Text>
                        <Text>Bangalore</Text>
                        <Text>Buenos Aires</Text>
                        <Text>Singapore</Text>
                        <Text>Lisbon</Text>
                        <Text>Canary Islands</Text>
                        <Text>Chiang Mai</Text>
                        <Text>Da Nang Aires</Text>
                     </GridFiveCol>
                  </Padding>
               </Grid27>
               <Hr></Hr>
               <GridThreeCol>
                  <Text>Copyright © Draper Startup House 2021</Text>
                  <Text>Copyright © Draper Startup House 2021</Text>
                  <Text>Copyright © Draper Startup House 2021</Text>
               </GridThreeCol>
            </div>
         </LayoutGrid>
      </>
   );
}

export default Footer;
