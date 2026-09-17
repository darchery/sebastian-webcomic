import DonationLink from "./DonationLink"

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">&copy; 2026 - Cosas del más allá. Todos los derechos reservados</p>
            <div className="footer-links">
                <p>
                    <DonationLink name="kofi"></DonationLink> | <DonationLink name="paypal"></DonationLink>
                </p>
            </div>
            <details style={{ marginTop: '0.75rem' }}>
                <summary>Privacidad</summary>

                <p className="footer-text" style={{ fontSize: '0.85rem' }}>
                    Esta web utiliza un identificador anónimo almacenado en tu navegador para
                    elaborar estadísticas de uso, como el número de visitas y los capítulos
                    consultados. No usamos cookies de publicidad ni vendemos datos personales.
                </p>

                <p className="footer-text" style={{ fontSize: '0.85rem' }}>
                    Las estadísticas pueden incluir información técnica básica, como la página
                    visitada, la fecha y el tipo de dispositivo. Los datos se almacenan en
                    Supabase y se utilizan únicamente para mejorar el proyecto.
                </p>

                <p className="footer-text" style={{ fontSize: '0.85rem' }}>
                    Los enlaces a Ko-fi y PayPal son servicios externos y se rigen por sus
                    propias políticas de privacidad.
                </p>
            </details>
        </footer>
    )
}