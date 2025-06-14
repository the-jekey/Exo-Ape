import { motion } from 'motion/react'
import React from 'react'

const Landing = () => {

       return (
              <div className='relative w-full h-[150vh] sm:h-[250vh] bg-zinc-600  text-white'>
                     <div className="picture w-full h-full overflow-hidden">
                            <img
                                   data-scroll
                                   data-scroll-speed="-1.1"
                                   className='h-full w-full object-cover bg-top' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
                     </div>
                     <div className="w-full absolute top-0 px-5 sm:px-30">
                            <div className="  h-full w-full overflow-hidden  max-w-screen-2xl mx-auto px-5 sm:px-10 text-white ">
                            </div>
                            <div className="pera mt-80 sm:mt-[38rem]">
                                   {[
                                          "Global digital design studio partnering", "with brands and businesses that create", "exceptional experiences where people ", "live, work, and unwind.",
                                   ].map((item, index) => {
                                          return <p className='font-semibold sm:text-2xl text-md overflow-hidden w-fit'>
                                                 <motion.span
                                                        initial={{ translateY: "60%", rotate: "90deg", opacity: 0, }}
                                                        animate={{ translateY: 0, rotate: 0, opacity: 1 }}
                                                        transition={{ duration: .6, ease: [0.25, 1, 0.5, 1] }}
                                                        className=' origin-left inline-block'>{item} </motion.span> </p>
                                   })}

                            </div>
                            {[
                                   "Digital", "Design", "Expericence"
                            ].map((item, index) => {
                                   return <h1 className='text-6xl sm:text-[14rem] tracking-tighter leading-none w-fit overflow-hidden '>
                                          <motion.span
                                                 initial={{ translateY: "60%", rotate: "90deg", opacity: 0, }}
                                                 animate={{ translateY: 0, rotate: 0, opacity: 1 }}
                                                 transition={{
                                                        duration: .6,
                                                        ease: [0.25, 1, 0.5, 1],
                                                        delay: 1 + index * .15,
                                                 }}
                                                 className=' origin-left inline-block'> {item}</motion.span>
                                   </h1>
                            })}
                            <div className="heading mt-5 sm:mt-10">


                            </div>
                            <div className="pera2 mt-20 sm:w-1/3 text-xl">
                                   <p>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>

                                   <a className='border-b-[1px] sm:text-xl border-zinc-200 pb-1 inline-block mt-10' href="">Our Studio</a>
                            </div>
                     </div>
              </div>
       )
}

export default Landing
