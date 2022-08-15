import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}) {
    let stripePromise = null;

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripePromise
    }
    //load stripe
    const stripe = await getStripe();

    //function to redirect to checkout
    await stripe.redirectCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })
}
