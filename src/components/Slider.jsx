'use client'
import { useState , useRef} from 'react';
import { allRetards } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Slider = () => {

  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);



  useGSAP(()=>{
    gsap.fromTo('#title' , {
      opacity:0,
    },{
      opacity:1,
      duration:1,
    })

    gsap.fromTo('.retard img',{
      opacity:0,
      xPercent:-100,
    },{
      opacity:1,
      xPercent:0,
      duration:1,
      ease:'power1.inOut'
    })

    gsap.fromTo('.detail h2' , {
      yPercent:100,
      opacity:0,
    },{
      yPercent:0,
      opacity:1,
      duration:1,
      ease:'power1.inOut',
    })

    gsap.fromTo(".detail p",{
      opacity:0,
      yPercent:100,
    },{
      opacity:1,
      yPercent:0,
      duration:1,
      ease:'power1.inOut'
    })
  },[currentIndex])



  //nav state
  const totalRetards = allRetards.length
  const goToSlide = (index)=>{
    const newIndex = (index + totalRetards) % totalRetards
    setCurrentIndex(newIndex)
  }



  //content
  const getRetardAt = (indexOffset)=>{
    return allRetards[(currentIndex + indexOffset + totalRetards) % totalRetards]
  }

  const currentRetard = getRetardAt(0)
  const prevRetard = getRetardAt(-1)
  const nextRetard = getRetardAt(+1)




  return (
    <section id='menu' aria-labelledby='menu-heading'>

        

        <nav className='retard-tabs'
        aria-label='Cocktail Navigation'
        >

            {allRetards.map((retard,index)=>{
              const isActive = index === currentIndex;

              return(
                <button 
                key={retard.id}
                className={`relative group flex items-center justify-center pb-2 pt-2 cursor-pointer transition-colors ${isActive? 'text-white' : "text-white/50"}`}
                onClick={()=>goToSlide(index)}
                >
                <span
                className={`absolute right-0 top-0 h-[1px] bg-white-0 transition-all duration-300
                ${isActive ? "w-full bg-white-100" : "w-0"}`}
                ></span>

                  {retard.name}

                <span
                className={`absolute left-0 bottom-0 h-[1px] bg-white-0 transition-all duration-300
                ${isActive ? "w-full bg-white-100" : "w-0 group-hover:w-full bg-white/50"}`}
                ></span>
                </button>
              )
            })}
        </nav>

          

        <div className='content'>
            <div className='arrows'>
                <button className='text-left' onClick={()=>goToSlide(currentIndex - 1)}>
                    <span className='text-xl'>{prevRetard.name}</span>
                    <img src='/images/arrow-left.png' alt='right-arrow' className='scale-80' aria-hidden='true'/>
                </button>
                <button className='text-left' onClick={()=>goToSlide(currentIndex + 1)}>
                    <span className='text-xl'>{nextRetard.name}</span>
                    <img src='/images/arrow-right.png' alt='left-arrow' className='scale-80' aria-hidden='true'/>
                </button>
            </div>

            <div className='retard'>
                <img src={currentRetard.image} className='object-contain'/>
            </div>

            <div className='describe'>
              <div ref={contentRef} className='info'>
                <p>Info About :</p>
                <p id='title'>{currentRetard.name}</p>
              </div>

              <div className="details">
                <h2>{currentRetard.title}</h2>
                <p>{currentRetard.description}</p>
              </div>
            </div>
        </div>


    </section>
  )
}

export default Slider
