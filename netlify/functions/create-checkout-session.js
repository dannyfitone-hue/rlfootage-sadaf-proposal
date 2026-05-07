const Stripe = require('stripe');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const body = JSON.parse(event.body || '{}');
    const { packageName, packagePrice, projectType, client = {} } = body;

    const origin =
      event.headers['origin'] ||
      event.headers['Origin'] ||
      process.env.URL ||
      '';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: client.email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageName || 'RL FOOTAGE × SADAF RESTAURANT Advertising Package',
              description: projectType || 'Restaurant advertising video production'
            },
            unit_amount: Math.round(Number(packagePrice) * 100)
          },
          quantity: 1
        }
      ],
      success_url: `${origin}/?success=true`,
<<<<<<< HEAD
      cancel_url: `${origin}/#checkout`
=======
      cancel_url: `${origin}/#checkout`,
      metadata: {
        projectType: projectType || '',
        packageName: packageName || '',
        clientName: client.name || '',
        clientPhone: client.phone || '',
        clientEmail: client.email || '',
        location: client.location || '',
        notes: client.notes || ''
      }
>>>>>>> 1ef5b327c74400ffb370807bc9e44582ee223696
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
