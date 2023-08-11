import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"


const baseStyle = {
	table: {
		bg: 'bg-surface',
		borderRadius:"lg",
		
	},
	maxW: '7xl',
	px: { base: '4', md: '8' },
	
}

const variants = {
	simple: (props: StyleFunctionProps) => ({
		th: {
			color: 'default',
			bg: mode('gray.100', 'gray.700')(props),
			p:'5'
		},
		tbody: {
			bg: 'bg-card'
		},
		tr:{
			_hover: { bg: mode('gray.50', 'gray.500')(props) },
			
			
		}
	}),

}

const sizes = {
	md: {

		td: {
			fontSize: 'sm',
		},
	},
}

export default {
	sizes,
	baseStyle,
	variants,
}
