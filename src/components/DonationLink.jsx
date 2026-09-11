import { DONATION_URLS } from "../lib/constants"

export default function DonationLink({ name }) {
    const links = {
        kofi: <a className="link-kofi" href={DONATION_URLS.kofi} target="_blank" rel="noopener"><b> Ko-fi</b></a>,
        paypal: <a className="link-paypal" href={DONATION_URLS.paypal} target="_blank" rel="noopener"><b> PayPal</b></a>
    }

    return links[name] || "Error: Método de donación no reconocido"
}