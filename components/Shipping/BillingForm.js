import React from 'react';
import InputField from '../Ui/InputField';
import { Grid, makeStyles, Checkbox, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles(()=>({

    textFieldContainer:{
        display: 'flex',
        flexWrap: 'wrap'
    },

    textField:{
        marginBottom:"14px",
    }
}),
{index:1})

export default function BillingForm({formik}){

    const classes = useStyles(); 

    return (
        <>
    
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <InputField
                    className={classes.textField} 
                    fullWidth
                    label="First Name"
                    name="billing_first_name"
                    id="billing_first_name"
                    value={formik.values.billing_first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.billing_first_name && Boolean(formik.errors.billing_first_name)}
                    helperText={formik.touched.billing_first_name && formik.errors.billing_first_name}
                />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="Last Name"
                    name="billing_last_name"
                    id="billing_last_name"
                    value={formik.values.billing_last_name}
                    onChange={formik.handleChange}
                    error={formik.touched.billing_last_name && Boolean(formik.errors.billing_last_name)}
                    helperText={formik.touched.billing_last_name && formik.errors.billing_last_name}
                />
            </Grid>
        
            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    style={{width:"100%"}}
                    label="Address Line 1"
                    name="billing_address_line_1"
                    id="billing_address_line_1"
                    value={formik.values.billing_address_line_1}
                    onChange={formik.handleChange}
                    error={formik.touched.billing_address_line_1 && Boolean(formik.errors.billing_address_line_1)}
                    helperText={formik.touched.billing_address_line_1 && formik.errors.billing_address_line_1}
                />
            </Grid>

            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    style={{width:"100%"}}
                    label="Address Line 2"
                    name="billing_address_line_2"
                    id="billing_address_line_2"
                    value={formik.values.billing_address_line_2}
                    onChange={formik.handleChange}
                    error={formik.touched.billing_address_line_2 && Boolean(formik.errors.billing_address_line_2)}
                    helperText={formik.touched.billing_address_line_2 && formik.errors.billing_address_line_2}
                />
            </Grid>

            <Grid item xs={12} md={6}>

                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="City"
                    name="billing_city"
                    id="billing_city"
                    value={formik.values.billing_city}
                    onChange={formik.handleChange}
                    error={formik.touched.billing_city && Boolean(formik.errors.billing_city)}
                    helperText={formik.touched.billing_city && formik.errors.billing_city}
                />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Zip Code"
                name="billing_zip_code"
                id="billing_zip_code"
                value={formik.values.billing_zip_code}
                onChange={formik.handleChange}
                error={formik.touched.billing_zip_code && Boolean(formik.errors.billing_zip_code)}
                helperText={formik.touched.billing_zip_code && formik.errors.billing_zip_code}
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="State/Province"
                name="billing_state"
                id="billing_state"
                value={formik.values.billing_state}
                onChange={formik.handleChange}
                error={formik.touched.billing_state && Boolean(formik.errors.billing_state)}
                helperText={formik.touched.billing_state && formik.errors.billing_state}
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Phone Number"
                name="billing_phone"
                id="billing_phone"
                value={formik.values.billing_phone}
                onChange={formik.handleChange}
                error={formik.touched.billing_phone && Boolean(formik.errors.billing_phone)}
                helperText={formik.touched.billing_phone && formik.errors.billing_phone}
            />
            </Grid>
            

        </Grid>

        </>
        

    )

}