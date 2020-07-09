import { theme } from '@chakra-ui/core'

const customBreakpoints = ["360px", "768px", "1024px", "1440px"];
//const breakpoints: ["30em", "48em", "62em", "80em"]; //default
customBreakpoints.sm = customBreakpoints[0];
customBreakpoints.md = customBreakpoints[1];
customBreakpoints.lg = customBreakpoints[2];
customBreakpoints.xl = customBreakpoints[3];

const customIcons = {
    typescript: {
        path: <path fill="currentColor" d="M0,12v12h24V0H0V12z M19.3,11c0.6,0.1,1.1,0.4,1.5,0.9c0.2,0.2,0.4,0.5,0.6,0.8c0,0-1,0.7-1.7,1.1 c0,0-0.1-0.1-0.2-0.2c-0.2-0.4-0.7-0.7-1.1-0.7c-0.7,0-1.2,0.3-1.2,1c0,0.2,0,0.3,0.1,0.4c0.2,0.3,0.5,0.5,1.4,0.9 c1.7,0.7,2.5,1.2,2.9,1.9c0.5,0.8,0.6,2,0.3,2.9c-0.4,1-1.3,1.7-2.7,1.9C18.6,22,18,22,17.4,22c-0.9-0.2-1.8-0.6-2.4-1.3 c-0.2-0.2-0.7-0.9-0.6-0.9c0.1-0.1,0.1-0.1,0.2-0.1l0.9-0.5l0.7-0.4l0.1,0.2c0.2,0.3,0.6,0.6,0.9,0.9c0.8,0.4,1.8,0.3,2.3-0.1 c0.4-0.4,0.4-0.9,0.1-1.3c-0.2-0.3-0.6-0.5-1.6-1c-1.2-0.5-1.8-0.9-2.3-1.4c-0.3-0.3-0.5-0.8-0.7-1.2c-0.1-0.5-0.1-1,0-1.5 c0.3-1.2,1.2-2,2.5-2.3C18.1,10.9,18.7,10.9,19.3,11L19.3,11z M13.7,12v1h-3.1v8.9H8.4V13H5.3v-1c0-0.3,0-0.7,0-1c0,0,1.9,0,4.2,0 h4.2L13.7,12z"></path>,
        viewBox: "0 0 24 24",
    }
}

export const customTheme = {
    ...theme,
    icons: {
        ...theme.icons,
        ...customIcons,
    },
    breakpoints: customBreakpoints,
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
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
    // sizes: {

    // },
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
        transparent: "transparent",

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
            red:
            {
                50: '#ffe3ed',
                100: '#ffb4c9',
                200: '#fb85a5',
                300: '#f85481',
                400: '#f4245c',
                500: '#db0b43',
                600: '#ab0434',
                700: '#7b0124',
                800: '#4c0015',
                900: '#1f0007',
            },
            sushi:
            {
                50: '#ffe5e5',
                100: '#fbbaba',
                200: '#f18e8e',
                300: '#ea6161',
                400: '#e33636',
                500: '#c91c1c',
                600: '#9e1415',
                700: '#710d0f',
                800: '#460506',
                900: '#1e0000',
            },
            giraffe:
            {
                50: '#efe9ff',
                100: '#ccbff7',
                200: '#aa95eb',
                300: '#886be1',
                400: '#6641d8',
                500: '#4d27be',
                600: '#3c1f95',
                700: '#2a156c',
                800: '#190c42',
                900: '#0b021c',
            },
            cream: {
                500: '#F9FFeF'
            },
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
            blue: {
                500: '#0077B5'
            }
        }
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

    logo: {
        'margin-top': '-180px',
        position: 'absolute',
        top: 0,
        left: 0,
        color: "#fff",
        "font-size": "120%",
        "font-family": "Monda",
    },
    // button: {
    //     'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    // },

    // Add Chakra's icons
    ...theme.icons,
    // Your custom icons
    search: {
        // The <path/> or <g> element for the svg. Note the use of  `fill=currentColor`
        path: (
            <path
                fill="currentColor"
                d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
            />
        ),
        // This is the viewBox of the icon.
        viewBox: "0 0 24 24",
    },

}

export default customTheme