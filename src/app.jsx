import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Slider from './components/Slider'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)



const App = () => {
  return (
    <div>
      <Slider />
    </div>
  )
}

export default App;
