"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Search } from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/queries";
import MainNav from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await getProducts();
      return data;
    },
  });

  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <MainNav />
      </div>
      <div className="mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Our Cosmetic Products</h1>
          <div className="flex gap-2">
            <Input className="flex-grow" placeholder="Search products..." />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.data &&
            products.data.map((product) => (
              <Card key={product._id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={product["image-url"]}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {product.title}
                  </h2>
                  <p className="text-primary font-bold">
                    ₱{product.price.toFixed(2)}
                  </p>
                  <Button
                    onClick={() => router.push(`/products/${product.slug}`)}
                    className="mt-4 w-full"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
