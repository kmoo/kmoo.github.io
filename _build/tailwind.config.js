// Rebuild after changing classes in any page:
//   npx tailwindcss@3.4.17 -c _build/tailwind.config.js -i _build/input.css -o tailwind.css --minify
module.exports = {
  content: ["./*.html", "./resources/**/*.html"],
};
