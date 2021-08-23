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
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "order",
      order: "order",
    },
    prepare(selection) {
      const { order } = selection;
      return Object.assign({}, selection, {
        subtitle: order && `by ${order}`,
      });
    },
  },
};
