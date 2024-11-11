"use client";
import {
  Heart,
  Search,
  ShoppingBag,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useCartStore } from "@/lib/store";
import { useRouter } from "next/navigation";

function SearchBar() {
  return (
    <form className="hidden items-center lg:flex">
      <Input type="search" placeholder="Search..." className="w-[300px]" />
      <Button type="submit" size="icon" className="ml-2">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}

export default function MainNav() {
  const cartStore = useCartStore();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const totalPrice = cartStore.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const router = useRouter();

  return (
    <div className="flex w-full px-8 h-16">
      <div className="mr-4 hidden md:flex ">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">BeautyHub</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/sale">Sale</Link>
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-end space-x-4">
        <SearchBar />
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {cartStore.cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold mr-4">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => cartStore.delete(item)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              {cartStore.cartItems.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total:</span>
                    <span>₱{totalPrice.toFixed(2)}</span>
                  </div>
                  <Button
                    onClick={() => router.push("/checkout")}
                    className="w-full mt-4"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              )}
              {cartStore.cartItems.length === 0 && (
                <p className="text-center mt-6 text-gray-500">
                  Your cart is empty
                </p>
              )}
            </SheetContent>
          </Sheet>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </nav>
      </div>
    </div>
  );
}
