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

                bk: "#0A0A0A",
                dk: "#111111",
                cd: "#1A1A1A",
                el: "#222222",
                bd: "#2A2A2A",
                mt: "#555555",
                sv: "#B8B8B8",
                or: "#FF5A00",
                ord: "#CC4800",
                orl: "#FF7A33",
            },
            fontFamily: {
                // dp: ['"Bebas Neue"', "sans-serif"],
                // bd: ['"Barlow Condensed"', "sans-serif"],

                heading: ["var(--font-oswald)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
