import styled from 'styled-components';
import pic01 from '~/assets/img/ventures01.jpg';
import pic02 from '~/assets/img/ventures02.jpg';
import pic03 from '~/assets/img/ventures03.jpg';
import Button from '~/components/Button/button';

const VenturesSection = styled.div`
   background: #f4f6f8;
   padding: 130px 0 100px;
`;
const TextContent = styled.h1`
   width: 70%;
   margin: 0 auto 130px;
   font-style: normal;
   font-weight: 500;
   font-size: 90px;
   line-height: 90px;
   font-family: var(--body-fonts);
   color: #204370;
   text-align: center;
`;
const BoxGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   width: 100%;
   row-gap: 150px;
`;
const ShadowImage = styled.div`
   width: 90%;
   height: 426px;
   position: relative;
   background: ${(props) => (props.green ? '#5CC68F' : props.yellow ? '#FFCC00' : '#4c8fcc')};
   left: ${(props) => (props.right ? '10%' : ' 0')};
`;
const VenturesImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   position: absolute;
   transform: ${(props) => (props.right ? 'translate(-7%, -10%)' : 'translate(7%, -10%)')};
`;
const VenturesContent = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   width: 444px;
`;
const H2Text = styled.h2`
   font-family: var(--body-fonts);
   font-style: normal;
   font-weight: 600;
   font-size: 36px;
   line-height: 36px;
   margin-top: -30px;
   letter-spacing: -0.015em;
   text-transform: uppercase;
`;
const P2Text = styled.p`
   font-size: 18px;
   line-height: 26px;
   color: rgba(35, 35, 39, 0.7);
   padding: 24px 0;
`;
const ListText = styled.ul`
   padding-left: 30px;
`;
const TextItem = styled.li`
   margin-bottom: 16px;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 22px;
   color: #232327;
   &::marker {
      color: #a6b4c6;
      font-size: 1rem;
   }
`;
const BoxButton = styled.div`
   margin: 100px auto 0;
   text-align: center;
`;
function Ventures() {
   return (
      <VenturesSection>
         <TextContent>Join the Draper entrepreneur network</TextContent>
         <BoxGrid>
            {/* -----------row1--------- */}
            <ShadowImage>
               <VenturesImage src={pic01} alt={pic01} />
            </ShadowImage>

            <VenturesContent>
               <H2Text>Connect with a global network</H2Text>
               <P2Text>
                  DEN membership connects you with inspiring people and ideas to empower your entrepreneurial or
                  fundraising journey.
               </P2Text>
               <ListText>
                  <TextItem>Discover useful resources, software credits, and perks</TextItem>
                  <TextItem>Find the best events and training programs</TextItem>
                  <TextItem>Meet co-founders, advisors, and partners</TextItem>
                  <TextItem>Search and discover trending topics and insights</TextItem>
               </ListText>
            </VenturesContent>
            {/* -----------row2--------- */}
            <VenturesContent>
               <H2Text>GET INSPIRed By PEERS AND EXPERTS</H2Text>
               <P2Text>
                  Becoming a successful entrepreneur means surrounding yourself with an inspiring ecosystem like DEN.
               </P2Text>
               <ListText>
                  <TextItem>Get constructive feedback from industry experts</TextItem>
                  <TextItem>Read startup stories, successes, and failures</TextItem>
                  <TextItem>Get help on investor relations topics like term sheets</TextItem>
                  <TextItem>Find best practices and professional templates</TextItem>
               </ListText>
            </VenturesContent>
            <ShadowImage green right>
               <VenturesImage right src={pic02} alt={pic02} />
            </ShadowImage>
            {/* -----------row3--------- */}
            <ShadowImage yellow>
               <VenturesImage src={pic03} alt={pic03} />
            </ShadowImage>
            <VenturesContent>
               <H2Text>ENTREPRENEURS JOIN THE DEN COMMUNITY</H2Text>
               <P2Text>
                  Our members and their supporters include: founders and teams; mentors and advisors; remote workers and
                  service providers; and angel investors and venture capitalists from around the world.
               </P2Text>
               <P2Text>As a DEN member, you can build a market-ready company much faster than ever before.</P2Text>
            </VenturesContent>
         </BoxGrid>
         <BoxButton>
            <Button primary>Join DEN</Button>
         </BoxButton>
      </VenturesSection>
   );
}

export default Ventures;
