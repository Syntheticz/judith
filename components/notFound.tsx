import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <ShoppingBag className="mx-auto h-24 w-24 text-gray-400" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        We&#39;re sorry, but the product you&#39;re looking for is not
        available.
      </p>

      <div className="flex justify-center gap-4">
        <Button asChild variant="outline">
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>
        <Button asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
