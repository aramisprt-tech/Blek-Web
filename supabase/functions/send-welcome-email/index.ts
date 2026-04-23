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
        html: "<h1>¡Gracias por apuntarte!</h1><p>Hemos guardado tu email correctamente en nuestra waitlist. Te avisaremos tan pronto como tengamos novedades sobre Blek.</p>",
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
