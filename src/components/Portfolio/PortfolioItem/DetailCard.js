import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';


const styles = ({ spacing }) => ({
    paperRoot: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 2,
        color: 'white',
        background: `${grey[900]}e9`, // e9 for transparency
        padding: spacing.unit * 2,
        transition: 'opacity 0.3s ease',
        opacity: 0,
        '&.visible': {
            opacity: 1
        }
    },
    typographyTitle: {
        color: grey[50]
    },
    typographyDescription: {
        color: grey[50],
        marginTop: spacing.unit
    }
});

const DetailCard = props => {
    const { classes } = props;

    const paperClassNames = [classes.paperRoot];
    if (props.visible) {
        paperClassNames.push('visible');
    }

    return (
        <Paper
            component={ButtonBase}
            classes={{ root: join(paperClassNames, ' ') }}
            onClick={props.onClick}
        >
            <div>
                <Typography
                    variant="title"
                    classes={{ root: classes.typographyTitle }}
                >
                    {props.title}
                </Typography>
                <Typography classes={{ root: classes.typographyDescription }}>
                    {props.description}
                </Typography>
            </div>
        </Paper>
    );
};

DetailCard.propTypes = {
    classes: PropTypes.object.isRequired,
    visible: PropTypes.bool,
    description: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
};

export default withStyles(styles)(DetailCard);
