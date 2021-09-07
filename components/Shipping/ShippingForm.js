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

export default function ShippingForm({formik}){

    const classes = useStyles(); 

    return (
        <>
    
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <InputField
                    className={classes.textField} 
                    fullWidth
                    label="First Name"
                    name="first_name"
                    id="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="Last Name"
                    name="last_name"
                    id="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                />
            </Grid>
            
            <Grid item xs={12} md={12}>
                <InputField
                    className={classes.textField} 
                    fullWidth
                    label="Email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Grid>
        
            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    style={{width:"100%"}}
                    label="Address Line 1"
                    name="address_line_1"
                    id="address_line_1"
                    value={formik.values.address_line_1}
                    onChange={formik.handleChange}
                    error={formik.touched.address_line_1 && Boolean(formik.errors.address_line_1)}
                    helperText={formik.touched.address_line_1 && formik.errors.address_line_1}
                />
            </Grid>

            <Grid item xs={12}>
                <InputField 
                    className={classes.textField}
                    style={{width:"100%"}}
                    label="Address Line 2"
                    name="address_line_2"
                    id="address_line_2"
                    value={formik.values.address_line_2}
                    onChange={formik.handleChange}
                    error={formik.touched.address_line_2 && Boolean(formik.errors.address_line_2)}
                    helperText={formik.touched.address_line_2 && formik.errors.address_line_2}
                />
            </Grid>

            <Grid item xs={12} md={6}>

                <InputField 
                    className={classes.textField}
                    fullWidth
                    label="City"
                    name="city"
                    id="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Zip Code"
                name="zip_code"
                id="zip_code"
                value={formik.values.zip_code}
                onChange={formik.handleChange}
                error={formik.touched.zip_code && Boolean(formik.errors.zip_code)}
                helperText={formik.touched.zip_code && formik.errors.zip_code}
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="State/Province"
                name="state"
                id="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Phone Number"
                name="phone"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
            />
            </Grid>

            <Grid item xs={12}>

            <FormControlLabel
            control={
            <Checkbox
            value={formik.values.create_account}
            onChange={formik.handleChange}
            error={formik.touched.create_account && Boolean(formik.errors.create_account)}
            helperText={formik.touched.create_account && formik.errors.create_account}
            name="create_account"
            color="primary"
            />
            }
            label="Create Account (Optional)"
            />
            </Grid>
            {                console.log(formik.values.create_account)
}
            {
                formik.values.create_account &&
            <>
            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <InputField 
                className={classes.textField}
                fullWidth
                label="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                error={formik.touched.confirm_assword && Boolean(formik.errors.confirm_password)}
                helperText={formik.touched.confirm_password && formik.errors.confirm_password}
            />
            </Grid>
            </>
            }
            

        </Grid>

        </>
        

    )

}