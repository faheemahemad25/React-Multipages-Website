import React, { useEffect} from 'react'
import HeroSection from '../Components/HeroSection'
// import { useGlobalContext } from '../Context'
import Services from './Services'
import Contact from './Contact'

import { useContext} from 'react'    //📗🔖 every time to get context data we have to import these two.
import { AppContext } from '../AppContext'    //📗🔖 every time to get context data we have to import these two.


const Home = () => {

  // const data = {
  //   name: "Thapa Technical",
  //   description: "A Full stack developer, youtuber and freelancer.",
  //   image: "./images/hero-DevWithLaptop.png"
  // }

  // const contextData = useContext(AppContext); //📗🔖 this is how we got data from another component in varibale.
  // console.log("context data", contextData);       // We got {name: 'vinod thapa ji', age: '30'}

  // const { updateHomePage } = useGlobalContext();
  //  OR 
  const { updateHomePage } = useContext(AppContext)



  useEffect(() => {
    updateHomePage();
  }, [])


  return (
    <>
      {/* //  <HeroSection data={data} /> */}
      {/* // <HeroSection  {...data} /> //📗🔖 this props(Yani ke obj destructure karke)  */}
      {/* // 👆means visually like <HeroSection name="Thapa" description: "Full Stack developer" image: "./images/hero-DevWithLaptop.png" />
          // so at props receving side props {
          //                                   name: "".
          //                                   description: "".
          //                                   image: "".
          //                                } 
          )
       */}

      <HeroSection />
      <Services />
      <Contact/>
      
    </>
  )   
}

export default Home;

