import React, { useEffect } from 'react';
// context -> warehouse
const AppContext = React.createContext();
const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_API_KEY}&s=hero';

// provider function
const AppProvider = ({ children }) => {

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getMovies(API);
    }, []);
    return <AppContext.Provider value="Zaid">{children}</AppContext.Provider>;
};

//Global custom hook
// const GlobalContext = () => {
//     return useContext(AppContext);
// };
export { AppContext, AppProvider };