import englishMessages from './locales/en_US.json';
import spanishMessages from './locales/es_ES.json';

export function getCurrentLocale() {
	const userLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
	if (userLanguage === 'en-US') {
		return {
			locale: 'en',
			messages: {
				...englishMessages
			}
		};
	}

	// Default spanish
	return {
		locale: 'es',
		messages: {
			...spanishMessages
		}
	};
}
