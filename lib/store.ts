import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "./types";

type CartStore = {
  cartItems: CartItem[];
  add: (item: CartItem) => void;
  delete: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      add: (item) =>
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (cartItem) => cartItem._id === item._id
          );

          if (existingItemIndex !== -1) {
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[existingItemIndex].quantity += item.quantity;
            return { cartItems: updatedCartItems };
          } else {
            return { cartItems: [...state.cartItems, item] };
          }
        }),

      delete: (item) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem._id !== item._id
          ),
        })),
    }),
    {
      name: "cart-storage", // Unique name for localStorage
    }
  )
);
