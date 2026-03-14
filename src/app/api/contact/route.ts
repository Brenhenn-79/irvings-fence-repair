import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, service, message } = body

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email, and phone are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const leadData = { name, email, phone, address, service, message, timestamp, source: 'website-form' }

    // =====================================================
    // SUPABASE INTEGRATION (uncomment & configure)
    // =====================================================
    // import { createClient } from '@supabase/supabase-js'
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!
    // )
    // const { error: dbError } = await supabase.from('leads').insert([leadData])
    // if (dbError) throw new Error('Database error: ' + dbError.message)

    // =====================================================
    // RESEND EMAIL INTEGRATION (uncomment & configure)
    // =====================================================
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    //
    // // Notification to business
    // await resend.emails.send({
    //   from: 'leads@irvingsfencerepair.com',
    //   to: ['info@irvingsfencerepair.com'],
    //   subject: `🚀 New Fence Quote Request – ${name} in Irving TX`,
    //   html: `
    //     <h2>New Lead from Website</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Address:</strong> ${address || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    //     <p><strong>Message:</strong> ${message || 'None'}</p>
    //     <p><strong>Submitted:</strong> ${timestamp}</p>
    //   `,
    // })
    //
    // // Confirmation to customer
    // await resend.emails.send({
    //   from: "Irving's Fence Repair <info@irvingsfencerepair.com>",
    //   to: [email],
    //   subject: "We received your fence quote request! 🎉",
    //   html: `
    //     <h2>Thanks ${name}!</h2>
    //     <p>We got your fence estimate request and we'll be in touch within 2 business hours.</p>
    //     <p>In the meantime, give us a call at (972) 284-1718 if you have any questions!</p>
    //     <br/>
    //     <p>– The Irving's Fence Repair Team</p>
    //   `,
    // })

    // Log for development
    console.log('New fence lead submitted:', leadData)

    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll be in touch within 2 hours.',
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please call us directly at (972) 555-0190.' },
      { status: 500 }
    )
  }
}
