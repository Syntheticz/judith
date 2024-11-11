import { type SchemaTypeDefinition } from "sanity";
import productSchema from "./product";
import categorySchema from "./categories";
import brandSchema from "./brands";
import reviewSchema from "./reviews";
import promoCodeSchema from "./promo-codes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productSchema,
    categorySchema,
    brandSchema,
    reviewSchema,
    promoCodeSchema,
  ],
};
