export default {
  name: "ourEdge",
  title: "Our Edge Section",
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
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Icon name (clock, brain, checkCircle, etc.)",
            },
            {
              name: "title",
              title: "Benefit Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
}
