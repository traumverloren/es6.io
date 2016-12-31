/*eslint-disable */
import { uniq } from 'lodash';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';

console.log(apiKey, url);

const ages = [1,1,4,52,12,4];

console.log(uniq(ages));


sayHi('wes');
