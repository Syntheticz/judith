"use server";

import { client } from "@/sanity/lib/client";
import { productsTypes, productType } from "./types";

export async function getProducts() {
  try {
    const query = `*[_type == "product"] | order(_createdAt desc){
            _id,
              price,
              "slug" : slug.current,
              title,
              "image-url" : images[0].asset->url
          }`;

    const data: productsTypes[] = await client.fetch(query);
    return { data: data, error: null, success: true };
  } catch (error) {
    return { data: null, error: error as Error, success: false };
  }
}

export async function getProductWithSlug(slug: string) {
  try {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]{
    
              _id,
                price,
                description,
                slug,
                title,
                "image-url" : images[0].asset->url
            }`;

    const data: productType = await client.fetch(query);
    return { data: data, error: null, success: true };
  } catch (error) {
    return { data: null, error: error as Error, success: false };
  }
}
