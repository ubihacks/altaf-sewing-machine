import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import gradients from '../foundations/gradients';

const baseStyle = {
	maxW:'9xl',
	px: { base: '4', md: '8' },
};
const variants = {
	'gradient-purple': () => ({
		bgGradient: gradients['gradient-purple'],
		color: 'white',
		boxShadow:
			'0px 100px 80px rgba(84, 73, 224, 0.07), 0px 41.7776px 33.4221px rgba(84, 73, 224, 0.0503198), 0px 22.3363px 17.869px rgba(84, 73, 224, 0.0417275), 0px 12.5216px 10.0172px rgba(84, 73, 224, 0.035), 0px 6.6501px 5.32008px rgba(84, 73, 224, 0.0282725), 0px 2.76726px 2.21381px rgba(84, 73, 224, 0.0196802)',
		_hover: {},
		_active: {},
	}),
	'gradient-cyan': () => ({
		bgGradient: 'linear(to-b, #31D4DD, #3AF7EA)',
		color: 'black',
		boxShadow:
			'0px 100px 80px rgba(50, 213, 222, 0.07), 0px 41.7776px 33.4221px rgba(50, 213, 222, 0.0503198), 0px 22.3363px 17.869px rgba(50, 213, 222, 0.0417275), 0px 12.5216px 10.0172px rgba(50, 213, 222, 0.035), 0px 6.6501px 5.32008px rgba(50, 213, 222, 0.0282725), 0px 2.76726px 2.21381px rgba(50, 213, 222, 0.0196802)',
		_hover: {},
		_active: {},
	}),
	'gradient-red': () => ({
		bgGradient: 'linear(to-b, #E55B48, #E5734A)',
		color: 'white',
		boxShadow:
			'0px 100px 80px rgba(229, 92, 73, 0.07), 0px 41.7776px 33.4221px rgba(229, 92, 73, 0.0503198), 0px 22.3363px 17.869px rgba(229, 92, 73, 0.0417275), 0px 12.5216px 10.0172px rgba(229, 92, 73, 0.035), 0px 6.6501px 5.32008px rgba(229, 92, 73, 0.0282725), 0px 2.76726px 2.21381px rgba(229, 92, 73, 0.0196802)',
		_hover: {},
		_active: {},
	}),
	card_base: () => ({
		borderRadius: 'lg',
		px: { base: '4', md: '4' },
		py: '4',
	}),

	card: (props: StyleFunctionProps) => ({
		...props.theme.components.Container.variants.card_base(props),
		bg: 'white',
		boxShadow: "sm",
		_dark: {
			boxShadow: 'none',
			bg: 'gray.500',
		},
	}),
	card_active: (props: StyleFunctionProps) => ({
		...props.theme.components.Container.variants.card_base(props),
		bg: 'white',
		boxShadow: "md",
		_dark: {
			bg: 'dark.700',
		},
	}),

	option_card_base: (props: StyleFunctionProps) => ({
		border: '1px solid',
		cursor: 'pointer',
		borderRadius: 'lg',
		borderColor: mode('gray.200', 'whiteAlpha.400')(props),
		px: { base: '2', md: '2' },
		py: '2',
		textAlign: 'center'
	}),

	option_card: (props: StyleFunctionProps) => ({
		...props.theme.components.Container.variants.option_card_base(props),
		bg: 'white',
		_dark: {
			bg: 'dark.700',
			borderColor: 'gray.500',
		},
		_hover: {
			background: 'gray.100',
			_dark: {
				background: 'dark.500',
			}
		}
	}),
	option_card_active: (props: StyleFunctionProps) => ({
		...props.theme.components.Container.variants.option_card_base(props),
		bg: 'gray.100',
		_dark: {
			bg: 'dark.500',
			borderColor: 'gray.500',
		},
	}),

	option_list_base: () => ({
		cursor: 'pointer',
		borderRadius: 'lg',
		px: { base: '2', md: '2' },
		py: '2',
		textAlign: 'center'
	}),
	option_list: (props: StyleFunctionProps) => ({
		...props.theme.components.Container.variants.option_list_base(props),
		bg: 'bg-surface',
		_dark: {
			bg: 'gray.500',
			
		},
		_hover: {
			background: 'gray.100',
			_dark: {
				background: 'dark.500',
			}
		}
	}),
	option_list_active: (props: StyleFunctionProps) => ({
		...props.theme.components.Container.variants.option_list_base(props),
		bg: 'bg-surface',
		border: '2px solid',
		borderColor: 'cyan.700',
		_dark: {
			bg: 'dark.500',
			borderColor: 'cyan.700',
		},
	})

};
export default { baseStyle, variants };
