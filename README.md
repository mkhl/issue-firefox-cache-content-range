# Demonstrate a problem with the Firefox cache

## Reproducing the problem:

*	Clone this repository
*	`npm install`
*	`npm start`
*	Open Firefox
*	Open the Developer Tools
*	Navigate to `http://localhost:8080/`
*	Notice that both scripts were loaded from the server, and some message appeared in the Console regarding moment and angular-js
*	Reload the page
*	Notice that both scripts were loaded from the cache because the server responded with a 304, but that the loaded `vendor.js` script was 0 bytes in size. Notice also this error message in the Console:

	> ReferenceError: moment is not defined


## Details about the problem:

The problem only seems to manifest if

1.	The script is transferred with a `Content-Range` header.

	Remove the header (./serve.js:6) and Firefox loads the script from cache successfully.

2.	The script is sufficiently large.

	It contains a large inline source map (./public/vendor.js:83042).
	Remove this line and Firefox loads the script from cache successfully.
