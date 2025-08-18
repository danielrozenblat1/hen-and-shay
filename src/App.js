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
import Places from './components/places/Places';
import PrivacyPolicy from './components/privacy/Privacy';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
<Places/>
  <Timeline/>
  
  <ForthScreen/>
  <AboutUs/>
<NewCopy/>
  <OurServices/>

  <BackgroundGlass/>
  <FifthScreen/>
  <PrivacyPolicy 
  ownerName="חן ושי ימיני" 
  email="henyamini@gmail.com" 
  phone="+972 50-849-9883" 
  domain="https://snh-travel.co.il/" 
/>
  <ByMe/>
  </>
}

export default App;
