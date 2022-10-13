import styled from 'styled-components';
import pic01 from '~/assets/img/acdemy01.jpg';
import pic02 from '~/assets/img/acdemy02.jpg';
import pic03 from '~/assets/img/acdemy03.jpg';
import pic04 from '~/assets/img/acdemy04.jpg';
import pic05 from '~/assets/img/acdemyWork.jpg';
import Button from '~/components/Button/button';

const TextContent = styled.h1`
   width: 70%;
   margin: 130px 0 48px;
   font-style: normal;
   font-weight: 600;
   font-size: 90px;
   line-height: 90px;
   font-family: var(--body-fonts);
   color: #204370;
`;
const GridBox = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 4%;
`;
const ItemBox = styled.div`
   height: 264px;
   width: 100%;
   background: #f4f6f8;
   padding: 25px 20px 10px 40px;
   opacity: 0.7;
   &:hover {
      opacity: 1;
   }
`;
const FlexBoxSB = styled.div`
   display: flex;
   justify-content: space-between;
`;
const Icon = styled.img`
   margin-top: 15px;
   width: 55px;
   height: 55px;
`;
const Number = styled.h3`
   font-family: var(--body-fonts);
   font-style: normal;
   font-weight: 600;
   font-size: 66px;
   line-height: 66px;
   text-transform: uppercase;
   color: rgba(23, 41, 64, 0.1);
`;
const H3Text = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 22px;
   line-height: 26px;
   width: 200px;
   margin: 25px 20px 30px 15px;
   color: #232327;
`;
const GridTwoCol = styled.div`
   margin: 150px 0 50px;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
`;
const Left = styled.div`
   width: 100%;
`;
const Right = styled.div`
   width: 100%;
`;
const VenturesImg = styled.img`
   width: 100%;
   opacity: 0.8;
   &:hover {
      opacity: 1;
   }
`;
const SubContent = styled.p`
   margin-top: -20px;
   margin-bottom: 50px;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 26px;
   color: rgba(35, 35, 39, 0.8);
`;
function Academy() {
   return (
      <>
         <TextContent>How Den works</TextContent>
         <GridBox>
            <ItemBox>
               <FlexBoxSB>
                  <Icon src={pic01} alt={pic01} />
                  <Number>01</Number>
               </FlexBoxSB>
               <H3Text>Say hello and interact on the DEN Slack channel</H3Text>
            </ItemBox>
            <ItemBox>
               <FlexBoxSB>
                  <Icon src={pic02} alt={pic02} />
                  <Number>02</Number>
               </FlexBoxSB>
               <H3Text>Explore free high-quality on-demand learning content</H3Text>
            </ItemBox>
            <ItemBox>
               <FlexBoxSB>
                  <Icon src={pic03} alt={pic03} />
                  <Number>03</Number>
               </FlexBoxSB>
               <H3Text>Meet co-founders, advisors, partners, customers, and investors</H3Text>
            </ItemBox>
            <ItemBox>
               <FlexBoxSB>
                  <Icon src={pic04} alt={pic04} />
                  <Number>04</Number>
               </FlexBoxSB>
               <H3Text>Find opportunities in the global Draper ecosystem</H3Text>
            </ItemBox>
         </GridBox>
         <GridTwoCol>
            <Left>
               <TextContent>
                  But First...<br></br> you Have to Join
               </TextContent>
               <SubContent>What are you waiting for? Join DEN today.</SubContent>
               <Button primary>Join DEN</Button>
            </Left>

            <Right>
               <VenturesImg src={pic05} alt={pic05} />
            </Right>
         </GridTwoCol>
      </>
   );
}

export default Academy;
