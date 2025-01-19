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