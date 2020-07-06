import { theme } from '@chakra-ui/core'
import icons from './icons'
import colors from './colors'
import space from './space'
import fonts from './fonts'

const customTheme = {
    ...theme,
    ...colors,
    ...icons,
    ...space,
    ...fonts
};

export default customTheme

// const customBreakpoints = ["360px", "768px", "1024px", "1440px"];
// //const breakpoints: ["30em", "48em", "62em", "80em"]; //default
// customBreakpoints.sm = customBreakpoints[0];
// customBreakpoints.md = customBreakpoints[1];
// customBreakpoints.lg = customBreakpoints[2];
// customBreakpoints.xl = customBreakpoints[3];

// const customIcons = {
//     typescript: {
//         path: <path fill="currentColor" d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"></path>,
//         viewBox: "0 0 40 40",
//     }
// }

// const customTheme = {
//     ...theme,
//     ...colors,
//     ...space,

//     // // icons: {
//     // //     ...theme.icons,
//     // //     ...customIcons,
//     // // },
//     // breakpoints: customBreakpoints,
//     // fonts: {
//     //     body: "system-ui, sans-serif",
//     //     heading: "Georgia, serif",
//     //     mono: "Menlo, monospace",
//     // },
//     // fontWeights: {
//     //     normal: 400,
//     //     medium: 500,
//     //     bold: 700,
//     // },
//     // lineHeights: {
//     //     normal: "normal",
//     //     none: "1",
//     //     shorter: "1.25",
//     //     short: "1.375",
//     //     base: "1.5",
//     //     tall: "1.625",
//     //     taller: "2",
//     // },
//     // letterSpacings: {
//     //     tighter: "-0.05em",
//     //     tight: "-0.025em",
//     //     normal: "0",
//     //     wide: "0.025em",
//     //     wider: "0.05em",
//     //     widest: "0.1em",
//     // },
//     // // sizes: {

//     // // },
//     // fontSizes: {
//     //     xs: "12px",
//     //     sm: "14px",
//     //     md: "16px",
//     //     lg: "18px",
//     //     xl: "20px",
//     //     "2xl": "24px",
//     //     "3xl": "28px",
//     //     "4xl": "36px",
//     //     "5xl": "48px",
//     //     "6xl": "64px",
//     // },
//     // fonts: {
//     //     heading: '"Avenir Next", sans-serif',
//     //     body: "system-ui, sans-serif",
//     //     mono: "Menlo, monospace",
//     // },
//     // fontSizes: {
//     //     xs: "0.75rem",
//     //     sm: "0.875rem",
//     //     md: "1rem",
//     //     lg: "1.125rem",
//     //     xl: "1.25rem",
//     //     "2xl": "1.5rem",
//     //     "3xl": "1.875rem",
//     //     "4xl": "2.25rem",
//     //     "5xl": "3rem",
//     //     "6xl": "4rem",
//     // },
//     // zIndices: {
//     //     hide: -1,
//     //     auto: "auto",
//     //     base: 0,
//     //     docked: 10,
//     //     dropdown: 1000,
//     //     sticky: 1100,
//     //     banner: 1200,
//     //     overlay: 1300,
//     //     modal: 1400,
//     //     popover: 1500,
//     //     skipLink: 1600,
//     //     toast: 1700,
//     //     tooltip: 1800,
//     // },

//     // logo: {
//     //     'margin-top': '-180px',
//     //     position: 'absolute',
//     //     top: 0,
//     //     left: 0,
//     //     color: "#fff",
//     //     "font-size": "120%",
//     //     "font-family": "Monda",
//     // },
//     // button: {
//     //     'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
//     // },

//     // // Add Chakra's icons
//     // ...theme.icons,
//     // // Your custom icons
//     // search: {
//     //     // The <path/> or <g> element for the svg. Note the use of  `fill=currentColor`
//     //     path: (
//     //         <path
//     //             fill="currentColor"
//     //             d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
//     //         />
//     //     ),
//     //     // This is the viewBox of the icon.
//     //     viewBox: "0 0 24 24",
//     // },
//     // typescript: {
//     //     path: <path
//     //         fill="currentColor"
//     //         d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"></path>,
//     //     viewBox: "0 0 40 40",
//     // }

// }

