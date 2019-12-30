import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const styles = ({ spacing, palette, breakpoints }) => ({
    headerContainer: {
        padding: spacing.unit * 3,
        backgroundColor: palette.primary.light,
        display: 'flex',
        [breakpoints.up('xl')]: {
            padding: spacing.unit * 5
        }
    },
    listContainer: {
        background: '#fff',
        padding: `${spacing.unit * 2}px ${spacing.unit * 3}px`,
        [breakpoints.up('xl')]: {
            padding: `${spacing.unit * 3}px ${spacing.unit * 5}px`
        }
    },
    listItem: {
        padding: `${spacing.unit * 1.5}px 0`,
        [breakpoints.up('xl')]: {
            padding: `${spacing.unit * 2.5}px 0`
        }
    },
    listTitleIcon: {
        marginLeft: 'auto',
        [breakpoints.up('xl')]: {
            fontSize: 44
        }
    }
});

const SkillList = props => {
    const { classes, ListIcon } = props;

    return (
        <Card>
            <div className={classes.headerContainer}>
                <Typography variant="title">
                    {props.title}
                </Typography>
                <ListIcon className={classes.listTitleIcon} />
            </div>
            <div className={classes.listContainer}>
                {map(props.skills, ({ name }, i) => (
                    <Typography
                        key={i}
                        classes={{ root: classes.listItem }}
                    >
                        {name}
                    </Typography>
                ))}
            </div>
        </Card>
    );
};

SkillList.propTypes = {
    classes: PropTypes.object.isRequired,
    skills: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(SkillList);
