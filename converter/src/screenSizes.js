const size = {
	small: '321px',
	medium: '376px',
	plus: '415px',
	tablet: '768px',
	big: '1025px',
	desktop: '2561px'
};

export const screenSizes = {
	medium: `(min-width: ${size.medium})`,
	plus: `(min-width: ${size.plus})`,
	tablet: `(min-width: ${size.tablet})`,
	big: `(min-width: ${size.big})`,
	desktop: `(min-width: ${size.desktop})`
};
