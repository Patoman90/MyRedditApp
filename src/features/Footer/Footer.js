import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



//Styles
const footerStyles = makeStyles((theme) => ({
    
  }));

const Footer = () => {

    const classes = footerStyles;

    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <footer>
                    <h2>
                        Student project by Patrick.
                    </h2>
                </footer>
            </Grid>
        </Grid>
    );

}

export default Footer;