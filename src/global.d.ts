// Allow importing CSS files as modules in TypeScript
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Allow importing other static assets if needed
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
