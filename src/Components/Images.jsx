import React from 'react'

const Images = () => {
       return (
              <div className='w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center'>
                     <div className="w-[40%] h-1/2 sm:h-[80vh] sm:w-[20%]   relative ">
                            <div className="w-20 h-[7rem] sm:w-[10rem] sm:h-[10rem] absolute -right-1/3 top-6 ">
                                   <img className='h-full  w-full object-cover ' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" /></div>
                            <div className="w-[8rem] sm:w-[15rem] aspect-video absolute top-1/3 -left-1/2  overflow-hidden">
                                   <video muted autoPlay loop className='h-full w-full scale-105 ' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video></div>
                            <div className="w-[10rem] sm:w-[15rem] aspect-video absolute -left-[60%] -bottom-10 ">
                                   <img className='h-full w-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
                            </div>
                            <div className="w-[10rem] sm:w-[15rem] sm:-bottom-5 aspect-[1.5/1] absolute -right-[70%] -bottom-[30%]  overflow-hidden">
                                   <video muted autoPlay loop className='h-full w-full scale-150 ' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
                            </div>
                            <img className='h-full w-full object-cover ' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
                     </div>
              </div>
       )
}

export default Images
