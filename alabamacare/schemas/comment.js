/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "comment",
  title: "Comment",
  type: "document",
  initialValue: {
    upvotes: 0,
  },
  fields: [
    {
      name: "video",
      title: "Video Id",
      type: "string",
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
    },
    {
      name: "upvote",
      title: "Upvotes",
      type: "number",
    },
    {
      name: "commentAuthor",
      title: "commentAuthor",
      type: "string",
    },
    {
      name: "videoId",
      title: "videoId",
      type: "reference",
      weak: true,
      to: [{ type: "video" }],
    },
    {
      name: "orginalText",
      title: "orginalText",
      type: "string",
    },
    {
      name: "image",
      titel: "image",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "hashtag",
      title: "hashtags",
      type: "string",
    },
    {
      name: "url",
      title: "youtube Url",
      type: "string",
    },
    {
      name: "timeStamp",
      title: "Time Stamp",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "reference",
      weak: true,
      to: [{ type: "category" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "text",
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
