import { defineType, SchemaTypeDefinition } from "sanity";

const promoCodeSchema = defineType({
  name: "promoCode",
  title: "Promo Code",
  type: "document",
  fields: [
    {
      name: "code",
      title: "Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "discountType",
      title: "Discount Type",
      type: "string",
      options: {
        list: [
          { title: "Percentage", value: "percentage" },
          { title: "Fixed Amount", value: "fixed" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "discountValue",
      title: "Discount Value",
      type: "number",
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "expirationDate",
      title: "Expiration Date",
      type: "datetime",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
});

export default promoCodeSchema;
