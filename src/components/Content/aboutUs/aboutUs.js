import styled from 'styled-components';
import Button from '~/components/Button/button';
import pic01 from '~/assets/img/aboutus01.jpg';
import pic02 from '~/assets/img/aboutus02.jpg';
import pic03 from '~/assets/img/aboutus03.jpg';
import pic04 from '~/assets/img/aboutus04.jpg';
import pic05 from '~/assets/img/aboutus05.jpg';

const AboutUsSection = styled.div`
   @media (max-width: 430px) {
      padding-bottom: 150px;
   }
`;
const Padding = styled.div`
   padding: 0 15px 10px;
`;
const Header = styled.div`
   width: 100%;
   background-color: var(--primary);
   height: 240px;
   padding: 64px 0;
   text-align: center;
   @media (max-width: 430px) {
      padding: 14% 0;
   }
`;
const HeaderText = styled.h1`
   font-style: normal;
   font-weight: 500;
   font-size: 56px;
   line-height: 56px;
   letter-spacing: -0.015em;
   text-transform: uppercase;
   color: #ffffff;
   font-family: var(--body-fonts);
   @media (max-width: 430px) {
      font-size: 35px;
      line-height: 35px;
   }
`;
const GridThreeCol = styled.div`
   margin-top: 50px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2%;
   text-align: start;
   @media (max-width: 430px) {
      grid-template-columns: 1fr;
   }
`;
const TextContent = styled.h1`
   font-family: var(--body-fonts);
   font-style: normal;
   font-weight: 500;
   font-size: 90px;
   line-height: 90px;
   letter-spacing: -0.015em;
   text-transform: uppercase;
   color: var(--primary);
   @media (max-width: 430px) {
      font-size: 70px;
      line-height: 70px;
   }
`;
const SubText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 26px;
   margin-left: 20%;
   color: rgba(35, 35, 39, 0.8);
   @media (max-width: 430px) {
      margin: auto;
   }
`;
const Btn = styled.div`
   text-align: end;
`;
const Hr = styled.hr`
   margin: 45px 0 65px;
   border: none;
   height: 10px;
   background: #e9ecf1;
   opacity: 0.7;
   @media (max-width: 430px) {
      height: 2px;
   }
`;
const ItemBox = styled.div`
   width: 100%;
   &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   }
`;
const Img = styled.img`
   margin-bottom: 15px;
   width: 100%;
   object-fit: cover;
`;
const SubTextItem = styled.p`
   font-size: 16px;
   line-height: 22px;

   letter-spacing: 0.2em;
   text-transform: uppercase;
`;
const TextItem = styled.p`
   letter-spacing: -0.015em;
   color: #232327;
   font-family: var(--body-fonts);
   font-weight: 600;
   font-size: 30px;
   line-height: 30px;
   letter-spacing: 0.1em;
   text-transform: uppercase;
   margin: 15px 0;
`;
function AboutUs() {
   return (
      <AboutUsSection>
         <Header>
            <HeaderText>
               Draper Startup House is on a mission to enable <br></br>ONE million entrepreneurs worldwide by 2023
            </HeaderText>
         </Header>

         <GridThreeCol>
            <TextContent>upcoming events</TextContent>
            <SubText>Find the best offline and online events and training programs right here.</SubText>
            <Btn>
               <Button>See all upcoming events</Button>
            </Btn>
         </GridThreeCol>
         <Hr></Hr>
         <GridThreeCol>
            <ItemBox>
               <Img src={pic01} alt={pic01} />
               <Padding>
                  <SubTextItem>15 jan 2021</SubTextItem>
                  <TextItem>How to Test Ideas with No Money or Time</TextItem>
                  <Button orange min>
                     Register
                  </Button>
               </Padding>
            </ItemBox>
            <ItemBox>
               <Img src={pic02} alt={pic02} />
               <Padding>
                  <SubTextItem>08 jun 2021</SubTextItem>
                  <TextItem>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</TextItem>
                  <Button orange min>
                     Register
                  </Button>
               </Padding>
            </ItemBox>
            <ItemBox>
               <Img src={pic03} alt={pic03} />
               <Padding>
                  <SubTextItem>17 may 2021</SubTextItem>
                  <TextItem>Yoga – first cass for beginer – feel free to sign up here.</TextItem>
                  <Button orange min>
                     Register
                  </Button>
               </Padding>
            </ItemBox>
            <ItemBox>
               <Img src={pic04} alt={pic04} />
               <Padding>
                  <SubTextItem>15 jan 2021</SubTextItem>
                  <TextItem>How to Test Ideas with No Money or Time</TextItem>
                  <Button orange min>
                     Register
                  </Button>
               </Padding>
            </ItemBox>
            <ItemBox>
               <Img src={pic05} alt={pic05} />
               <Padding>
                  <SubTextItem>15 jan 2021</SubTextItem>
                  <TextItem>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</TextItem>
                  <Button orange min>
                     Register
                  </Button>
               </Padding>
            </ItemBox>
         </GridThreeCol>
      </AboutUsSection>
   );
}

export default AboutUs;
