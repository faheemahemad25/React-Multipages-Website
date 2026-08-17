import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";

import updateReducer from "./reducer"


const AppContext = createContext();


const initialState = { 
  name: "",
  description: "",
  image: "",
  age: "",

  services: [],
  loading: false,
  error: null
};


// const AppProvider = (props)=>{
const AppProvider = ({ children }) => {     //todo  -------------- Provider Component ------------------

  const [state, dispatch] = useReducer(updateReducer, initialState);

  const API = "https://6977347c5b9c0aed1e85b5f0.mockapi.io/services"

  // to update Home page function
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        // name: "Thapa Technical",
        name: "Bheem Ahemad Malik",
        description: "A Full stack developer, youtuber and freelancer.",
        image: "./images/hero-DevWithLaptop.png", //🔖📗 if we create images folder in public folder(benefit) mei tb hum khai bhi just dot forward slash likhte h to "./images "
        age: "24",
      }
    })
  }

  // to about page function
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        // name: "Vinod Thapa ji",
        name: "Bheem Ahemad Malik",
        description: "A Full stack developer, youtuber and freelancer. youtube 100k subscriber, 135+ Project successfully delivered.",
        image: "./images/about1.svg", //🔖📗 if we create images folder in public folder(benefit) mei tb hum khai bhi just dot forward slash likhte h to "./images "
        age: "30",
      }
    })
  }

  // to get API data function
  const getServices = async (APIurl) => {
    try {

      dispatch({
        type: "API_LOADING"
      })

      const res = await fetch(APIurl);
      const data = await res.json();
      console.log("data--", data);

      dispatch({
        type: "GET_SERVICES",
        payload: data
      })

    } catch (error) {
      console.log("error is🔴", error);

      dispatch({
        type: "API_ERROR",
        payload: error.message,
      });
    }
  }

  // to call API
  useEffect(() => {
    getServices(API);
  }, [])

  // return (
  //   <AppContext.Provider value={{     // {/*🔖📗 jb koi component open and close tag wala component return krta h to yadi is component ko bhi open and close tag ke sath use krte h and is jo retun kr rha AppProvider compoen tb vo dusra jo isme andar aage vo isme na aa kr iske retun ke andar aata h.   */}
  //     name: "vinod thapa ji", 
  //     age:"30"
  //   }}>
  //      {children}
  //   </AppContext.Provider >    
  // )

  return (
    <AppContext.Provider value={{
      ...state,
      updateHomePage,
      updateAboutPage,
    }}>
      {children}
      {/* { props.children }  */}
    </AppContext.Provider >
  )
};



// Global custom hook/function
// const useGlobalContext = () => { //📗🔖 why we create it ? bcz multiple time useContext(AppContext) in many page component mei use karna hoga isliye.
//   return useContext(AppContext);
// };


export { AppContext, AppProvider };
// export { AppContext, AppProvider, useGlobalContext };

