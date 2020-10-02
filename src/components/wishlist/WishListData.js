import React, {useState} from 'react';

export const WishlistContext = React.createContext();

export const WishListData = (props) => {
    const [Wishlist, setWishlist] = useState([]);
    return (
        <WishlistContext.Provider value={[Wishlist, setWishlist]} >
            {props.children}
        </WishlistContext.Provider>
    )
}