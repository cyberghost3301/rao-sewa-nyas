import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from "path"
import nodemailer from "nodemailer"
import fs from "fs"

// ── Local Dev Server Middleware for /api/contact ──────────────────
// Allows the contact form to deliver real emails during local `npm run dev`
// using the credentials from .env. In production on Vercel, api/contact.ts
// handles this automatically as a serverless function.
function localApiDevPlugin(): Plugin {
  return {
    name: 'local-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })

        req.on('end', async () => {
          try {
            const payload = JSON.parse(body || '{}')
            const { name, email, phone, organization, service, message } = payload

            if (!name || !email || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  ok: false,
                  error: 'Name, email, and message are required fields.',
                })
              )
              return
            }

            // Read SMTP credentials from .env or .env.local
            let envContent = ''
            if (fs.existsSync('.env')) {
              envContent = fs.readFileSync('.env', 'utf-8')
            } else if (fs.existsSync('.env.local')) {
              envContent = fs.readFileSync('.env.local', 'utf-8')
            }

            const getEnv = (key: string, fallback = '') => {
              const match = envContent.match(new RegExp(`^${key}\\s*=\\s*(.*)$`, 'm'))
              return match ? match[1].trim() : process.env[key] || fallback
            }

            const host = getEnv('SMTP_HOST', 'smtp.gmail.com')
            const port = Number(getEnv('SMTP_PORT', '587'))
            const user = getEnv('SMTP_USER')
            const pass = getEnv('SMTP_PASS')
            const recipient =
              getEnv('CONTACT_RECEIVER_EMAIL') ||
              getEnv('INQUIRY_NOTIFY_EMAIL') ||
              'raosewanyas@gmail.com'

            if (!user || !pass) {
              res.statusCode = 503
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  ok: false,
                  error: 'SMTP credentials missing in .env (SMTP_USER, SMTP_PASS).',
                })
              )
              return
            }

            const transporter = nodemailer.createTransport({
              host,
              port,
              secure: port === 465,
              auth: { user, pass },
            })

            let formattedPhone = 'Not provided'
            if (phone) {
              let rawDigits = String(phone).replace(/\D/g, '')
              if (rawDigits.startsWith('91') && rawDigits.length > 10) {
                rawDigits = rawDigits.slice(2)
              } else if (rawDigits.startsWith('0')) {
                rawDigits = rawDigits.slice(1)
              }
              const tenDigits = rawDigits.slice(0, 10)
              formattedPhone = tenDigits ? `+91 ${tenDigits}` : String(phone)
            }

            const emailSubject = `New Website Inquiry: ${name}${
              organization ? ` (${organization})` : ''
            }${service ? ` [${service}]` : ''}`

            const textContent = `
New Inquiry Received from Rao Sewa Nyas Official Website
=========================================================

Name:         ${name}
Organization: ${organization || 'Not provided'}
Email:        ${email}
Phone:        ${formattedPhone}
Service Area: ${service || 'General Inquiry'}

Message:
---------------------------------------------------------
${message}
---------------------------------------------------------

Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
Origin: http://localhost:5173/contact (Local Dev)
`

            await transporter.sendMail({
              from: `"Rao Sewa Nyas Website" <${user}>`,
              to: recipient,
              replyTo: email,
              subject: emailSubject,
              text: textContent,
            })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                ok: true,
                message: 'Thank you. Your inquiry has been delivered.',
              })
            )
          } catch (err: any) {
            console.error('[local-api] Error sending email via SMTP:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                ok: false,
                error:
                  err?.message ||
                  'An unexpected error occurred while sending your message. Please reach out to raosewanyas@gmail.com directly.',
              })
            )
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    localApiDevPlugin(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { lossless: true },
      avif: { lossless: true },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
  },
})