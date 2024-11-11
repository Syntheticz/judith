import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              Discover the best in beauty with our curated collection of premium
              cosmetics.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping & Returns</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2023 BeautyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
