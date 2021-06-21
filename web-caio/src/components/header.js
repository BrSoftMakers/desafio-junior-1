import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const Header = (props) => {

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
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Link href="/">
                    <Typography variant="h4">
                        PetShop
                    </Typography>
                </Link>
            </div>
        </div>
    )
}

export default Header;