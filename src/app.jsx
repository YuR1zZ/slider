import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)



const App = () => {
  return (
    <div>
      <h1 className="text-blue-500 text-3xl flex-center">
        APP
      </h1>
    </div>
  )
}

export default App;
