import React, { useContext, createContext, useState, useEffect } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
export const useTheme = () => useContext(ThemeContext);

import { customTheme } from '@constants'

export function ProvideTheme({ children }) {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    )
}