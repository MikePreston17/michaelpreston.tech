import { theme } from '@chakra-ui/core'

const customTheme = {
    ...theme,
    breakpoints: ["30em", "48em", "62em", "80em"],
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },
    // fonts: {
    //     heading: '"Avenir Next", sans-serif',
    //     body: "system-ui, sans-serif",
    //     mono: "Menlo, monospace",
    // },
    // fontSizes: {
    //     xs: "0.75rem",
    //     sm: "0.875rem",
    //     md: "1rem",
    //     lg: "1.125rem",
    //     xl: "1.25rem",
    //     "2xl": "1.5rem",
    //     "3xl": "1.875rem",
    //     "4xl": "2.25rem",
    //     "5xl": "3rem",
    //     "6xl": "4rem",
    // },
    colors: {
        ...theme.colors,
        // Example of adding a new brand color. Used in props like variantColor, bg, etc.
        kiyap: {
            pink: {
                50: "#ffe4ff",
                100: "#feb4f4",
                200: "#fb85e8",
                300: "#f754df",
                400: "#f424d4",
                500: "#db0bbb",
                600: "#ab0592",
                700: "#7a0169",
                800: "#4b0040",
                900: "#1d0019",
            },
            sushi: {
                
            }
        },
        upstack:
        {
            blue:
            {
                50: '#d8fbffe6',
                100: '#abeaffe6',
                200: '#7bdcffe6',
                300: '#48ccffe6',
                400: '#1abeffe6',
                500: '#00a4e6e6',
                600: '#0080b4e6',
                700: '#005b82e6',
                800: '#003851e6',
                900: '#001421e6',
            },
            teal:
            {
                50: '#dbfefb',
                100: '#b6f5ed',
                200: '#8eede0',
                300: '#65e4d3',
                400: '#3ddcc7',
                500: '#23c2ae',
                600: '#149787',
                700: '#056d60',
                800: '#00423a',
                900: '#001813',
            },
            orange: {
                50: '#fff9dc',
                100: '#fcecb1',
                200: '#f8df83',
                300: '#f6d254',
                400: '#f3c526',
                500: '#d9ab0c',
                600: '#a98505',
                700: '#795f02',
                800: '#493900',
                900: '#1b1300',
            },
            cream: {
                500: '#F9FFeF'
            },            
        },

        linkedIn: {
            blue: '#0077B5'
        }
        
        // Example for if you wanted to override the built-in defaults for the color green
        // green: {
        //     ...theme.colors.green,
        //     500: "#ff0099", // by default buttons use [colorName].500 as their main color. This would make green buttons hot pink...
        // },
    },
    zIndices: {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    lineHeights: {
        normal: "normal",
        none: "1",
        shorter: "1.25",
        short: "1.375",
        base: "1.5",
        tall: "1.625",
        taller: "2",
    },
    letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
    },
};

export default customTheme;