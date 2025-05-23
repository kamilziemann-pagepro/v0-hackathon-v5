export default {
  name: "statistics",
  title: "Statistics Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "institutions",
      title: "Institutions Statistic",
      type: "object",
      fields: [
        {
          name: "count",
          title: "Count",
          type: "string",
        },
        {
          name: "label",
          title: "Label",
          type: "string",
        },
      ],
    },
    {
      name: "aum",
      title: "AuM Statistic",
      type: "object",
      fields: [
        {
          name: "count",
          title: "Count",
          type: "string",
        },
        {
          name: "label",
          title: "Label",
          type: "string",
        },
      ],
    },
    {
      name: "accounts",
      title: "Accounts Statistic",
      type: "object",
      fields: [
        {
          name: "count",
          title: "Count",
          type: "string",
        },
        {
          name: "label",
          title: "Label",
          type: "string",
        },
      ],
    },
  ],
}
