import React from 'react';
import { makeStyles } from '@material-ui/core';
import TitleHeading from '../components/Ui/TitleHeading';

const useStyles = makeStyles((theme)=>({
    root: {
        padding: '40px 15%',
        backgroundColor: '#fff'
    }
}),
{index:1})

export default function Privacy(){

    const classes = useStyles(); 

    return(
            <div className={classes.root}>
                <TitleHeading>
                    Privacy Policy
                </TitleHeading>
                <p>
                    Rénova Belle values its customers and respects their privacy. Any personal information you choose to provide to Rénova Belle (e.g., contact information, date of birth, gender, payment information, username, and password) will be collected in an effort to improve your online experience and to communicate with you about our products, services, contests and promotions. For example, you may choose to provide personal information to Rénova Belle when you register an account with us, place an order on our website, register to be notified of special deals, or enter a contest or promotion on our website. Rénova Belle may use the personal information you provide to us to send you promotional materials or other communications, provide or deliver services to you, allow you to manage your own security and account information, process payments for orders placed on our website, respond to your inquiries, communicate with you about and administer your participation in contests or promotions through our website, and comply with applicable legal requirements, relevant industry standards, and our policies. If Rénova Belle intends to use your personal information in other ways, Rénova Belle will provide specific notice at the time of collection. This Privacy Policy covers any personal information that Rénova Belle obtains from you when you use our website, including during the registration process. Rénova Belle also collects certain information from you automatically. When you visit Rénova Belle’s website, for example, we collect certain information about your usage or device by automated means. We may also collect information about your usage and browsing habits via various web-based technologies. Specifically, Rénova Belle makes current use of cookies and third-party web analytic services, which are both described in further detail below. We may use this information collected through automated means for purposes of market research, data analytics, and system administration purposes, including compliance with our legal obligations, policies and procedures, and relevant industry standards.
                </p>

                <br />

                <h4>
                    Cookies
                </h4>
                <br />
                <p>
                    When you visit our website, a cookie is placed on your machine (if you accept cookies) or is read if you have already visited the site previously. Please note that if you restrict or disable cookies, you may not be able to use all of the features on our website. One use of cookies is to assist in the collection of site-visitation statistics. Thus, in conjunction with obtaining information through cookies, our web servers may log details such as your operating system type, browser type, domain, IP address, language your system uses, country and time zone in which your device is located, and other system settings. Web beacons, also known as clear gif technology or action tags, may be used to assist in delivering the cookie on our website and control which web servers collect the aforementioned information.
                </p>
                <br />
                <h4>
                    Third-Party Web Analytics
                </h4>
                <br />
                <p>
                We also use third-party web analytics services on our website, currently Google Analytics.
                <br />
                The service providers that administer such third-party web analytics services use technologies such as cookies, web server logs, and web beacons to help us analyze how visitors use the site. The information collected through these means is thus disclosed to the third-party service providers.
                <br />
                You may deactivate the ability of these analytics services to analyze your browsing activities on our website by declining cookies sent by these third parties.
                In addition, we may also contract with third-party advertising networks that collect IP addresses and other information through the use of cookies, web server logs, and web beacons on our website. These third-party advertising networks use the information collected to provide advertisements about products and services tailored to your interests.
                <br />
                We encourage you to check back periodically to see if we have made any changes to this Privacy Policy. If we make any material changes, we will post a notice on our homepage.
                <br />
                By using our website, you agree to the terms of our Privacy Policy.
                </p>
                <br />
            </div>
    )
}