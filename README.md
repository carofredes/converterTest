# converterTest

Notes:

- For decimals, you need to enter a dot instead of comma
- The tests are incomplete, I had some issues adding the test for the components that uses Redux and React intl and I didn't want to delay the deliver more time because of this, so I just added some example tests that I would need to continue in the future
- Flags from  https://flagpedia.net
  -For this small project, maybe using Redux is a little too much, but the infrastructure is not that big to implement and it would help a lot to have all that in place for when more api calls are needed, you already have a code standard and it's easier to expand.
- Supported languages: Spanish(default) and English

Improvements:

- Allow the user to use comma for decimals. Also trim a little the decimals because some numbers are too big
- Update currency description names to be plural when more than 1 and also add the currencies description to the i18n tool
- The error handling is basic and for a bigger app is not scalable as it is now. It will be needed to create an Error component that handles these cases and that doesn't need to refresh the entire page to fix it.
- The way of getting the images for the flags is maybe not the best because I'm making multiple requests for each one and it's too hardcoded. It will be better to have an API that sends the rates with the description text and the img for the flag to prevent any issue/typo on the name and have it cached, but I think it's good enough for a demo and it gives me more room to play with CSS.
- Another important thing to add would be a function that refreshes the cached data every x time, maybe every minute or 30 seconds, and also refresh the calculation. The api that I'm using https://ratesapi.io/ only provides the day/month/year for the rate, but it will be good to have the time too, and display it next to the date to be more accurate.
- At the beginning, it would be good to use the currency of the country's user and preselect that instead of Euro.
