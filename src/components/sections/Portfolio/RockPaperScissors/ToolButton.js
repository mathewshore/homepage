import React from 'react';
import { Button } from '@material-ui/core';


const ToolButton = ({ disabled, tool, buttonClass, onClick }) => (
    <Button
        variant='fab'
        disabled={disabled}
        key={tool.value}
        onClick={() => onClick(tool.value)}
        classes={{ root: buttonClass }}
    >
        {tool.icon}
    </Button>
);

export default ToolButton;
