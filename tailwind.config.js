/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.jsx"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-to-r":
                    "linear-gradient(to right, var(--tw-gradient-stops))",
            },
            colors: {
                flf: {
                    dark: "#112119",
                    cream: "#FEF1DF",
                    "cream-dark": "#F8E4C9",
                    "dark-light": "#1a3226",
                    "dark-lighter": "#234332",
                },
            },
        },
    },
    plugins: [],
};
