import { BallCanvas } from "./canvas"
import { sectionwrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { technologies } from "../constants"
import {motion} from 'framer-motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} mt-[-60px]`}>Tech Stack</h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10 mt-[78px] ">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>

    </>
  )
}

export default sectionwrapper(Tech,"")