import styled from 'styled-components';
import pic01 from '~/assets/img/services01.jpg';
import pic02 from '~/assets/img/services02.jpg';
import pic03 from '~/assets/img/services03.jpg';
import pic04 from '~/assets/img/services04.jpg';
import pic05 from '~/assets/img/services05.jpg';
import icon from '~/assets/img/servicesicon.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const ServiecsSection = styled.div`
   padding-bottom: 150px;
   @media (max-width: 430px) {
      padding-bottom: 50px;
   }
`;
const TextContent = styled.h1`
   width: 40%;
   padding: 130px 0 100px;
   font-style: normal;
   font-weight: 600;
   font-size: 90px;
   line-height: 90px;
   font-family: var(--body-fonts);
   color: #204370;
   @media (max-width: 430px) {
      padding: 50px 0 30px;

      width: 100%;
      font-size: 70px;
      line-height: 70px;
   }
`;
const BoxItem = styled.div`
   width: 390px;
   height: 390px;
   background: #ffffff;
   padding: 40px 30px;
   position: relative;
   @media (max-width: 430px) {
      height: 450px;
      padding: 40px 15px;
   }
`;

const Img = styled.img`
   position: absolute;
   width: 100px;
   height: 136px;
   object-fit: cover;
   left: 10%;
   top: -8%;
   z-index: 30;
   @media (max-width: 430px) {
      width: 80px;
      height: 110px;
   }
`;
const Icon = styled.img`
   width: 25px;
   height: auto;
   object-fit: cover;
   position: absolute;
   left: 40%;
   top: -3%;
`;
const LeftHeader = styled.div`
   float: right;
   width: 190px;
   text-align: start;
   @media (max-width: 430px) {
      width: 170px;
   }
   @media (max-width: 350px) {
      width: 140px;
   }
`;
const TextHeader = styled.p`
   font-weight: 400;
   font-size: 14px;
   line-height: 22px;
   color: #232327;
   margin-top: 15px;
   opacity: 0.67;
   @media (max-width: 430px) {
      margin-top: 0;
      font-size: 12px;
   }
`;
const H2 = styled.h2`
   @media (max-width: 430px) {
      font-size: 20px;
   }
`;
const PContent = styled.p`
   margin-top: 100px;
   font-weight: 400;
   font-size: 16px;
   line-height: 26px;
   color: rgba(35, 35, 39, 0.9);
`;
const LearnMore = styled.p`
   transform: translateY(10px);
   width: 87px;
   font-weight: 700;
   font-size: 16px;
   line-height: 26px;
   border-bottom: 1px solid var(--primary);
   cursor: pointer;
   color: #204370;
`;
function Services() {
   const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true,
            },
         },
      ],
   };
   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return <div className={className} style={{ ...style }} onClick={onClick} />;
   }

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return <div className={className} style={{ ...style }} onClick={onClick} />;
   }
   return (
      <ServiecsSection>
         <TextContent>What PEOPLE ARE SAYING ABOUT DEN</TextContent>
         <Slider {...settings}>
            <BoxItem>
               <Img src={pic01} alt={pic01} />
               <LeftHeader>
                  <Icon src={icon} alt={icon} />
                  <H2>SimonJD</H2> <TextHeader>Co-Founder and CEO, Travelio</TextHeader>
               </LeftHeader>

               <PContent>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut
                  venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
                  <br></br>
                  <br></br> Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.
               </PContent>
               <LearnMore>Learn More</LearnMore>
            </BoxItem>
            <BoxItem>
               <Img src={pic02} alt={pic02} />
               <LeftHeader>
                  <Icon src={icon} alt={icon} />
                  <H2>Jane Cooper</H2> <TextHeader>Co-Founder and CEO, Travelio</TextHeader>
               </LeftHeader>

               <PContent>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut
                  venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
                  <br></br>
                  <br></br> Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.
               </PContent>
               <LearnMore>Learn More</LearnMore>
            </BoxItem>
            <BoxItem>
               <Img src={pic03} alt={pic03} />
               <LeftHeader>
                  <Icon src={icon} alt={icon} />
                  <H2>Albert Flores</H2> <TextHeader>Marketing Coordinator, Gillette </TextHeader>
               </LeftHeader>

               <PContent>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut
                  venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
                  <br></br>
                  <br></br> Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.
               </PContent>
               <LearnMore>Learn More</LearnMore>
            </BoxItem>
            <BoxItem>
               <Img src={pic04} alt={pic04} />
               <LeftHeader>
                  <Icon src={icon} alt={icon} />
                  <H2>Lemon Tree</H2> <TextHeader>Co-Founder and CEO, Travelio</TextHeader>
               </LeftHeader>

               <PContent>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut
                  venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
                  <br></br>
                  <br></br> Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.
               </PContent>
               <LearnMore>Learn More</LearnMore>
            </BoxItem>
            <BoxItem>
               <Img src={pic05} alt={pic05} />
               <LeftHeader>
                  <Icon src={icon} alt={icon} />
                  <H2>King Thor</H2> <TextHeader>Co-Founder and CEO, Travelio</TextHeader>
               </LeftHeader>

               <PContent>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut
                  venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
                  <br></br>
                  <br></br> Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.
               </PContent>
               <LearnMore>Learn More</LearnMore>
            </BoxItem>
         </Slider>
      </ServiecsSection>
   );
}

export default Services;
