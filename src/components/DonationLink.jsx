// Si se cambia el link aquí, cámbialo también en Donate.jsx

export default function DonationLink({ name }) {
    const links = {
        kofi: <a className="link-kofi" href="https://ko-fi.com/TU_USUARIO" target="_blank" rel="noopener"><b> Ko-fi</b></a>,
        paypal: <a className="link-paypal" href="https://www.paypal.com/donate/?hosted_button_id=LHU9A3BDUCQRC" target="_blank" rel="noopener"><b> PayPal</b></a> 
    }

    return links[name] || "Error: Método de donación no reconocido"
}