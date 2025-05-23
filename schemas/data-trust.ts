export default {
  name: "dataTrust",
  title: "Data Trust Section",
  type: "document",
  fields: [
    {
      name: "leftTitle",
      title: "Left Column Title",
      type: "string",
    },
    {
      name: "leftContent",
      title: "Left Column Content",
      type: "text",
    },
    {
      name: "leftLink",
      title: "Left Column Link",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Link Text",
          type: "string",
        },
        {
          name: "url",
          title: "Link URL",
          type: "string",
        },
      ],
    },
    {
      name: "rightTitle",
      title: "Right Column Title",
      type: "string",
    },
    {
      name: "rightContent",
      title: "Right Column Content",
      type: "text",
    },
    {
      name: "rightLink",
      title: "Right Column Link",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Link Text",
          type: "string",
        },
        {
          name: "url",
          title: "Link URL",
          type: "string",
        },
      ],
    },
  ],
}
