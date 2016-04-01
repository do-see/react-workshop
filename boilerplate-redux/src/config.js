export default {
  perPage: 6,
  tableCells: [
    { id: 'router_id', header: 'Router' },
    { id: 'cpu_load_mean', header: 'Mean CPU Load' },
    { id: 'cpu_load_1', header: 'CPU Load 1 Minute' },
    { id: 'cpu_load_5', header: 'CPU Load 5 Minute' },
    { id: 'cpu_load_15', header: 'CPU Load 15 Minute' }
  ],
  queryConfig: {
    queryBuilders: [
      {id: 'router_name', internalId: 'router_id', type: 'text', label: 'Device Name'},
      {id: 'routers', internalId: 'router_id', type: 'list', label: 'Device Type'}
    ],
    restEndpoint: 'https://graph.sitrep-vatcinc.com/search/dummy-data/_search',
    auth: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzd' +
     'WIiOiJmbG9yaWFuQHhwYW5kbW1pLmNvbSIsImV4cCI6MTQ1OTA3MDczN30.KcER2ttiz5NR' +
     'wwni5-GjqKqiyeE3zfxM_GXGbLRpCxb5cyK2w-VvbQjqsg3PLMAh7DpxA5I56DWagMGJoEp4RA',
    baseQuery: {
      aggs: {
        router_names: {
          filter: {},
          aggs: {
            'router_id': {
              filter: {},
              aggs: {
                'router_id': {
                  terms: {
                    field: 'router_id.raw',
                    size: 0
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
