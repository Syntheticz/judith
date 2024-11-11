import { defineType, SchemaTypeDefinition } from "sanity";

const reviewSchema = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Review Title",
      type: "string",
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "reviewText",
      title: "Review Text",
      type: "text",
    },
    {
      name: "reviewerName",
      title: "Reviewer Name",
      type: "string",
    },
  ],
});

export default reviewSchema;
