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
      cancel_url: `${origin}/#checkout`
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
