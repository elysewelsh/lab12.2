Assignment: 
  >The owner of “The Daily Grind” coffee shop was so impressed with your first server that they have a new request. They want to add a “Fun Fact of the Day” to a digital screen in their shop. To do this, they need an API endpoint on their server that fetches a random fun fact from an external public API and provides it in a simple format.

Reflection Questions: 
1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
  >Along with the random useless fact, the data returned from their API includes an ID for the fact, the source and URL of the fact, the language the fact is in, and the url of the fact itself. This information is useless to a user. A clean, minimal response means the data is easier to work with and the most useful information can be obtained and used quickly.
1. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
  >The Axios error object includes much more than the error message. If it was sent to the client, only the message property would be useful for users, and it's not guaranteed that the error.message property would be in the correct format or include useful information.
1. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
  > We did this in our lab group and it required: accessing the query from the request using req.query (in our case, the key is "language") and using the query value within the API request to obtain the useless fact ("en" for English or "de" for German as the "language" value in `/random?language=${language}`).
