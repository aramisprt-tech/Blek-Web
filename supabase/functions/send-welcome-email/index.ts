import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

serve(async (req) => {
  try {
    const payload = await req.json()
    const { record } = payload
    const userEmail = record.email

    if (!userEmail) {
      return new Response("No email provided", { status: 400 })
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Soporte Blek <soporte@blekapp.com>",
        to: [userEmail],
        subject: "¡Bienvenido a la Waitlist de Blek!",
        html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="background-color:#121212; margin:0; padding:0; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';">
  <div style="background-color:#1a1a1a; max-width:640px; margin:0 auto; padding:40px 24px;">
    
    <!-- Logo -->
    <div style="padding-bottom: 40px;">
      <img src="https://blekapp.com/text-logo-white.png" alt="Blek" width="120" style="display:block; outline:none; border:none; text-decoration:none;" />
    </div>
    
    <!-- Title -->
    <div style="padding-bottom: 32px;">
      <h1 style="color:#ffffff; font-size:36px; font-weight:bold; text-transform:uppercase; margin:0; line-height:1.2; letter-spacing: -0.5px;">BIENVENIDO A BLEK</h1>
    </div>

    <!-- Intro Text -->
    <div style="padding-bottom: 32px;">
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 16px 0;">Acabas de entrar en la waitlist de Blek.</p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 16px 0;">No es solo otra app de libros. Estamos construyendo algo diferente.</p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0;">Una forma más inteligente de leer, hacer seguimiento y sacarle valor real a cada libro que consumes.</p>
    </div>

    <!-- Image Section -->
    <div style="padding-bottom: 32px;">
      <img src="https://blekapp.com/ig0.jpg" alt="Blek App" width="592" style="display:block; outline:none; border:none; text-decoration:none; width:100%; max-width:592px; border-radius: 4px;" />
    </div>

    <!-- List Section -->
    <div style="padding-bottom: 32px;">
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 16px 0;">Ahora mismo estás dentro antes que la mayoría.<br/>Y eso tiene ventajas.</p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 8px 0;">👉 Tendrás acceso anticipado</p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 8px 0;">👉 Podrás probar funciones antes que nadie</p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 24px 0;">👉 Y podrás influir en lo que estamos creando</p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0;">Mientras tanto, estamos preparando algo potente.</p>
    </div>

    <!-- Call to action Section -->
    <div style="border-top: 1px solid #333; border-bottom: 1px solid #333; padding: 32px 0; margin-bottom: 32px;">
      <h2 style="color:#ffffff; font-size:20px; font-weight:bold; margin:0 0 16px 0;">Si quieres ir un paso por delante:</h2>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0 0 16px 0;">Responde a este email con:<br/><strong style="color:#ffffff;">¿Qué te frustra de las apps de libros actuales?</strong></p>
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0;">Leemos absolutamente todo.</p>
    </div>

    <!-- Sign off -->
    <div style="padding-bottom: 48px;">
      <p style="color:#a1a1aa; font-size:16px; line-height:1.6; margin:0;">Nos vemos dentro.<br/><span style="color:#ffffff;">— Equipo Blek</span></p>
    </div>

    <!-- Footer -->
    <div style="border-top: 1px solid #333; padding-top: 32px;">
      <p style="color:#71717a; font-size:12px; line-height:1.5; margin:0 0 16px 0;">Blek te ayuda a leer de forma más inteligente, recordar lo que lees y sacar valor real de tus libros.</p>
      <p style="color:#71717a; font-size:12px; line-height:1.5; margin:0;">Estás recibiendo este email porque te apuntaste a la lista de espera de Blek.</p>
    </div>
  </div>
</body>
</html>`,
      }),
    })

    const data = await res.json()

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
})
