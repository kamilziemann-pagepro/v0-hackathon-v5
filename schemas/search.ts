export default {
  name: "search",
  title: "Search Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "institutions",
      title: "Institutions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Institution Name",
              type: "string",
            },
            {
              name: "logo",
              title: "Institution Logo",
              type: "image",
              fields: [
                {
                  name: "alt",
                  title: "Alternative Text",
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
