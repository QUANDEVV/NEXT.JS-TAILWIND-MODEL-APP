import { useEffect, useState, useContext, useRef } from 'react'
import Image from 'next/image'

import images from '../assets'
import Banner from '../components/Banner'
import NFTCard from '../components/NFTCard'
import { useTheme } from 'next-themes';


const MyNFTs = () => {


  const [hideButtons, setHideButtons] = useState(false);

  const scrollRef = useRef(null);
  const parentRef = useRef(null);

  const { theme } = useTheme();

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // check if scrollRef container is overfilling its parentRef container
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) return setHideButtons(false);
    return setHideButtons(true);
  };

  // if window is resized
  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });


  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          // name="Your Daily Dose"
          childStyles="text-left mb-1"
          parentStyle="h-20 justify-center"
        />
        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter w-40 h-40 sm:w-36 sm:h-36 p-1 bg-nft-black-2 rounded-full">
            <Image src={images.puiyi} className="rounded-full object-cover" objectFit="cover" />
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl mt-6">ms_puiyi</p>
        </div>
      </div>




      <div className="relative flex-1 max-w-full flex mt-0" ref={parentRef}>
                <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
                  {[1,2,3,4,5,6,7].map((i) => (
                    <NFTCard
                      key={`creator-${i}`}
                      rank={i}
                      creatorImage={images[`creator${i}`]}
                    
                    />
                  ))}
                  {!hideButtons && (
                    <>
                      <div onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-28 cursor-pointer left-0">
                        <Image src={images.left} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                      </div>
                      <div onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-28 cursor-pointer right-0">
                        <Image src={images.right} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          




    
        

          
        
        
  )
}

export default MyNFTs
