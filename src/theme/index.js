/**
 * Design System Theme
 * Centralized design tokens for consistent styling across the application
 */

export const theme = {
    colors: {
        primary: '#0056b3', // Deep industrial blue
        secondary: '#6c757d', // Slate gray
        accent: '#e31e24', // Alert/Action red (if needed, or keep compliant)
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#1a1a1a', // Darker for better contrast
        white: '#ffffff',
        text: {
            primary: '#1a1a1a', // High contrast
            secondary: '#4a4a4a',
            light: '#6c757d',
            inverse: '#ffffff'
        },
        background: {
            primary: '#ffffff',
            secondary: '#f4f6f8', // Industrial light gray
            dark: '#1a1a1a',
            overlay: 'rgba(0, 0, 0, 0.7)'
        },
        border: '#dee2e6'
    },

    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        xxl: '3rem',      // 48px
        section: '5rem',  // 80px - Key for TGI look
    },

    breakpoints: {
        mobile: '768px',
        tablet: '960px',
        desktop: '1200px',
    },

    typography: {
        fontFamily: "'PT Sans', sans-serif",
        fontSize: {
            xs: '0.75rem',    // 12px
            sm: '0.875rem',   // 14px
            base: '1rem',     // 16px
            lg: '1.125rem',   // 18px
            xl: '1.25rem',    // 20px
            '2xl': '1.5rem',  // 24px
            '3xl': '2rem',    // 32px
            '4xl': '3rem',    // 48px
            '5xl': '4.5rem',  // 72px - Bigger hero text
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },
        lineHeight: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.75,
        },
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },

    borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.25rem', // 4px - sharper look
        lg: '0.5rem',  // 8px
        full: '9999px',
    },

    transitions: {
        fast: '150ms ease-in-out',
        normal: '250ms ease-in-out',
        slow: '350ms ease-in-out',
    },

    zIndex: {
        dropdown: 100,
        sticky: 1020, // Bootstrap standard
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
    },
};

export default theme;
