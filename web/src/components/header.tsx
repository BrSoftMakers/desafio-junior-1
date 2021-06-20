import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles , withStyles } from '@material-ui/core/styles';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {

    const useStyles =  makeStyles(theme => ({
        root: {
            height: "20vh",
            width: "100vw",
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#FF8C00"
        },
        title: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: "2vw",
        },
        titleText: {

        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h4" className={classes.titleText}>
                    PetShop
                </Typography>
            </div>
        </div>
    )
}