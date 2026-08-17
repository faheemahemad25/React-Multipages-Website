import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
// import { useGlobalContext } from '../Context'

import { useContext} from 'react'    //📗🔖 every time to get context data we have to import these two.
import { AppContext } from '../AppContext'    //📗🔖 every time to get context data we have to import these two.


const About = () => {

  //  const data = {
  //      name: "Vinod Thapa",
  //      description: "A Full stack developer, youtuber and freelancer. youtube 100k subscriber, 135+ Project successfully delivered.",
  //      image: "./images/about1.svg"
  //   }
  

  // const { updateAboutPage } = useGlobalContext();
  //  OR 
  const { updateAboutPage } = useContext(AppContext)
  // const { name, description, image, age } = useContext(AppContext)
  // console.log("data from context", name, description, image, age);
  



  useEffect(() => {
    updateAboutPage();
  }, [])


  return (
    // <h1>About</h1>

    // <HeroSection {...data} />
    <HeroSection />
  )
}

export default About;