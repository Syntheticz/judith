import { DefineSchemaType, defineType, SchemaTypeDefinition } from "sanity";

const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
      description: "Price after discount, if applicable",
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(500),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "reference", to: [{ type: "review" }] }],
    },
    {
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      description: "Mark as featured product",
    },
    {
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    },
  ],
});

export default productSchema;
