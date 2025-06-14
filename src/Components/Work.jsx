import { motion } from 'motion/react'
import { video } from 'motion/react-client'
import React, { useState } from 'react'

const Work = () => {

       const [elems, setElems] = useState([
              { heading: "heading-2", subheading: "subheading-2 ", video: "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04", image: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)", },
              { heading: "headong-3", subheading: " subheading-3", video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a", image: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)", },
              { heading: "heading-4", subheading: "subheading-4 ", video: "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0", image: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)", },
              { heading: "marque", subheading: "markting agency", video: "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1747461009~exp=1747475409~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=0d6533d156e2a6ead33485c44d305c4610b76613bd7e1223783aff8af8f33a2e&r=dXMtd2VzdDE%3D", image: "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)" },
       ])
       return (
              <div className='w-full relative'>
                     <div className="max-h-screen-2xl mx-auto px-5 sm:px-30 py-20">
                            <div className="feture flex gap-2">
                                   <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                                   <h3 className='capitalize'>Feture Projects</h3>
                            </div>
                            <h1 className='text-6xl my-6 overflow-hidden'>
                                   <motion.span
                                          initial={{ rotate: 90, opacity: 0, y: "40%", }}
                                          whileInView={{ rotate: 0, opacity: 1, y: 0, }}
                                          transition={{
                                                 duration: .6,
                                                 ease: [0.25, 1, 0.5, 1],
                                          }}
                                          viewport={{ once: true }}
                                          className='inline-block origin-left'
                                   >
                                          Work
                                   </motion.span>
                            </h1>
                            <p className='w-[88%]'>
                                   Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
                            </p>
                            <div className="videos sm:flex sm:flex-wrap sm:gap-10 mt-10">
                                   {elems.map((item, index) => {
                                          return <div key={index} className="video mt-10 w-full sm:w-[48%] overflow-hidden">
                                                 <div className="w-full h-[104vw] relative overflow-hidden sm:h-[50vh]  ">
                                                        <motion.img
                                                               initial={{ opacity: 1, }}
                                                               whileHover={{ opacity: 0 }}
                                                               data-scroll
                                                               data-scroll-speed="-.2"
                                                               className='hidden sm:absolute sm:z—[2] sm:top—0 sm:left—0 sm:block w-full h-full object-cover'
                                                               src={item.image} alt="" />
                                                        <video autoPlay muted loop className='block z-[1] scale-[1.3] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={item.video}></video>
                                                 </div>
                                                 <div className="px-3">
                                                        <h1 className='capitalize font-semibold'>{item.heading}</h1>
                                                        <p className='capitalize opacity-65'>{item.subheading}</p>
                                                 </div>

                                          </div>
                                   })}
                            </div>
                     </div>
              </div>
       )
}

export default Work
