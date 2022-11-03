const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
        },
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    primary: "#FF3811",
                    "primary-focus": "#DB2805",
                },
            },
        ],
    },
};
