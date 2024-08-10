import styled from 'styled-components';
import CoverVideo from '../CoverVideo';
import Logo from '../Logo';
import Header from './Header';
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <SectionWrapper id="home">
      
      
      
      <CoverVideo />
    </SectionWrapper>
  );
};

export default Home;