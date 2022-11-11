import {loader} from '../assets'
import Lottie from 'react-lottie';
import animationData from '../assets/14467-music.json';

const Loader = ({title}) => {

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
      }
  };

  return(
    <div className='w-full flex justify-center items-center flex-col'>
      {/* <img src={loader} alt="loader" className='w-32 h-32 object-contain'/> */}
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
      <h2 className='font-bold text-xl text-white mt-2'>{title || "Loading..."}</h2>
  </div>
  )
};

export default Loader;
