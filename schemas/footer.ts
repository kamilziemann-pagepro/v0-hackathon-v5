export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
    },
    {
      name: "privacyPolicy",
      title: "Privacy Policy Link",
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
      name: "locations",
      title: "Office Locations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Location Title",
              type: "string",
            },
            {
              name: "address",
              title: "Address Lines",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "link",
          title: "Button Link",
          type: "string",
        },
      ],
    },
  ],
}
