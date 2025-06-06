/* eslint-disable import/no-cycle */
import { initializers } from '@dropins/tools/initializer.js';
import { initialize, setFetchGraphQlHeaders, setEndpoint } from 'http://localhost:3002/api.js';//'@plp/api.js';
import { initializeDropin } from './index.js';
import { fetchPlaceholders } from '../commerce.js';
import { getHeaders } from '../configs.js';

await initializeDropin(async () => {
    console.log('Search Initializer');
//   setFetchGraphQlHeaders((prev) => ({ ...prev, ...getHeaders('cs') }));
setEndpoint('https://catalog-service.adobe.io/graphql');

setFetchGraphQlHeaders({
    
  });

  const labels = await fetchPlaceholders();
  const langDefinitions = {
    default: {
      ...labels,
    },
  };

  return initializers.mountImmediately(initialize, { langDefinitions });
})();
