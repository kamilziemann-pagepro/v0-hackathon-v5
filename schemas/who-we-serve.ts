export default {
  name: "whoWeServe",
  title: "Who We Serve Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
    },
    {
      name: "categories",
      title: "Client Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Category Title",
              type: "string",
            },
            {
              name: "items",
              title: "Category Items",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
}
