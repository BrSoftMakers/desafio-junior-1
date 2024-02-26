import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      colorPrimary: "#001436",
      colorSecondary: "#0056E2",
      colorText: "#FFF",
      colorDetailsHeader: "#3D4758",
      gradientBottomColorOne: "#00CAFC",
      gradientBottomColorTwo: "#0056E2",
      colorBtnRemove: "#FF3D34",
      colorBack: "#00060F",
    },
  },
  plugins: [],
};
export default config;
