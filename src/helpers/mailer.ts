import nodemailer from "nodemailer"

export const sendMail = async ({email, emailType, userId}:any) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });
          const mailOption = {
            from: 'raj@gmail.com',
            to: "sana@gmail.com",
            subject:emailType == "VERIFY" ? "Verify your email" : "Reset your password",
            html: "<b>Hello world?</b>",
          }

          const mailResponce = await transporter.sendMail(mailOption)
          return mailResponce;
    } catch (error:any) {
        throw new Error(error.message)
    }
}
