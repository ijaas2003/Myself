import LineGradiant from "./LineGradiant";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const Myskills = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1070px)")
  return (
    <section id="skills" className="pt-10 pb-35">
        <div className="md:flex md:justify-between md:gap16 mt-32 ">
            <motion.div
                className="md:w-1/3"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 1 }} 
                transition={{ duration:1 }} 
                variants = {{ 
                    hidden: {opacity: 0,y: 50},
                    visible: {opacity: 1, y:0} }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    my <span className="text-red">Skills</span>
                </p>
                <LineGradiant width="w-1/3"/>
                <p className="mt-10 mb-7">
                    Designing a web using Framwork like React, BootStrap, Tailwind
                </p>
            </motion.div>
            <div className="mt-16 md:mt-0">
                    {isAboveMediumScreen ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img className="z-10" alt="Skills" src="../assets/skills-image.png"/>
                        </div>
                    ) : (
                        <img className="z-10" alt="Skills" src="../assets/skills-image.png"/>
                    )}
            </div>
            </div>
            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                    className="md:w-1/3 md:mt-10 xs:mb-24"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 1 }} 
                    transition={{ duration:1 }} 
                    variants = {{ 
                        hidden: {opacity: 0,y: 50},
                        visible: {opacity: 1, y:0} }}
                >
                    <div className="relative h-32 xs:h-36">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-2xl mt-3">Full Stack Development</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]">

                        </div>
                        <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                
                    className="md:w-1/3 md:mt-10 xs:mb-24"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once:true, amount: 1 }} 
                    transition={{ delay:0.4, duration:1 }} 
                    variants = {{ 
                        hidden: {opacity: 0,y: 50},
                        visible: {opacity: 1, y:0} }}
                >
                    <div className="relative h-32  xs:h-36">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-2xl mt-3">Flutter</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 xs:mb-10 bg-green-600 absolute right-0 top-0 z-[-1]">

                        </div>
                        <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="md:w-1/3 md:mt-10 xs:mb-24"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 1 }} 
                    transition={{ delay:0.6,duration:1 }} 
                    variants = {{ 
                        hidden: {opacity: 0,y: 50},
                        visible: {opacity: 1, y:0} }}
                >
                    <div className="relative h-32 xs:h-36">
                        <div className="z-10">
                            <p className="font-playfair font-semibold  text-5xl">03</p>
                            <p className="font-playfair font-semibold  text-2xl mt-3">Cyber Sequrity</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]">

                        </div>
                        <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.
                        </p>
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Myskills;