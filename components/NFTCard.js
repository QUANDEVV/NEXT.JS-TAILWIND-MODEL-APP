import { useContext } from 'react';
import Image from 'next/image';

import images from '../assets';


const NFTCard = ({ creatorImage, creatorName }) => {
 

  return (
    <div className="flex justify-center sm:px-2 p-2">
    <div className="w-full minmd:w-4/5">
  
    <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
    <div className="my-4 flex justify-center">
      <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
        <Image
          src={creatorImage }
          layout="fill"
          objectFit="cover"
          alt="creator"
          className="rounded-2xl"
      
        />
        
        <div className="absolute w-4 h-4 minlg:w-7 minlg:h-7 bottom-0 -right-0">
          <Image
            src={images.tick}
            layout="fill"
            objectFit="contain"
            alt="tick"
          />
          </div>
        </div>
      </div>
      </div>
      </div>

      </div>
      
    


  );
};

export default NFTCard;