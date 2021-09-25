import React from 'react';
import { makeStyles } from '@material-ui/core';
import TitleHeading from '../components/Ui/TitleHeading';
import { Description } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    root: {
        padding: '40px 20%',
            [theme.breakpoints.down("sm")]: {
                padding: '40px 10%'
            },
        backgroundColor: '#fff',
    },
    heading: {
        padding: '14px 0px 5px'
    },
}),
{index:1})

export default function TermsOfUse(){

    const classes = useStyles(); 

    return(
            <div className={classes.root}>
                <TitleHeading>
                    Terms of Use
                </TitleHeading>
                
                <h4 className={classes.heading} >
                Terms and Conditions
                </h4>

                <p>
                Please read the following additional terms and conditions of use carefully before using this website. All users of this site agree that access to and use of this site are subject to the following terms and conditions and other applicable laws that which Rénova Belle may modify, alter or update at any time in its sole discretion and that which are binding on you. If you do not agree to these terms and conditions, please do not use this site.
                </p>

                <h4 className={classes.heading} >
                No Minors
                </h4>

                <p>
                You must be 18 years old or the age of majority in your jurisdiction in order to make a purchase on RenovaBelle.com. If you are under 18 years old or the age of majority in your jurisdiction, then you may not make a purchase on our Site. If you are under 13 years old, you may browse our Site. However, you may not provide personal information to us nor register on the Site. This Site is not directed to children under 13 years old. By accessing or using the Site, you are acknowledging that you have read, understand, and agree, without limitation or qualification, to be bound by these Terms and Conditions.
                </p>
                
                <h4 className={classes.heading} >
                Copyright
                </h4>

                <p>
                All content included in this site, including but not limited to text, graphics, code, images, audio and video clips, and logos is the property of Rénova Belle or is licensed to Rénova Belle and is protected by United States and international copyright laws. All rights reserved. Permission is granted to electronically copy and/or print hard copy portions of this site for the sole purpose of placing an order with RenovaBelle.com or purchasing Rénova Belle products. Any other use, including but not limited to the reproduction, distribution, display or transmission of the content of this site is strictly prohibited.
                </p>

                <h4 className={classes.heading} >
                Trademarks
                </h4>

                <p>
                The Rénova Belle name and logo are trademarks of TB Global LLC and may not be copied, imitated or used, in whole or in part, without the prior consent of Rénova Belle.
                </p>

                <h4 className={classes.heading} >
                Disclaimer
                </h4>

                <p>
                This site and the materials and products in this site are provided “AS IS” and without warranties of any kind, whether express or implied. To the fullest extent permissible pursuant to applicable law, Rénova Belle disclaims all warranties, express or implied, including, but not limited to implied warranties of merchantability and fitness for a particular purpose and non-infringement. Rénova Belle does not represent or warrant that the functions contained in the site will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes the site available are free of viruses or other harmful components. Rénova Belle does not make any warranties or representations regarding the use of the materials in this site in terms of its correctness, accuracy, reliability or otherwise. Some or all of the above limitations may not apply to you depending on applicable state laws, and you might have additional rights pursuant thereto.
                </p>

                <h4 className={classes.heading} >
                Limitation of Liability
                </h4>

                <p>
                Rénova Belle shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials in this site or the performance of products even if Rénova Belle has been advised of the possibility of such damages. Applicable law may not allow the limitation or exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you.
                </p>

                <h4 className={classes.heading} >
                Florida Law
                </h4>

                <p>
                The internal laws of the State of Florida shall govern any issues pertaining to use of Rénova Belle, each party irrevocably submits to exclusive jurisdiction and venue in the courts of Florida.
                </p>

                <h4 className={classes.heading} >
                External Sites
                </h4>

                <p>
                This site may contain links to other sites on the Internet that are owned and operated by third-party vendors and other third parties (“External Sites”). You acknowledge that Rénova Belle is not responsible for the unavailability of, or the content located on or through, any External Site. Rénova Belle’s policy representations contained herein apply only to its primary site, and do not cover the purchaser’s experience once it links to other such third party sites; and that any information collected by these external sites is subject to their own terms and policies. You should contact the site administrator or webmaster for those External Sites if you have any concerns regarding such links or the content located on such External Sites.
                </p>

                <h4 className={classes.heading} >
                User Content
                </h4>

                <p>
                By uploading User Content and posting User Content that you have hashtagged with #RenovaBelle, #AlwaysBelle or other Rénova Belle hashtags, you agree to the following: You grant to TB Global LLC, and its affiliates, retail partners and/or related entities a non-exclusive, fully paid and royalty-free, transferable, sub-licensable, worldwide license to use, reproduce, distribute, prepare derivative works of, and display your photo(s) and/or video(s) that you submit, upload, post or otherwise provide or make available to TB Global LLC, or its vendors, on or through the website, in its marketing and/or in its advertising, including your User Content that is on third party companies’ websites, for example Instagram, Twitter, Facebook, Pinterest and YouTube, that is associated with hashtags related to TB Global LLC, including (but not limited to), for example, #ReenovaBelle #AlwaysBelle. Rénova Belle and its affiliates, retail partners and/or related entities, may use, reproduce, distribute, combine with other materials, alter and/or edit your photos in any manner in its sole discretion, with no obligation to you whatsoever. You hereby represent and warrant that (i) you own all rights in or to your photos, or have the right to grant Rénova Belle rights and licenses to the photos, (ii) you have permission from any person(s) appearing in your photos to grant the rights herein; (iii) you are not a minor, and (iv) Rénova Belle’s use of your Instagram handle and/or photos will not violate the rights of any third party or any law. You hereby release, discharge and agree to hold Rénova Belle and any person acting on Rénova Belle’s behalf harmless from any liability related in any way to Rénova Belle’s use of your social media handle, your photo(s) and/or video(s).

                </p>

                <h4 className={classes.heading} >
                Ratings and Reviews Guidelines
                </h4>

                <p>
                Please consider a few guidelines when submitting a product review:
• Focus on the product and your individual experience using it
• Provide details about why you liked or disliked the product
• All submitted reviews are subject to the terms set forth in our Terms of Use We reserve the right not to post your review if it contains any of the following types of content or violates any of these other guidelines:
• Obscenities, discriminatory language, or other language not suitable for a public forum
• Advertisements, “spam” content, or references to other products, offers, or websites
• Email addresses, URLs, phone numbers, physical addresses or other forms of contact information
• Critical or spiteful comments on other reviews posted on the page or their authors
• falsely state or otherwise misrepresent your affiliation with a person or entity
If you would like to share feedback about product selection, pricing, ordering, delivery or other customer service issues, please do not submit through a product review instead reach out to us directly. Rénova Belle reserves the right to not post a review or to withdraw a posted review for any reason. Your review will be excluded if it violates Guidelines or the provisions in these Terms of Use regarding submission of Content generally. Your Use of Content on the Sites and Limitation of Liability Rénova Belle provides the Sites and all other applications and services on the Sites as a forum only. Rénova Belle is not liable for any statements, representations, or Content provided by its users in any public forum on the Sites or any Third Party Site, including without limitation through the Interactive Services. Any Content, if displayed, is displayed for entertainment and informational purposes only. More generally, Content posted via or on the Sites or any Third Party Site, including through the Interactive Services, is not controlled by Rénova Belle. Rénova Belle cannot guarantee the accuracy, integrity or quality of such Content. You understand that by using the Site, you may be exposed to Content that may be offensive, indecent or objectionable and Rénova Belle shall not be liable for any such Content and that the risk of harm or damage from the foregoing rests entirely with you. Under no circumstances will Rénova Belle be liable in any way for any Content, including, but not limited to, for (i) any errors or omissions in any Content; or (ii) any loss or damage (including, without limitation, personal injury or property damage) of any kind incurred as a result of the use of any Content posted, emailed or otherwise transmitted via or to the Sites. You may access the Content and any other content on the Sites only as permitted under these Terms of Use and the Privacy Policy and you agree to not engage in the use, copying or distribution of any of the Content other than as expressly provided herein.

                </p>

                <h4 className={classes.heading} >
                Responsibility for your Content
                </h4>

                <p>
                You are solely responsible for all content that you upload, post, email or otherwise transmit via or to the Site including the submission of product ratings and reviews and all other data, profile information, documents, text, software, applications, music, sound, photographs, graphics, video, messages, forum postings, comments, questions, answers or other materials (collectively, “Content”). You also represent and warrant that any Content you submit:
• Is not false, inaccurate or misleading;
• Does not harm minors;
• Does not infringe any copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy of any person or entity;
• Does not violate any obligations you may have with respect to such Content under any law or under contractual or fiduciary relationships (such as, but not limited to, inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);
• Does not violate any law, statute, ordinance or regulation (including, but not limited to, those governing export control, consumer protection, unfair competition, anti-discrimination or false advertising);
• Is not, or would not reasonably be considered to be, unlawful, harmful, defamatory, libelous, vulgar, obscene, invasive of another’s privacy, hateful, racially or religiously biased or offensive, abusive, tortious, threatening or harassing to any individual, partnership or corporation;
• Is not submitted for compensation or other consideration from any third party; “does not include any information that references other websites, addresses, email addresses, contact information or phone numbers;
• Complies in all respects with these Terms of Use, our Privacy Policy and all Guidelines and Rules;
• Is not unsolicited or unauthorized advertising, promotional materials, “junk mail,” “spam,” “chain letters,” “pyramid schemes,” or any other form of solicitation; and
• Does not contain any computer viruses or other potentially damaging computer programs or files.
Rénova Belle does not endorse any Content or any opinion, recommendation or advice expressed therein, and Rénova Belle disclaims all liability with respect to the Content. If your Content includes ideas, suggestions, documents or proposals to Rénova Belle through the Interactive Services, (a) such Content is not confidential or proprietary and Rénova Belle has no obligation of confidentiality, express or implied, with respect thereto; (b) Rénova Belle may have something similar to that Content already under consideration or development; and (c) you are not entitled to compensation, payment or reimbursement of any kind for such Content from Rénova Belle under any circumstances unless you are otherwise notified by Rénova Belle in writing. For any Content that you submit, you grant Rénova Belle a worldwide, perpetual, irrevocable, royalty-free, sublicenseable and transferable right and license to use, reproduce, communicate, distribute, copy, modify, delete in its entirety, edit, adapt, publish, translate, publicly display, publicly perform, use, create derivative works from and/or sell and/or distribute such Content and/or incorporate such Content into any form, medium or technology whether now or hereafter known throughout the world without compensation to you. This license will survive the termination of these Terms of Use and your use of the Site.
                </p>

                <h4 className={classes.heading} >
                Modification of Content
                </h4>

                <p>
                All Content that you submit is not confidential and may be used at Rénova Belle’s sole discretion. Rénova Belle may or may not pre-screen Content. However, Rénova Belle and its designees will have the right (but not the obligation) in their sole discretion to pre-screen, change, condense or delete any Content on the Sites. In particular, Rénova Belle and its designees will have the right to remove any Content that Rénova Belle deems, in its sole discretion, to violate the Guidelines, or any other provision of these Terms of Use or is otherwise objectionable. Rénova Belle does not guarantee that you will have any recourse through Rénova Belle to edit or delete any Content you have submitted. Rénova Belle reserves the right to incorporate any Content you have submitted into any account you may have, now or in the future, as a registered user of the Sites. Ratings, written comments, questions and answers are generally posted within two to four business days. However, Rénova Belle reserves the right to remove or to refuse to post any submission for any reason. You acknowledge that you, not Rénova Belle, are responsible for the contents of any Content you submit. None of the Content that you submit shall be subject to any obligation of confidence on the part of Rénova Belle, its agents, subsidiaries, affiliates, partners or third-party service providers and their respective directors, officers and employees.

                </p>










            </div>
    )
}