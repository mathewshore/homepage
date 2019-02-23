import tools from './tools';
import find from 'lodash/find';

export const getTool = toolValue => find(tools, { value: toolValue });
