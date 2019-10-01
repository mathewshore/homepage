import tools from './tools';
import find from 'lodash/find';

export const getTool = value => find(tools, { value });
