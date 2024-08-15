import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blue: {
      200: '#BEE3F8',
      300: '#90CDF4',
      600: '#2B6CB0',
    },
    green: {
      200: '#C6F6D5',
      300: '#9AE6B4',
      600: '#38A169',
    },
    pink: {
      200: '#FBB6CE',
      600: '#B83280',
    },
    gray: {
      50: '#F9FAFB',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      variants: {
        solid: {
          fontWeight: 'bold',
        },
      },
    },
    Input: {
      baseStyle: {
        borderRadius: 'md',
      },
    },
  },
});

export default theme;
