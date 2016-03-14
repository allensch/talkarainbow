import Url from 'url'
import Redis from 'redis'
import Debug from 'debug'
import * as Config from './config'

var client = null, auth = null, uri = null

const debug = Debug('cache-redis')
const service = Config.getCacheURL()

if (service) {
	uri = Url.parse(service)
	client = Redis.createClient(uri.port, uri.hostname)
	if (uri.auth && uri.auth.length) {
		auth = uri.auth.split(':')[1]
		client.auth(auth)
	}
} else {
	client = Redis.createClient()
}

client.on('ready', function() {
	debug('redis ready')
})

client.on('error', function(error) {
	debug(error, 'redis error')
})

export default client
export { client, auth, uri }
