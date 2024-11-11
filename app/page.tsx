"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import hero1 from "@/public/hero1.jpg";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MainNav from "@/components/navbar";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex  items-center">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden>

            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <ShoppingBag className="h-6 w-6" />
                  <span className="font-bold">BeautyHub</span>
                </Link>
                <Link href="/products" onClick={() => setIsSidebarOpen(false)}>
                  Products
                </Link>
                <Link
                  href="/categories"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Categories
                </Link>

                <Link href="/sale" onClick={() => setIsSidebarOpen(false)}>
                  Sale
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <MainNav />
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <BenefitsSection />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={hero1}
        alt="Beautiful woman with glowing skin"
        width={1600}
        height={600}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Natural Beauty
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore our range of premium cosmetics
        </p>
        <Button
          size="lg"
          onClick={() => router.push("/products")}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}

function CategorySection() {
  const categories = [
    { name: "Skincare", image: "/placeholder.svg?height=200&width=200" },
    { name: "Makeup", image: "/placeholder.svg?height=200&width=200" },
    { name: "Haircare", image: "/placeholder.svg?height=200&width=200" },
    { name: "Fragrances", image: "/placeholder.svg?height=200&width=200" },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              key={category.name}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const products = [
    {
      name: "Radiant Serum",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Velvet Lipstick",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hydra Moisturizer",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Silk Foundation",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="py-16">
      <div className="px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: "Cruelty-Free",
      description: "All our products are never tested on animals",
    },
    {
      title: "Natural Ingredients",
      description: "We use high-quality, natural ingredients",
    },
    { title: "Free Shipping", description: "Free shipping on orders over $50" },
    {
      title: "Loyalty Rewards",
      description: "Earn points with every purchase",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
