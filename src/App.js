import logo from './logo.svg';
import './App.css';
import NavBarNew from "./components/CourseNav/NavBarNew"
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import TravelScreen from './screens/ThirdScreen';
import Timeline from './components/steps/Steps';
import AboutUs from './components/me/Me';
import OurServices from './components/ourservices/OurServices';
import ByMe from './components/ByMe/ByMe';
import BackgroundGlass from './components/If/If';
import FifthScreen from './screens/FifthScreen';
import ForthScreen from './screens/ForthScreen';
import NewCopy from './screens/ForthScreen copy';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>

  <Timeline/>
  <ForthScreen/>
  <AboutUs/>
<NewCopy/>
  <OurServices/>

  <BackgroundGlass/>
  <FifthScreen/>
  <ByMe/>
  </>
}

export default App;
