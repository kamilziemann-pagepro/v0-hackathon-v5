export default {
  name: "howItWorks",
  title: "How It Works Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Icon name (globe, database, barChart)",
            },
            {
              name: "title",
              title: "Step Title",
              type: "string",
            },
            {
              name: "description",
              title: "Step Description",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
}
