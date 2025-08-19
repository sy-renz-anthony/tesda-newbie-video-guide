import logo from "./assets/TESDA-emblem-white.png";
import doc1 from "./assets/doc1.pdf";
import doc2 from "./assets/doc2.pdf";
import doc3 from "./assets/doc3.pdf";

function App() {
  
  

  return (
    <div className="background relative flex flex-col w-full min-h-screen top-0 left-0">
      <div className='header bg-blue-600 relative w-full h-25 top-0 left-0 flex flex-row items-center'>
        <img src={logo} className="relative h-20 w-auto mx-10"/>
        <h1 className="text-white text-2xl font-bold">TESDA T2MIS FEEDBACKING</h1>
      </div>
      <div className="content w-full h-auto  min-h-100 top-0 left-0 flex flex-grow items-center justify-center  bg-[url('./assets/background/vecteezy_abstract-white-and-gray-light-gradient-lines-background_6469230.jpg')] bg-cover bg-center">
        <ul className='text-gray-600 font-bold text-lg sm:text-4xl'>
          <li className="my-15 hover:text-orange-400">- <a
              href={doc1}
              target="_blank"
              rel="noopener noreferrer"
            >Feedbacking Guidelines</a></li>
          <li className="my-15 hover:text-orange-400">- <a
              href={doc2}
              target="_blank"
              rel="noopener noreferrer"
            >Letter of Request</a></li>
          <li className="my-15 hover:text-orange-400">- <a
              href={doc3}
              target="_blank"
              rel="noopener noreferrer"
            >RM's Step-by-step guide</a></li>
        </ul> 
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
