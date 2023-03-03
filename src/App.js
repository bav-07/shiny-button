import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";
import WebcamOld from "./WebcamOld.js"


function App() {

  const videoConstraints = {
    width: 300,
    height: 100
  }

  return (
    <div>
    <button className={`group h-fit z-50 active:scale-[95%] transition-all duration-300 border-slate-300 border-4 bg-slate-500 w-fit absolute rounded-full top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]`}>
      <p className='[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] absolute drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-tr from-slate-300 to-slate-400  shadow-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl z-10'>Button</p>
      <Webcam
        videoConstraints={videoConstraints}
        audio={false}
        className='shadow-2xl group-active:shadow-lg saturate-[50%] shadow-black blur-[4px] active:shadow-xl transition-all duration-300 rounded-full'   
      />
      {/* <WebcamOld/> */}
    </button>
    </div>
  );
}

export default App;
