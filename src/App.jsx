import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPages from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
// import AdmissionPage from "./pages/AdmissionPage
import ChatbotComponent from "./components/Chatbot/ChatbotComponent"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperinfoPopup"
import { useState } from "react"


const App = () => {
 const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
   <>
   <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aditya Adinath Kumbhar"
          studentPhotoUrl="/images/aak.jpg" 
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPages/>}/>
      <Route path="/courses" element={<CoursesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      {/* <Route path="/admission" element={<AdmissionPage/>}/> */}
    </Routes>
    <ChatbotComponent/>
    <div>
     
    </div>
   </Router>
   </>
  )
}

export default App;