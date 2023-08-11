import { mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools';

const variants = {
	outline: (props: StyleFunctionProps) => ({
		field: {
			bg: mode('white', 'gray.700')(props),
			_focus: {
				borderColor: 'brand.500',
				boxShadow: mode(
					`0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
					`0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
				)(props),
			},
		},
	}),
	'outline-on-accent': (props: StyleFunctionProps) => ({
		field: {
			bg: 'white',
			color: 'gray.900',
			borderWidth: '1px',
			borderColor: 'brand.50',
			_placeholder: {
				color: 'gray.500',
			},
			_hover: {
				borderColor: 'brand.100',
			},
			_focus: {
				borderColor: 'brand.200',
				boxShadow: `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
			},
		},
	}),
	filled: (props: StyleFunctionProps) => {
		if (props.colorScheme === 'gray') {
			return {
				field: {
					bg: mode('white', 'gray.700')(props),
					_focus: {
						borderColor: 'accent',
						bg: mode('white', 'gray.700')(props),
					},
					_hover: {
						borderColor: mode('gray.200', 'gray.600')(props),
						bg: mode('white', 'gray.700')(props),
					},
				},
			};
		}
		return {
			field: {
				bg: 'bg-accent-subtle',
				color: 'on-accent',
				_placeholder: {
					color: 'on-accent',
				},
				_hover: {
					borderColor: 'brand.400',
					bg: 'bg-accent-subtle',
				},
				_focus: {
					bg: 'bg-accent-subtle',
					borderColor: 'brand.300',
				},
			},
		};
	},
};

export default {
	variants,
	defaultProps: {
		colorScheme: 'gray',
	},
};
