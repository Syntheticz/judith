import { defineType, SchemaTypeDefinition } from "sanity";

const brandSchema = defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Brand Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Brand Logo",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.max(300),
    },
  ],
});

export default brandSchema;
