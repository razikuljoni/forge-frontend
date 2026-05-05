const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                forge: {
                    black: "#0A0A0A",
                    dark: "#111111",
                    gray: "#1A1A1A",
                    mid: "#2A2A2A",
                    silver: "#B8B8B8",
                    silverLight: "#D4D4D4",
                    silverDark: "#6B6B6B",
                    orange: "#FF5E00",
                    orangeLight: "#FF7A2E",
                    orangeDark: "#CC4B00",
                },
            },
            fontFamily: {
                heading: ["var(--font-oswald)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
