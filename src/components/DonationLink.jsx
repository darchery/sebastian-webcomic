export default function DonationLink({ name }) {
    const links = {
        kofi: <a className="link-kofi" href="https://ko-fi.com/TU_USUARIO" target="_blank" rel="noopener"><b> Ko-fi</b></a>,
        paypal: <a className="link-paypal" href="https://www.paypal.com/donate?token=2wmpgLbdDaT3dw22q86BJ5Pup0GtXg-x7U7mY0Y10qgfjiD_lfQZLR78DbtZvDtvocsWA5ZJJg2gOpQA" target="_blank" rel="noopener"><b> PayPal</b></a> 
    }

    return links[name] || "Error: Método de donación no reconocido"
}