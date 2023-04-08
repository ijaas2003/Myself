import LineGradiant from './LineGradiant'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const {
        register,
        trigger,
        formState:{errors},
    } = useForm();
    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }
  return (
    <section id='contact' className='pt-48 p-20'>
        <motion.div 
            className='flex justify-end w-full'
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
            <p className='font-playfair text-3xl'>
                <span className='text-yellow'>Contact us </span>Get Started
            </p>
            <div className='flex md:justify-end'>
                    <LineGradiant width='w-1/2' height='h-[4px]' margin='my-6'/>
                </div>
            </div>
        </motion.div>
        <div className='md:flex md:justify-between gap-16 mt-5'> 
            <motion.div
            className='basis-1/2 flex justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ fallback: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
            }}
            >
            <img src="../assets/contact-image.jpeg" alt="contact" />
            </motion.div>
            <motion.div
            className='basis-1/2 mt-10 md:mt-0 '
            initial="hidden"
            whileInView="visible"
            viewport={{ fallback: true, amount: 0.5 }}
            transition={{ delay:0.4, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
            }}
            >
            <form target='_blank' onSubmit={onSubmit} action="https://formspree.io/f/xknebybb" method='POST'>
                <input className='w-full bg-blue font-semibold placeholder:text-black mb-3 p-3 text-deep-blue' type="text" placeholder='Name'{...register("name", {
                    required: true,
                    maxLength: 100,
                })} /> 
                {errors.name && (
                    <p>{errors.name.type === 'required' && "this field is required"}{errors.name.type ==="maxLength" && "Max length is 100 word"} </p>
                )}
                <input className='w-full bg-blue font-semibold placeholder:text-black mb-3 p-3 text-deep-blue' type="email" placeholder='Email'{...register("email", {
                    required: true,
                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} /> 
                {errors.name && (
                    <p>{errors.email.type === 'required' && "this field is required"}{errors.email.type ==="pattern" && "Invalid email address"} </p>
                )}
                <textarea cols="50" rows="4" className='w-full bg-blue font-semibold placeholder:text-black mb-3 p-3 text-deep-blue' type="name" placeholder='Message'{...register("Message", {
                    required: true,
                    maxLength: 1000,
                })} /> 
                {errors.name && (
                    <p>{errors.Message.type === 'required' && "this field is required"}{errors.Message.type === "maxLength" && "Message is above size"} </p>
                )}
                <button type="submit" className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-1000'>SEND ME A MESSAGE</button>
            </form>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact