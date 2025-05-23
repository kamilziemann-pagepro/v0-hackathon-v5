export default {
  name: "ecosystem",
  title: "Ecosystem Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "partners",
      title: "Partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "logo",
              title: "Partner Logo",
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
              name: "title",
              title: "Partner Name",
              type: "string",
            },
            {
              name: "description",
              title: "Partner Description",
              type: "text",
            },
            {
              name: "link",
              title: "Learn More Link",
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
        },
      ],
    },
  ],
}
