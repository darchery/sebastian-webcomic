export default function DonationLink({ name }) {
    const links = {
        kofi: <a className="links" href="https://ko-fi.com/TU_USUARIO" target="_blank" rel="noopener"><b> Ko-fi</b></a>,
        paypal: <a className="links" href="https://paypal.me/TU_USUARIO" target="_blank" rel="noopener"><b> PayPal</b></a> 
    }

    return links[name] || "Error: Método de donación no reconocido"
}