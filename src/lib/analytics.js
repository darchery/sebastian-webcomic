import { supabase } from "./supabaseClient"

// Registar cuando un usuario hace clic en un enlace de doanción
export function trackDonationClick(platform) {
    if (import.meta.env.DEV || localStorage.getItem('track') === 'false') return
    supabase
        .from('events')
        .insert({
            event_type: 'donation_click',
            platform: platform // 'kofi' | ''paypal  
        }).then(({ error }) => error && console.error(error))
}
