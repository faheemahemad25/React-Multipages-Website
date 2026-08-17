import { act } from "react";

const updateReducer = (state, action) => { // reducer fnc returned data goes to state.

    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
            age: action.payload.age,
        }
    }
    

    if (action.type === "ABOUT_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
            age: action.payload.age
        }
    }


    if (action.type === "GET_SERVICES") {
        return {
            ...state,
            loading: false,
            services: action.payload,
            error: null, // or null
        }
    }

    
    if (action.type === "API_LOADING") {
        return {
            ...state,
            loading: true,
            error: null,
        };
    }

    if (action.type === "API_ERROR") {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }


    return state;
}

export default updateReducer;