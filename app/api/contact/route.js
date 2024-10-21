// import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

// inside POST BACKEND:
// {
//   name: 'fsfdsf',
//   phone: '999-999-9999'
//   email: 'ffdasfsd@dsfdsa.com',
//   message: 'dsfdsfs',
// }

export async function POST(request: NextRequest) {
    console.log('inside POST BACKEND:')
    const body = await request.json()
    console.log(body)

    const transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        // auth: {
        //     user: process.env.NEXT_GMAIL_EMAIL,
        //     pass: process.env.NEXT_GMAIL_PASS,
        // }

        host: 'smtp.office365.com',
        port: 587,
        secure: false, // Use TLS
        auth: {
        user: process.env.NEXT_OUTLOOK_EMAIL,
        pass: process.env.NEXT_OUTLOOK_PASS
        },
        tls: {
            ciphers: 'SSLv3'
        }
    })

    const mailData = {
        to: process.env.NEXT_OUTLOOK_EMAIL,
        from: process.env.NEXT_OUTLOOK_EMAIL,
        // to: process.env.NEXT_GMAIL_EMAIL,
        // from: process.env.NEXT_GMAIL_EMAIL,
        subject: `Notch Beatz Contact Form: ${body?.name}, ${body?.email}`,
        text: body.message,
        html: 
            `<div>
                <h1>Notch Beatz Contact Form:</h1>
                <p>
                Name: ${body?.name}
                <br></br>
                Phone: ${body?.phone}
                <br></br>
                Contact Email: ${body?.email}
                <br></br>
                Message: ${body?.message}
                <br></br>
                </p>
            </div>`
    }

    try {
        await transporter.sendMail(mailData)
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }

    //#################### 
}

