import logo from "./assets/TESDA-emblem-white.png";
import vid from "./assets/vid.mp4";

function App() {
  


  return (
    <div className="background relative flex flex-col w-full min-h-screen top-0 left-0">
      <div className='header bg-blue-600 relative w-full h-25 top-0 left-0 flex flex-row items-center'>
        <img src={logo} className="relative h-20 w-auto mx-10"/>
        <h1 className="text-white text-2xl font-bold">TESDA Dumaguete Newbie Video Guide</h1>
      </div>
      <div className="content w-full h-auto  min-h-100 top-0 left-0 flex flex-grow items-center justify-center bg-[url('./assets/background/vecteezy_abstract-white-and-gray-light-gradient-lines-background_6469230.jpg')] bg-cover bg-center">
         <video
            className="w-full max-w-3xl h-full m-5 rounded-lg shadow-lg"
            controls
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
      </div>
      <div className='footer bg-gray-900 relative w-full h-20 bottom-0 left-0 text-white text-right text-sm px-5 py-3'>
        <p>Developed by: Jehan P. Mama &trade;</p>
        <p>OJT from NORSU - Siaton Campus</p>
        <p>SY: 2025-2026</p>
      </div>    
    </div>
  )
}

export default App
