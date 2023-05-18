import { createTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export default createTheme({
	palette: {
		primary: {
			main: '#03CCCC',
		},
		secondary: {
			main: '#FEB42B',
		},
		text: {
			secondary: grey[700],
			disabled: grey[400],
		},
	},
	shape: {
		borderRadius: 5,
	},
	typography: {
		h1: {
			// 20 px + bold
			fontSize: '1.25rem',
			fontWeight: 'bold',
		},
		h2: {
			// 16 px + bold
			fontSize: '1rem',
			fontWeight: 'bold',
		},
		h3: {
			// 15 px + bold
			fontSize: '0.9375rem',
			fontWeight: 'bold',
		},
		h4: {
			// 14 px + bold
			fontSize: '0.875rem',
			fontWeight: 'bold',
		},
		subtitle1: {
			// 15 px + grey[700]
			fontSize: '0.9375rem',
			color: grey[700],
		},
		subtitle2: {
			// 14 px + grey[500]
			fontSize: '0.875rem',
			color: grey[500],
		},
		body1: {
			// 14 px
			fontSize: '0.875rem',
		},
		body2: {
			// 13 px
			fontSize: '0.8125rem',
		},
		caption: {
			// 11 px
			color: grey[500],
			fontSize: '0.6875rem',
		},
	},
	overrides: {
		MuiButton: {
			containedPrimary: {
				color: 'white',
			},
		},
	},
});
