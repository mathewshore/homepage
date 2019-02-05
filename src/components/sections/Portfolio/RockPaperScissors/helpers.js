import tools from './tools';

export const getTool = toolValue => tools.find((tool) => toolValue === tool.value);
