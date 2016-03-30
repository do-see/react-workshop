require 'net/http'
require 'json'
uri = URI('https://graph.sitrep-vatcinc.com/search/dummy-data/eramon/')
req = Net::HTTP::Post.new(uri, initheader = {
  'Content-Type' =>'application/json',
  'Authorization' => 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzd' +
   'WIiOiJmbG9yaWFuQHhwYW5kbW1pLmNvbSIsImV4cCI6MTQ1OTA3MDczN30.KcER2ttiz5NR' +
   'wwni5-GjqKqiyeE3zfxM_GXGbLRpCxb5cyK2w-VvbQjqsg3PLMAh7DpxA5I56DWagMGJoEp4RA'
})

def rng_latency
  Random.new.rand(10...1200)
end

def rng_bandwidth
  Random.new.rand(10737240...107378240)
end

def rng_load
  Random.new.rand(0...500) / 100
end
res = Net::HTTP.new(uri.hostname, uri.port)
res.use_ssl = true
  5.times do |routerNo|
    1000.times do |cnt|
      req.body = {
        router_id: 'cisco-asa-fw-' + routerNo.to_s,
        cpu_load_mean: rng_load,
        cpu_load_1: rng_load,
        cpu_load_5: rng_load,
        cpu_load_15: rng_load,
        throughput: [
          ge1: rng_bandwidth,
          ge2: rng_bandwidth,
          ge3: rng_bandwidth,
          ge4: rng_bandwidth,
          ge5: rng_bandwidth,
          ge6: rng_bandwidth,
          ge7: rng_bandwidth,
          ge8: rng_bandwidth
        ],
        latency_ms: [
          ge1: rng_latency,
          ge2: rng_latency,
          ge3: rng_latency,
          ge4: rng_latency,
          ge5: rng_latency,
          ge6: rng_latency,
          ge7: rng_latency,
          ge8: rng_latency
        ]
      }.to_json
      res.request(req)
  end
end
