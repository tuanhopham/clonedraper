import './App.css';
import Banner from './components/Banner/banner';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';
import NavBar from './components/Navbar/navbar';

function App() {
   return (
      <>
         <NavBar></NavBar>
         <Banner></Banner>
         <Content></Content>
         <Footer></Footer>
      </>
   );
}

export default App;
