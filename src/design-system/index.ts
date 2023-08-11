import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import * as components from './components';
import * as foundations from './foundations';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
	cssVarPrefix: 'ck',
};

const myTheme: Record<string, any> = extendTheme({
	config: {
		...config,
	},
	...foundations,
	components: { ...components },
	breakpoints: {
		sm: '34em',
		md: '52em',
		lg: '68em',
		xl: '90em',
		'2xl': '100em',
	}
});

export default myTheme;
