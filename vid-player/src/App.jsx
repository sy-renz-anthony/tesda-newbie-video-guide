import logo from "./assets/TESDA-emblem-white.png";
import doc2 from "./assets/ANNEX.pdf";
import doc1 from "./assets/FEEDBACK CATEGORIES and REQUIREMENTS.pdf";
import doc3 from "./assets/feedback_guide.pdf";

import Carousel from './Carousel';

import { FaRegDotCircle } from "react-icons/fa";

function App() {
  
  return (
    <div className="background relative flex flex-col w-full min-h-screen top-0 left-0">
      <div className='header bg-blue-600 relative w-full h-25 top-0 left-0 flex flex-row items-center'>
        <img src={logo} className="relative h-20 w-auto mx-10"/>
        <h1 className="text-white text-2xl font-bold">TESDA T2MIS FEEDBACKING</h1>
      </div>
      <div className="content w-full h-auto  min-h-100 top-0 left-0 flex flex-grow bg-[url('./assets/background/vecteezy_abstract-white-and-gray-light-gradient-lines-background_6469230.jpg')] bg-cover bg-center">
        
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
          <Carousel />
          <div className="w-full h-full text-center mx-10">
            <ul className='w-full text-gray-600 font-bold text-lg sm:text-4xl my-5'>
              <li className="my-15 hover:text-orange-400 flex flex-row"><FaRegDotCircle className="w-7 h-auto my-auto hover:hidden block"/>&nbsp;<a
                  href={doc1}
                  target="_blank"
                  rel="noopener noreferrer"
                >Feedbacking Guidelines</a></li>
              <li className="my-15 hover:text-orange-400 flex flex-row"><FaRegDotCircle className="w-7 h-auto my-auto"/>&nbsp;<a
                  href={doc2}
                  target="_blank"
                  rel="noopener noreferrer"
                >Letter of Request</a></li>
              <li className="my-15 hover:text-orange-400 flex flex-row"><FaRegDotCircle className="w-7 h-auto my-auto"/>&nbsp;<a
                  href={doc3}
                  target="_blank"
                  rel="noopener noreferrer"
                >Step-by-step guide(T2MIS)</a></li>
            </ul>
          </div>
          
        </div>
         
      </div>
      <div className='bg-gray-900 relative w-full h-30 bottom-0 left-0  px-5 py-10 justify-items-end'>
        <div className="w-fit h-full text-white text-left text-sm">
          <p>Developed by: </p>
          <p>Kenneth John Baliquig & Jehan P. Mama &trade;</p>
        </div>
        
      </div>    
    </div>
  )
}

export default App
