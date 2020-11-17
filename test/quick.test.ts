import { Client, ExternalController } from '../src'

const username = process.env.BANDWIDTH_USERNAME
const password = process.env.BANDWIDTH_PASSWORD

const accountId = process.env.BANDWIDTH_ACCOUNT_ID || ''
const accountIdNum = Number(accountId)
const applicationId = process.env.BANDWIDTH_APPLICATION_ID


const client = new Client({
    basicAuthPassword: password,
    basicAuthUserName: username
})

const controller = new ExternalController(client)

describe('My Test Suite', () => {
    it('My Test Case', async () => {

        try {
            const res = await controller.getApplicationById(accountIdNum, applicationId)
            console.log(res.statusCode)
        } catch(e) {
            console.log(e.message)
        }

      

      expect(true).toEqual(true)
    })
  })