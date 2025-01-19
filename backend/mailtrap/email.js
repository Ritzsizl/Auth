import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { sender } from "./mailtrap.config.js";
import { mailtrapClient } from "./mailtrap.config.js";
 
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipent = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipent,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response);

    } catch (error) {
       console.error(`Error sending Verification`, error) 
       throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async(email,name) => {
    const recipent=[{email}]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipent,
            template_uuid: "f14e6658-0eec-4604-9e9f-0656558ddc03",
            template_variables: {
                company_info_name: "Auth Company",
                name: name,
            },
        })
        console.log("Welcome email sent successfully", response)
    } catch (error) {
        console.log(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}