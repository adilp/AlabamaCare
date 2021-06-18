/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "commentId",
      title: "Comment Id",
      type: "reference",
      to: { type: "comment" },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "commentId",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
