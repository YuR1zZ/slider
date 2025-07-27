'use client'
import { useState , useRef} from 'react';
import { Retards } from '../../constants'

const Slider = () => {


  //nav state
  const [currentIndex, setCurrentIndex] = useState();
  const totalRetards = Retards.length
  const goToSlide = (index)=>{
    const newIndex = (index + totalRetards) % totalRetards
    setCurrentIndex(newIndex)
  }




  return (
    <section className='w-full relative md:mt-40 mt-0 2xl:px-0 px-5 py-20'>
        
        <nav className='grid grid-cols-2 relative gap 10 mb-20 z-10 md:grid-cols-4 md:gap-20 sm:mb-32 md:max-w-6xl md:mx-auto'>

            {Retards.map((retard,index)=>{
              const isActive = index === currentIndex;

              return(
                <button 
                key={retard.id}
                className={`${isActive? 'text-white border-white':'text-white/50 border-white/50'}`}
                onClick={()=>goToSlide(index)}
                >
                  {retard.name}
                </button>
              )
            })}
        </nav>

    </section>
  )
}

export default Slider
