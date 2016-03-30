import request from 'superagent'
import Rx from 'rx'
import config from 'config'

const buildRequest = (httpMethod, apiMethod, params) =>
    Rx.Observable.create((cb) =>
        request[httpMethod](config.queryConfig.http.restEndpoint + apiMethod)
            .set(config.queryConfig.http.headers)[httpMethod === 'get' ? 'query' : 'send'](params)
            .end((__, res) => cb.onNext(res.body)))

export default {
  get: (apiMethod) => buildRequest('get', apiMethod),
  post: (apiMethod, params) => buildRequest('post', apiMethod, params)
}
