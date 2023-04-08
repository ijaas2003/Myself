import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from "../component/SocialMediaIcons";
import WebImg from '../assets/Web-Development.jpg';
const Landing = ({setselectedPage}) => {
    const isAboveMedium = useMediaQuery("(min-width:1060px)")
    return(
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMedium ? (
                    <motion.div
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ fallback: true, amount: 1 }} 
                        transition={{ duration:3,delay:1.8,type:"spring",stiffness:200}} 
                        variants = {{ 
                            hidden: {opacity: 0,y: -100},
                            visible: {opacity: 1, y:0} }}
                    >
                        <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20  before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-yellow before:z-[-1]">
                            <img className="hover:filter hover:saturate-200 transition duration-1000 z-10 w-[400px] max-w-[400px] md:max-w-[600px] h-[300px] " alt="profile" src={WebImg}/>
                        </div>
                    </motion.div>
                    
                ) : (
                    <img className="hover:filter hover:saturate-200 transition duration-1000 z-10 xs:h-[350px] w-full max-w-[400px] md:max-w-[600px]" alt="profile" src={WebImg}/>
                )}
            </div>
            <div>
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ fallback: true, amount: 1 }} 
                    transition={{ duration:1 }} 
                    variants = {{ 
                        hidden: {opacity: 0,y: -90},
                        visible: {opacity: 1, y:0} }}
                    >
                    <p className="text-6xl font-playfair xs:mt-10 z-10 text-center md:text-start">
                    Ijaas {""}
                    <span
                        className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                    >
                        Ahamad
                    </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    I am ijaas thank you for visit my portfolio and my aim to become a Full Stack Web Developer i don so many mini projects during my acadamics.  
                    </p>
                </motion.div>
                <motion.div className="flex mt-5 justify-center md:justify-start"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ fallback: true, amount: 1 }} 
                transition={{ delay:0.4, duration:1 }} 
                variants = {{ 
                    hidden: {opacity: 0,x: -90},
                    visible: {opacity: 1, x:0} }}
                >
                    <AnchorLink
                        className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-1000"
                        onClick={() => setselectedPage("contact")}
                        href="#contact"
                    >
                        contact me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
                        onClick={() => setselectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-1000 w-full h-full flex items-center justify-center font-playfair px-10">
                             lets' talk
                        </div>
                    </AnchorLink>
                </motion.div>
                <motion.div
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ fallback: true, amount: 1 }} 
                    transition={{ delay:0.8, duration:1 }} 
                    variants = {{ 
                        hidden: {opacity: 0,x: -90},
                        visible: {opacity: 1, x:0} }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}
export default Landing;