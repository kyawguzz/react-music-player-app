import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate = useNavigate();
  
  return(
    <div 
      className="flex flex-col xl:w-[20%] lg:w-[20%] md:w-[20%] w-[100px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() =>navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img 
        alt="artist" 
        src={track?.images?.coverart}
        className="w-full rounded-lg  "
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
