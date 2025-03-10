import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import TravelScreen from './screens/ThirdScreen';
import Timeline from './components/steps/Steps';
import AboutUs from './components/me/Me';
import OurServices from './components/ourservices/OurServices';
import ByMe from './components/ByMe/ByMe';
import BackgroundGlass from './components/If/If';

function App() {
  return <>
  {/* <NavBarNew/> */}
  <FirstScreen/>
  <SecondScreen/>

  <Timeline/>
  <AboutUs/>

  <OurServices/>
  <BackgroundGlass/>
  <ByMe/>
  </>
}

export default App;
