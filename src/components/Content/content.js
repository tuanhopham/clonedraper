import styled from 'styled-components';
import Academy from './academy/academy';
import Services from './services/services';
import Ventures from './ventures/ventures';

const Padding = styled.div`
   padding: 0 6%;
`;
const DiffBackground = styled.div`
   background: #f4f6f8;
   padding: 0 6%;
`;
function Content() {
   return (
      <div>
         <Ventures></Ventures>
         <Padding>
            <Academy></Academy>
         </Padding>
         <DiffBackground>
            <Services></Services>
         </DiffBackground>

         <div className="AboutUs"></div>
      </div>
   );
}

export default Content;
