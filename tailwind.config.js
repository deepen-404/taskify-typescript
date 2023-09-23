/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f74c0",
      },
      fontFamily: {
        neucha: ["Neucha", "cursive"],
      },
      boxShadow: {
        custom: "0 0 10px 1000px rgba(0, 0, 0, 0.5)",
        button: "0 0 80px black",
      },
      backgroundImage: {
        singleTodoBackground:
          "url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')",
      },
      screens : {
        beforeSixHdr : "200px"
      }
    },
  },
  plugins: [],
};
