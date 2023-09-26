import { theme } from 'app/styles/theme';
import { ThemeProvider } from '@emotion/react'

export const withTheme = (component: () => React.ReactNode) => () => (
    <ThemeProvider theme={theme}>
        {component()}
    </ThemeProvider>
);