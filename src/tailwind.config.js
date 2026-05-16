/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure dark mode to be controlled by a 'dark' class on the HTML or body element.
  // This aligns with your current `body.dark` class in index.css.
  darkMode: ["class"],
  // Specify all the files that Tailwind should scan for utility classes.
  // Ensure this covers all your component files, pages, and any other files
  // where you use Tailwind classes.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include your src directory
  ],
  theme: {
    // Default container settings, often used by Shadcn components.
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
