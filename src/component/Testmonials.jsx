import LineGradiant from './LineGradiant'
import { motion } from "framer-motion"

const Testmonials = () => {
    const testmonials = 'mx-auto relative max-w-[350px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2'

  return (
    <div id="testmonials" className="pt-32 pb-16">
        <motion.div 
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ fallback: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">TEST</span>IMONIALS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradiant />
          </div>
        </div>
        <p className="mt-10 mb-10">
            This are the reviews I got in my acadamics. I don't put my faculty image instead of I use other unknown image 
        </p>
        </motion.div>
        <div className='md:flex md:justify-between gap-8'>
            <motion.div 
            className={`bg-blue ${testmonials} before:content-person1`}
                initial="hidden"
                whileInView="visible"
                viewport={{ fallback: true, amount: 0.5 }}
                transition={{ delay:0.3, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
            <p className='font-playfair text-6xl'>"</p>
            <p className='text-center text-xl'>
             Hii this guy is trying to prove him to the industry his project is like awesome and innovative main think about this guys, he concentrate on UI
            </p>
            </motion.div>
            <motion.div 
            className={`bg-red ${testmonials} before:content-person2`}
                initial="hidden"
                whileInView="visible"
                viewport={{ fallback: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                    }}
            >
            <p className='font-playfair text-6xl'>"</p>
            <p className='text-center text-xl'>
            Hello there, he is always like to learn new thinks so surly he will become a full stack developer
            </p>
            </motion.div>
            <motion.div 
            className={`bg-yellow ${testmonials} before:content-person3`}
                initial="hidden"
                whileInView="visible"
                viewport={{ fallback: true, amount: 0.5 }}
                transition={{ delay:0.6 ,duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
            <p className='font-playfair text-6xl'>"</p>
            <p className='text-center text-xl'>
             Hello, he is a very good project based learner always like to learn new thinks. And new mordean Web Technologys.
            </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Testmonials
