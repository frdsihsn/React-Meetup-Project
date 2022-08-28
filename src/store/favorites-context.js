import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    deleteFavorite: (meetupId) => {},
    isitemFavorited: (meetupId) => {},
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavorite(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function deleteFavorite(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemFavorited(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavorite,
        deleteFavorite: deleteFavorite,
        isitemFavorited: itemFavorited
    };

    return <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
}


export default FavoritesContext;