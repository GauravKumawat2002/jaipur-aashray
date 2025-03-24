export const routes: NavbarLinks = {
  home: "/",
  "about-us": "/about-us",
  properties: "/properties",
  blogs: "/blogs",
  blogPost: (id: string) => `/blogs/blog-post-${id}`,
  faq: "/faq",
  "privacy-and-policy": "/privacy-and-policy",
  "terms-and-conditions": "/terms-and-conditions",
  testimonials: "/testimonials",
};
