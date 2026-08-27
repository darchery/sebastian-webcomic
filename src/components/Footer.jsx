import DonationLink from "./DonationLink"

export default function Footer() {
    return(
        <footer className="footer">
            <p>&copy; 2026 Sebastián - Cosas del más allá. Todos los derechos reservados</p>
            <div className="footer-links">
                <p>
                    <DonationLink name="kofi"></DonationLink> | <DonationLink name="paypal"></DonationLink>
                </p>
            </div>
        </footer>
    )
}