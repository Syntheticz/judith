"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import MainNav from "@/components/navbar";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductWithSlug } from "@/lib/queries";
import ProductSkeleton from "@/components/skeletons/productSkeleton";
import { useCartStore } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const cartStore = useCartStore();
  const { toast } = useToast();

  const { data: data, isLoading } = useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const data = await getProductWithSlug(slug);
      return data;
    },
  });

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  function handleAddToCard() {
    toast({
      title: "Added to cart",
      description: `${data?.data?.title} has been added to your cart`,
    });

    cartStore.add({
      _id: data?.data?._id as string,
      price: data?.data?.price as number,
      quantity: quantity,
      title: data?.data?.title as string,
    });
  }

  return (
    <>
      <MainNav />
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className=" relative">
              <Image
                src={data?.data?.["image-url"] as string}
                alt="Radiant Glow Serum"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{data?.data?.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  (128 reviews)
                </span>
              </div>
              <p className="text-2xl font-bold mb-4">₱{data?.data?.price}</p>
              <p className="mb-6">{data?.data?.description}</p>
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Size</h2>
                <RadioGroup defaultValue="30ml">
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30ml" id="30ml" />
                      <Label htmlFor="30ml">30ml</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50ml" id="50ml" />
                      <Label htmlFor="50ml">50ml</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button onClick={() => handleAddToCard()} className="w-full mb-4">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description" className="mt-12">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <Card>
                <CardContent className="pt-6">
                  <p>{data?.data?.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <p>Key Ingredients:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Vitamin C (15%): A powerful antioxidant that brightens
                      skin and boosts collagen production
                    </li>
                    <li>
                      Hyaluronic Acid: Provides deep hydration and plumps the
                      skin
                    </li>
                    <li>
                      Niacinamide: Improves skin texture and minimizes pores
                    </li>
                    <li>Peptides: Help to firm and smooth the skin</li>
                    <li>
                      Green Tea Extract: Protects against environmental damage
                    </li>
                  </ul>
                  <p className="mt-4">
                    Full Ingredients List: Aqua, Ascorbic Acid, Glycerin,
                    Propylene Glycol, Niacinamide, Sodium Hyaluronate, Acetyl
                    Hexapeptide-8, Camellia Sinensis Leaf Extract, Ferulic Acid,
                    Panthenol, Allantoin, Xanthan Gum, Carbomer,
                    Triethanolamine, Disodium EDTA, Phenoxyethanol,
                    Ethylhexylglycerin.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="how-to-use">
              <Card>
                <CardContent className="pt-6">
                  <ol className="list-decimal pl-5">
                    <li>Cleanse your face and pat dry.</li>
                    <li>If using a toner, apply it before the serum.</li>
                    <li>
                      Dispense 2-3 drops of the Radiant Glow Serum onto your
                      fingertips.
                    </li>
                    <li>
                      Gently pat and press the serum into your skin, avoiding
                      the eye area.
                    </li>
                    <li>
                      Allow the serum to absorb for a few minutes before
                      applying moisturizer.
                    </li>
                    <li>
                      For best results, use morning and evening as part of your
                      skincare routine.
                    </li>
                    <li>
                      Always follow with a broad-spectrum sunscreen during the
                      day.
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="w-4 h-4 fill-primary" />
                            ))}
                          </div>
                          <span className="font-semibold">Jane Doe</span>
                        </div>
                        <p></p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
      <Footer />
    </>
  );
}
