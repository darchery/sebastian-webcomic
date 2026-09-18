import { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function usePageTracking() {
    const location = useLocation()

    useEffect(() => {
        // 1. No trackear en desarrolllo local (quien ejecute npm run dev)
        if (import.meta.env.DEV) return

        // 2. No trackear visitas del autor si tiene el flag activo en producción
        if (localStorage.getItem('track') === 'false') return

        // Visitante único persistente (localStorage)
        const NAV_KEY = 'nav_visitor_id'
        let visitorId = localStorage.getItem(NAV_KEY)
        // Si no tiene su id le asignamos uno
        if (!visitorId) {
            visitorId = crypto.randomUUID()
            localStorage.setItem(NAV_KEY, visitorId)
        }

        // Sesión activa para maratón de lectura (sessionStorage)
        const SESSION_KEY = 'nav_session_id'
        let sessionId = sessionStorage.getItem(SESSION_KEY)
        // Si no tiene la sesión guardada
        if (!sessionId) {
            sessionId = crypto.randomUUID()
            sessionStorage.setItem(SESSION_KEY, sessionId)
        }

        // Detección de dispositivo (Móvil vs Tablet vs Escritorio)
        // Es movil o android o pantalla pequeña
        const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768
        // Pantalla mediana o ipad o tablet 
        const isTablet = !isMobile && (window.innerWidth <= 1024 || /iPad|Tablet/i.test(navigator.userAgent))
        // No es ninguna de las 2 anteriores
        const device = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'

        // Idioma / Región del navegador (es-ES, es-MX, en-US)
        const lang = navigator.language || 'desconocido'

        // Origen del tráfico: lee la ref de la URL (?ref=instagram) o document.referrer
        const urlParams = new URLSearchParams(window.location.search)
        const referrer = urlParams.get('ref') || document.referrer || 'directo'

        // Registrar visita con los parámetros anteriores
        // Insertamos la información de la visita de la página
        supabase
            .from('events')
            .insert({
                event_type: 'page_view',
                path: location.pathname,
                visitor_id: visitorId,
                session_id: sessionId,
                referrer: referrer,
                device: device,
                lang: lang,
            })
            .then(({ error }) => error && console.error('Tracking page_view error:', error))

        // Tiempo en página (duración al salir o cambiar de ruta)
        const start = Date.now()
        return () => {
            const seconds = Math.round((Date.now() - start) / 1000) // Estaba en ms

            if (seconds > 0) {
                // Insertamos el tiempo en la página
                supabase
                    .from('events')
                    .insert({
                        event_type: 'time_on_page',
                        path: location.pathname,
                        duration_seconds: seconds,
                        visitor_id: visitorId,
                        session_id: sessionId,
                        device: device
                    })
                    .then(({ error }) => error && console.error('Tracking time error:', error))
            }
        }
    }, [location.pathname])
}