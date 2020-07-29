const { Verifier } = require('@pact-foundation/pact')

const path = require('path')
var opts = {
  providerBaseUrl: 'http://localhost:3001', //Our service url
  pactUrls: [
    //Our shared file location
    path.resolve(
      __dirname,
      '../../../contract-testing/consumer-test/pacts/myconsumer-myprovider.json', //Make sure change this path
    ),
  ],
}

describe('Pact Provider verification', () => {
  it('Should validate the users consumer', async () => {
    await new Verifier().verifyProvider(opts)
  })
})
