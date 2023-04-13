import { createContext, useContext } from "react";

const ShoppingCartContext = createContext({
  getItemQuantity: function (id) {
    return Number;
  },
  increaseCartQuantity: function (id) {
    return;
  },
  decreaseCartQuantity: function (id) {
    return;
  },
  removeFromCart: function (id) {
    return;
  },
});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
