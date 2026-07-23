import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import FirstPage from "./components/firstpage/FirstPage";
import SecondPage from "./components/secondpage/SecondPage";
import ThirdPage from "./components/thirdpage/ThirdPage";
import FourthPage from "./components/fourthpage/FourthPage";
import FifthPage from "./components/fifthpage/FifthPage";
import SixthPage from "./components/sixthpage/SixthPage";
import SeventhPage from "./components/seventhpage/SeventhPage";
import EighthPage from "./components/eighthpage/EighthPage";
import NinthPage from "./components/ninthpage/NinthPage";
import TenthPage from "./components/tenthpage/TenthPage";
import EleventhPage from "./components/eleventhpage/EleventhPage";
import Footer from "./components/footer/Footer";


export default function App(){
  return (
    <BrowserRouter>
      <Header /> 
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <NinthPage />
      <TenthPage />
      <EleventhPage />
      <Footer />
    </BrowserRouter>
    
  )
}