/*eslint-disable */
import { uniq } from 'lodash';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';
import User, { createURL, gravatar } from './src/user';

const wes = new User('wes', 'wes@gmail.com', 'wes.com');

const profile = createURL('wes.name');
const image = gravatar(wes.email);
console.log(image);
