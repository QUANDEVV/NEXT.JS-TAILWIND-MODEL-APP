import { useEffect, useState, useRef, useContext } from 'react';
import CreatorCard from '../components/CreatorCard'
import images from '../assets';
import Image from 'next/image'
import { useTheme } from 'next-themes';
import NFTCard from '../components/NFTCard';
import Link from 'next/link'



const Home = () => {
  const { theme } = useTheme();

  const [hideButtons, setHideButtons] = useState(false);


  const scrollRef = useRef(null);

  const parentRef = useRef(null);

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


  return(
  <div className="flex justify-center sm:px-2 p-2">
      <div className="w-full minmd:w-4/5">
    
      <div>
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Top Models</h1>


        <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
        <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>


        <Link  href='klo'>
<div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
      <div className="my-4 flex justify-center">
        <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
          <Image
            src={images.puiyi }
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
</Link>



<Link  href='klo'>
<div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
      <div className="my-4 flex justify-center">
        <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
          <Image
            src={images.madeli }
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
</Link>

<Link  href='klo'>
<div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
      <div className="my-4 flex justify-center">
        <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
          <Image
            src={images.ivanka }
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
</Link>


<Link  href='klo'>
<div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
      <div className="my-4 flex justify-center">
        <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
          <Image
            src={images.kocha}
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
</Link>



<Link  href='klo'>
<div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
      <div className="my-4 flex justify-center">
        <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
          <Image
            src={images.christin }
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
</Link>
   



<Link  href='klo'>
<div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-2xl flex flex-col p-2 m-4">
      <div className="my-4 flex justify-center">
        <div className="relative w-44 h-44 minlg:w-28 minlg:h-28">
          <Image
            src={images.lenke }
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
</Link>

  
       
        {!hideButtons && (
                    <>
                      <div onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0">
                        <Image src={images.left} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                      </div>
                      <div onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0">
                        <Image src={images.right} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>



</div>


      </div>
    


 




          
            
);
}

export default Home;
