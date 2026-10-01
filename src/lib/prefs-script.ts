// Script inline de <head>: aplica las preferencias guardadas antes del primer pintado
// (ver src/lib/prefs.ts). Vive aparte porque prefs.ts es un módulo de cliente.
export const PREFS_SCRIPT = `try{var d=document.documentElement;d.dataset.images=localStorage.getItem("cv-images")||"on";d.dataset.detail=localStorage.getItem("cv-detail")||"full"}catch(e){}`
