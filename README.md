# converterTest

The way of getting the images for the flags is not the best because Im making multiple request for each one and it's too harcoded. It will be better to have an API that sends the rates with the description text and the img for the flag to prevent any issue/typo, but I think it's good enough for a demo and it gives me more room to play with CSS.
https://flagpedia.net

One improvement could be limit the number of decimals or if there are more than 3 decimal numbers, after the third decimal style the rest using a lighter font color so it's not so anoying

Another important thing to add would be a function that refreshes the cached data every x time, maybe every minute or 30 seconds, and also refresh the calculation. The api that Im using https://ratesapi.io/ only provides the day/month/year for the rate, but it will be good to have the time too, and display it next to the date to be more accurate.

Another improvement could be to, at the beggining, use the currency of the country's user and preselect that instead of Euro.

For this small project, maybe using Redux is a little too much, but the infraestructure is not that big to implement and it would help a lot to have all that in place for when more api calls are needed, you already have a code standard and it's easier to expand.

Notes:

- For decimals, you need to enter a dot instead of comma
- I should update the currency names to be plural when more than 1 and also add the currencies description to the i18n tool
- The error handling is basic and for a bigger app is not scalable as it is now. It will be needed to create an Error component that handles this cases and that doesn't need to refresh the entire page to fix it.
- The tests are incomplete, I had some issues adding the test for the components that uses Redux and React intl and I didn't want to delay the deliver more time because of this, so I just add some example test that I would need to continue in the future
