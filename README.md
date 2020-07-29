
# CDC Testing using Pact JS - example by @hgcstr

This is a basic example for pact is divided in 2 different repos.

consumer-test: uses pact to create the mocked server and the contract.

provider-server: uses pact to read the contract created in "consumer-test" and verify agaisnt it.


## Provider server side testing

### Run server

To fire up the server and have it do stuff, you'll need to start it with the familiar command(after a npm i):

```
npm start
```

### Accessing the server and returning data

The server should be running by now, and you can visit `http://localhost:3001` to see it in action. 

By default, it doesn't return a great deal, but if you visit `http://localhost:3001/users` -- which will automatically issue a GET request to our running API server -- you'll see a simple JSON object populated with some dummy user data.



##Run tests
```
npm test
```