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
    <section id='menu'>

        <img src='/images/arrow-left.png' className='scale-75'/>
        <img src='/images/arrow-right.png' className='scale-75'/>
        
        <nav className='retard-tabs'
        aria-label='Cocktail Navigation'
        >

            {Retards.map((retard,index)=>{
              const isActive = index === currentIndex;

              return(
                <button 
                key={retard.id}
                className={`relative group flex items-center justify-center pb-2 pt-2 cursor-pointer transition-colors ${isActive? 'text-white' : "text-white/50"}`}
                onClick={()=>goToSlide(index)}
                >
                <span
                className={`absolute right-0 top-0 h-[1px] bg-white-0 transition-all duration-300
                ${isActive ? "w-full bg-white-100" : "w-0 group-hover:w-full bg-white/50"}`}
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


    </section>
  )
}

export default Slider
