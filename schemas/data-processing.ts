export default {
  name: "dataProcessing",
  title: "Data Processing Section",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Process Flow Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "steps",
      title: "Processing Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Icon name (download, refreshCw, fileCheck, upload)",
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
