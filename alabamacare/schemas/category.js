/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "hashtag",
      title: "Hashtag",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "hashtag",
    },
  },
};
