import React from 'react';
import styled from 'styled-components';
import banner from '~/assets/img/banner.jpg';
import bannerLogo from '~/assets/img/bannerLogo.jpg';
import Button from '../Button/button';

const BannerBox = styled.div`
   width: 100%;
   height: 700px;
   position: relative;
`;
const BannerImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;
const BannerContent = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   text-align: center;
   transform: translate(-50%, -50%);
   color: #fff;
`;
const BannerLogo = styled.img`
   height: 73px;
`;
const TextContent = styled.h1`
   font-weight: 500;
   font-size: 56px;
   line-height: 56px;
   width: 450px;
   margin: 25px auto;
   text-transform: uppercase;
   font-family: var(--body-fonts);
   @media (max-width: 430px) {
      width: 100%;
      margin: 0;
      font-size: 50px;
      line-height: 50px;
   }
`;
const SubContent = styled.p`
   width: 346px;
   font-weight: 700;
   font-size: 16px;
   line-height: 26px;
   margin: 0 auto 30px;
   @media (max-width: 430px) {
      font-weight: 400;
      width: 320px;
   }
`;
function Banner() {
   return (
      <BannerBox>
         <BannerImage src={banner} alt={banner} />
         <BannerContent>
            <BannerLogo src={bannerLogo} alt={bannerLogo} />
            <TextContent>GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</TextContent>
            <SubContent>
               Get all the support and education you need to achieve full potential as an entrepreneur.
            </SubContent>
            <Button primary>Join DEN</Button>
         </BannerContent>
      </BannerBox>
   );
}

export default Banner;
