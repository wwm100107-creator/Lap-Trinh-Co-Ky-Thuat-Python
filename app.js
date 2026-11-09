/**
 * LẬP TRÌNH CƠ KỸ THUẬT - SINGLE PAGE APPLICATION CORE
 * Đại học Bách Khoa TP.HCM (HCMUT)
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Minimalist SVG Icon Vector System ---
const SVG_ICONS = {
    'activity': '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    'alert-octagon': '<path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/>',
    'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'award': '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
    'binary': '<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/>',
    'book-open': '<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',
    'bookmark': '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>',
    'bookmark-check': '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="m9 10 2 2 4-4"/>',
    'box': '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    'boxes': '<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/>',
    'calculator': '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
    'calendar': '<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',
    'check-circle-2': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
    'check-square': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 9-5.5 5.5L8 12"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-up': '<path d="m18 15-6-6-6 6"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    'code': '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    'coffee': '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    'component': '<path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"/><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"/><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/>',
    'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'corner-down-right': '<path d="m15 10 5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>',
    'cpu': '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
    'database': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    'disc': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/>',
    'dumbbell': '<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',
    'edit-3': '<path d="m18 13-.654-4.736a4 4 0 00-2.756-3.266l-9.163-2.9a2 2 0 00-2.017.493l-.82.819a2 2 0 00-.492 2.017l2.9 9.163a4 4 0 003.266 2.756L13 18"/><path d="M18.648 12.352a1.205 1.205 0 011.704 0l1.296 1.296a1.205 1.205 0 010 1.704l-6.296 6.296a1.205 1.205 0 01-1.704 0l-1.296-1.296a1.205 1.205 0 010-1.704z"/><path d="m3 3 6.586 6.586"/><circle cx="11" cy="11" r="2"/>',
    'eye-off': '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
    'function-square': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"/><path d="M9 11.2h5.7"/>',
    'git-branch': '<path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>',
    'git-commit': '<circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>',
    'git-fork': '<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>',
    'git-merge': '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
    'git-pull-request': '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/>',
    'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    'grid': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>',
    'hard-drive': '<path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>',
    'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    'key': '<path d="m2 21 9.6-9.6"/><path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"/><circle cx="15.5" cy="7.5" r="5.5"/>',
    'keyboard': '<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
    'layers': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    'layout': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    'line-chart': '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
    'link-2': '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
    'list-ordered': '<path d="M11 5h10"/><path d="M11 12h10"/><path d="M11 19h10"/><path d="M4 4h1v5"/><path d="M4 9h2"/><path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"/>',
    'menu': '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
    'message-square': '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>',
    'monitor': '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    'moon': '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
    'move-horizontal': '<path d="m18 8 4 4-4 4"/><path d="M2 12h20"/><path d="m6 8-4 4 4 4"/>',
    'package': '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
    'pin': '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
    'play': '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
    'play-circle': '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/><circle cx="12" cy="12" r="10"/>',
    'plus-circle': '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
    'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    'repeat': '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    'scale': '<path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>',
    'scissors': '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
    'search': '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
    'shield-alert': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'sliders': '<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',
    'sparkles': '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    'table': '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    'tag': '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    'terminal': '<path d="M12 19h8"/><path d="m4 17 6-6-6-6"/>',
    'thermometer': '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
    'trash-2': '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',
    'zap': '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',
  };

  function getSvgIcon(name, extraClass = '', size = 16) {
    const inner = SVG_ICONS[name] || '';
    return `<svg class="inline-svg ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  }

  function renderSvgIcons(root = document) {
    root.querySelectorAll('i[data-lucide]').forEach(el => {
      const name = el.getAttribute('data-lucide');
      const cls = el.getAttribute('class') || '';
      const svgStr = getSvgIcon(name, cls);
      const temp = document.createElement('div');
      temp.innerHTML = svgStr.trim();
      const svgEl = temp.firstElementChild;
      if (svgEl) {
        el.replaceWith(svgEl);
      }
    });
  }

  // 1. Quản lý Theme (Dark/Light)
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("ck_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ck_theme", newTheme);
    updateThemeIcon(newTheme);
    // Render lại mermaid với theme tương ứng
    initMermaid();
  });

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeToggle.innerHTML = getSvgIcon("sun", "no-margin w-5 h-5 text-amber-400");
    } else {
      themeToggle.innerHTML = getSvgIcon("moon", "no-margin w-5 h-5 text-slate-600");
    }
  }

  // 2. Quản lý Tiến độ (Progress Tracker)
  let progressState = JSON.parse(localStorage.getItem("ck_progress")) || {
    completed: ["ch0_1", "ch2_3"],
    scores: {}
  };

  function updateProgressBar() {
    const totalChapters = window.CHAPTERS_DATA.length;
    const completedCount = progressState.completed.length;
    const percent = Math.round((completedCount / totalChapters) * 100);

    const bar = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.innerText = `${percent}% Hoàn thành (${completedCount}/${totalChapters} chương)`;

    // Cập nhật icon check trên sidebar
    document.querySelectorAll(".chapter-item").forEach(el => {
      const chId = el.getAttribute("data-chapter-id");
      const checkIcon = el.querySelector(".check-status");
      if (progressState.completed.includes(chId)) {
        checkIcon.classList.remove("hidden");
        checkIcon.classList.add("text-emerald-500");
      } else {
        checkIcon.classList.add("hidden");
      }
    });
  }

  // 3. Khởi tạo Mermaid chuẩn font và chống tràn chữ
  async function initMermaid() {
    if (!window.mermaid) return;

    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    } catch (e) {
      console.warn("Fonts ready wait:", e);
    }

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      fontSize: 14,
      flowchart: {
        htmlLabels: true,
        useMaxWidth: true,
        padding: 24,
        nodeSpacing: 50,
        rankSpacing: 50,
        curve: "basis"
      }
    });

    // Lưu và khôi phục mã nguồn Mermaid gốc khi re-render
    const mermaidElements = document.querySelectorAll(".mermaid");
    mermaidElements.forEach(el => {
      if (!el.hasAttribute("data-raw-code")) {
        el.setAttribute("data-raw-code", el.textContent.trim());
      } else {
        el.removeAttribute("data-processed");
        el.textContent = el.getAttribute("data-raw-code");
      }
    });

    try {
      await mermaid.run({
        querySelector: ".mermaid"
      });
    } catch (err) {
      console.error("Mermaid run error:", err);
    }
  }

  // 4. Toast Notification
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerHTML = `${getSvgIcon("check-circle", "no-margin w-4 h-4 text-emerald-400")} <span>${msg}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // 5. Điều hướng Navigation Tabs
  let activeTab = "theory"; // 'theory' | 'exercises' | 'quizzes' | 'cheatsheet'
  let activeChapterId = "ch4"; // Default focus on Chapter 4

  const navTheory = document.getElementById("nav-theory");
  const navExercises = document.getElementById("nav-exercises");
  const navQuizzes = document.getElementById("nav-quizzes");
  const navCheatsheet = document.getElementById("nav-cheatsheet");

  const tabButtons = [navTheory, navExercises, navQuizzes, navCheatsheet];

  function setActiveTab(tab) {
    activeTab = tab;
    tabButtons.forEach(btn => {
      if (btn) btn.classList.remove("active", "border-b-2", "border-blue-600", "text-blue-600", "font-bold");
    });
    const currentBtn = document.getElementById(`nav-${tab}`);
    if (currentBtn) {
      currentBtn.classList.add("active", "border-b-2", "border-blue-600", "text-blue-600", "font-bold");
    }

    renderCurrentView();
  }

  navTheory.addEventListener("click", () => setActiveTab("theory"));
  navExercises.addEventListener("click", () => setActiveTab("exercises"));
  navQuizzes.addEventListener("click", () => setActiveTab("quizzes"));
  navCheatsheet.addEventListener("click", () => setActiveTab("cheatsheet"));

  // 6. Render Sidebar Chapters
  const chapterListEl = document.getElementById("chapter-list");
  function renderSidebar() {
    chapterListEl.innerHTML = "";
    window.CHAPTERS_DATA.forEach(ch => {
      const item = document.createElement("button");
      item.className = `chapter-item w-full text-left px-3.5 py-2.5 rounded-lg mb-1 flex items-center justify-between text-sm transition ${
        ch.id === activeChapterId && activeTab === "theory"
          ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold"
          : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
      }`;
      item.setAttribute("data-chapter-id", ch.id);

      item.innerHTML = `
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="text-xs px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono font-medium">${ch.code}</span>
          <span class="truncate">${ch.title.split(":")[1] || ch.title}</span>
        </div>
        ${getSvgIcon("check-circle-2", "check-status no-margin w-4 h-4 hidden flex-shrink-0 text-emerald-500")}
      `;

      item.addEventListener("click", () => {
        activeChapterId = ch.id;
        setActiveTab("theory");
        renderSidebar();
        updateProgressBar();
      });

      chapterListEl.appendChild(item);
    });

    renderSvgIcons();
    updateProgressBar();
  }

  // 7. Render Current View
  const viewContainer = document.getElementById("view-container");

  function renderCurrentView() {
    if (activeTab === "theory") {
      renderTheoryView();
    } else if (activeTab === "exercises") {
      renderExercisesView();
    } else if (activeTab === "quizzes") {
      renderQuizzesView();
    } else if (activeTab === "cheatsheet") {
      renderCheatsheetView();
    }
  }

  // --- RENDER THEORY VIEW ---
  function renderTheoryView() {
    const ch = window.CHAPTERS_DATA.find(c => c.id === activeChapterId) || window.CHAPTERS_DATA[2];
    const isDone = progressState.completed.includes(ch.id);

    const currentIndex = window.CHAPTERS_DATA.findIndex(c => c.id === ch.id);
    const prevCh = currentIndex > 0 ? window.CHAPTERS_DATA[currentIndex - 1] : null;
    const nextCh = currentIndex < window.CHAPTERS_DATA.length - 1 ? window.CHAPTERS_DATA[currentIndex + 1] : null;
    const exCount = window.EXERCISES_DATA ? window.EXERCISES_DATA.filter(e => e.chapter === ch.id).length : 0;

    viewContainer.innerHTML = `
      <div class="max-w-4xl mx-auto py-4 px-2">
        <!-- Header Chương -->
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">${ch.tag}</span>
            <span class="text-xs text-slate-400">ĐHBK TP.HCM • Môn Cơ Kỹ Thuật</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">${ch.title}</h1>
          <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">${ch.desc}</p>
          
          <div class="mt-4 flex flex-wrap gap-3">
            <button id="btn-toggle-done" class="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              isDone
                ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            }">
              ${getSvgIcon(isDone ? "check-circle" : "check", "no-margin w-4 h-4")}
              <span>${isDone ? "Đã đánh dấu hoàn thành" : "Đánh dấu đã hiểu chương này"}</span>
            </button>
            
            <button id="btn-goto-ex" class="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2">
              ${getSvgIcon("dumbbell", "no-margin w-4 h-4 text-blue-500")}
              <span>Luyện tập (${exCount} bài tập)</span>
            </button>
          </div>
        </div>

        <!-- Nội dung chi tiết -->
        <div class="content-body text-slate-800 dark:text-slate-200">
          ${ch.content}
        </div>

        <!-- Điều hướng cuối chương -->
        <div class="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          ${prevCh ? `
            <button id="btn-prev-ch" class="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 shadow-sm transition">
              ${getSvgIcon("arrow-left", "no-margin w-4 h-4")}
              <span>${prevCh.code}</span>
            </button>
          ` : '<div class="hidden sm:block"></div>'}

          <button id="btn-footer-goto-ex" class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100 text-xs font-bold flex items-center justify-center gap-2 transition">
            ${getSvgIcon("dumbbell", "no-margin w-4 h-4")}
            <span>Ngân Hàng Bài Tập ${ch.code} (${exCount} bài)</span>
          </button>

          ${nextCh ? `
            <button id="btn-next-ch" class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition">
              <span>${nextCh.code}</span>
              ${getSvgIcon("arrow-right", "no-margin w-4 h-4")}
            </button>
          ` : '<div class="hidden sm:block"></div>'}
        </div>
      </div>
    `;

    // Nút toggle hoàn thành
    document.getElementById("btn-toggle-done").addEventListener("click", () => {
      if (progressState.completed.includes(ch.id)) {
        progressState.completed = progressState.completed.filter(id => id !== ch.id);
        showToast("Đã bỏ đánh dấu hoàn thành");
      } else {
        progressState.completed.push(ch.id);
        showToast("Chúc mừng! Đã hoàn thành " + ch.code);
        if (window.confetti) {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        }
      }
      localStorage.setItem("ck_progress", JSON.stringify(progressState));
      renderTheoryView();
      renderSidebar();
    });

    const goToEx = () => {
      setActiveTab("exercises");
      filterExercisesByChapter(ch.id);
    };

    document.getElementById("btn-goto-ex").addEventListener("click", goToEx);

    const btnFooterEx = document.getElementById("btn-footer-goto-ex");
    if (btnFooterEx) btnFooterEx.addEventListener("click", goToEx);

    const btnPrev = document.getElementById("btn-prev-ch");
    if (btnPrev && prevCh) {
      btnPrev.addEventListener("click", () => {
        activeChapterId = prevCh.id;
        renderTheoryView();
        renderSidebar();
        const mainEl = document.querySelector(".main-content");
        if (mainEl) mainEl.scrollTop = 0;
      });
    }

    const btnNext = document.getElementById("btn-next-ch");
    if (btnNext && nextCh) {
      btnNext.addEventListener("click", () => {
        activeChapterId = nextCh.id;
        renderTheoryView();
        renderSidebar();
        const mainEl = document.querySelector(".main-content");
        if (mainEl) mainEl.scrollTop = 0;
      });
    }

    postProcessContent();
  }

  // --- RENDER EXERCISES VIEW ---
  let exerciseFilterChapter = "all";
  let exerciseFilterLevel = "all";
  let exerciseSearchQuery = "";

  function renderExercisesView() {
    viewContainer.innerHTML = `
      <div class="max-w-4xl mx-auto py-4 px-2">
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Ngân Hàng Bài Tập & Lời Giải Chi Tiết</h1>
              <span id="exercise-badge-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                ${window.EXERCISES_DATA.length} Bài Tập
              </span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">Đầy đủ 100% bài tập trích xuất từ các file BT Chương 2, 3, 4, 5, 5 bis, 6a, 7 và Đề Thi Thử của PGS. TS. Nguyễn Thanh Nhã (HCMUT).</p>
          </div>
          
          <!-- Bộ lọc & Tìm kiếm -->
          <div class="flex flex-wrap items-center gap-2">
            <div class="relative">
              <input id="filter-search" type="text" placeholder="Tìm kiếm bài tập..." class="pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium w-40 md:w-52 focus:outline-none focus:ring-2 focus:ring-blue-500" value="${escapeHtml(exerciseSearchQuery)}">
              ${getSvgIcon("search", "no-margin w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5")}
            </div>

            <select id="filter-chapter" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium">
              <option value="all">Tất cả các chương</option>
              <option value="ch0_1">Chương 0 & 1: Máy tính & Biểu diễn số</option>
              <option value="ch2_3">Chương 2 & 3: Cơ bản & Kiểu dữ liệu</option>
              <option value="ch4">Chương 4: Cấu trúc điều khiển</option>
              <option value="ch5">Chương 5: Hàm & Module</option>
              <option value="ch6">Chương 6: Lập trình OOP</option>
              <option value="ch7">Chương 7: NumPy & Matplotlib</option>
              <option value="ch8">Chương 8: Giao diện GUI Tkinter</option>
            </select>
            
            <select id="filter-level" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium">
              <option value="all">Mọi độ khó</option>
              <option value="Dễ">Dễ</option>
              <option value="Cơ bản">Cơ bản</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Nâng cao">Nâng cao</option>
              <option value="Đề thi">Trọng tâm Đề thi</option>
            </select>
          </div>
        </div>

        <div id="exercise-list" class="space-y-6"></div>
      </div>
    `;

    const selectCh = document.getElementById("filter-chapter");
    const selectLvl = document.getElementById("filter-level");
    const inputSearch = document.getElementById("filter-search");

    selectCh.value = exerciseFilterChapter;
    selectLvl.value = exerciseFilterLevel;

    selectCh.addEventListener("change", (e) => {
      exerciseFilterChapter = e.target.value;
      populateExercises();
    });

    selectLvl.addEventListener("change", (e) => {
      exerciseFilterLevel = e.target.value;
      populateExercises();
    });

    if (inputSearch) {
      inputSearch.addEventListener("input", (e) => {
        exerciseSearchQuery = e.target.value;
        populateExercises();
      });
    }

    populateExercises();
  }

  function filterExercisesByChapter(chId) {
    exerciseFilterChapter = chId;
    const selectCh = document.getElementById("filter-chapter");
    if (selectCh) selectCh.value = chId;
    populateExercises();
  }

  function populateExercises() {
    const listEl = document.getElementById("exercise-list");
    if (!listEl) return;
    listEl.innerHTML = "";

    const searchVal = exerciseSearchQuery.trim().toLowerCase();
    const filtered = window.EXERCISES_DATA.filter(ex => {
      const matchCh = exerciseFilterChapter === "all" || ex.chapter === exerciseFilterChapter;
      const matchLvl = exerciseFilterLevel === "all" || ex.level === exerciseFilterLevel;
      const matchSearch = !searchVal || 
        (ex.title && ex.title.toLowerCase().includes(searchVal)) ||
        (ex.problem && ex.problem.toLowerCase().includes(searchVal)) ||
        (ex.analysis && ex.analysis.toLowerCase().includes(searchVal)) ||
        (ex.solution && ex.solution.toLowerCase().includes(searchVal));
      return matchCh && matchLvl && matchSearch;
    });

    const badgeEl = document.getElementById("exercise-badge-count");
    if (badgeEl) {
      badgeEl.innerText = `${filtered.length} / ${window.EXERCISES_DATA.length} Bài Tập`;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="p-8 text-center text-slate-400">Không tìm thấy bài tập phù hợp với bộ lọc hiện tại.</div>`;
      return;
    }

    filtered.forEach((ex, idx) => {
      const card = document.createElement("div");
      card.className = "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition hover:shadow-md";

      let levelBadge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
      if (ex.level === "Dễ") levelBadge = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
      if (ex.level === "Cơ bản") levelBadge = "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300";
      if (ex.level === "Trung bình") levelBadge = "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
      if (ex.level === "Nâng cao") levelBadge = "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300";
      if (ex.level === "Đề thi") levelBadge = "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold";

      card.innerHTML = `
        <div class="flex items-start justify-between gap-4 mb-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs px-2 py-0.5 rounded-full ${levelBadge}">${ex.level}</span>
              <span class="text-xs text-slate-400 font-medium">${ex.chapterTitle}</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">${ex.title}</h3>
          </div>
        </div>

        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <strong>Đề bài:</strong> ${ex.problem}
        </p>

        <!-- Phân tích thuật toán -->
        <div class="text-xs text-slate-600 dark:text-slate-400 mb-4">
          ${getSvgIcon("lightbulb", "w-4 h-4 text-amber-500")} <strong class="text-blue-600 dark:text-blue-400">Phân tích & Hướng dẫn:</strong> ${ex.analysis}
        </div>

        <!-- Flowchart nút mở rộng -->
        ${ex.flowchart ? `
          <div class="mb-4">
            <button class="btn-toggle-flow text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:underline">
              ${getSvgIcon("git-merge", "no-margin w-3.5 h-3.5")}
              <span>Xem Sơ đồ khối (Flowchart)</span>
            </button>
            <div class="flow-container hidden mt-2">
              <div class="mermaid">${ex.flowchart}</div>
            </div>
          </div>
        ` : ''}

        <!-- Toggle xem lời giải -->
        <div class="border-t border-slate-100 dark:border-slate-800 pt-3">
          <button class="btn-toggle-sol px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center gap-2">
            ${getSvgIcon("chevron-down", "no-margin w-4 h-4")}
            <span>Xem Mã nguồn mẫu & Chú thích</span>
          </button>
          
          <div class="sol-container hidden mt-3">
            <div class="code-container">
              <button class="copy-btn">${getSvgIcon("copy", "no-margin w-3.5 h-3.5")} Copy</button>
              <pre><code class="language-python">${escapeHtml(ex.solution)}</code></pre>
            </div>
            ${ex.notes ? `<p class="text-xs text-amber-600 dark:text-amber-400 mt-2 bg-amber-50 dark:bg-amber-950/30 p-2 rounded">${getSvgIcon("pin", "w-3.5 h-3.5 text-amber-500")} <strong>Ghi chú:</strong> ${ex.notes}</p>` : ''}
          </div>
        </div>
      `;

      // Event listener mở flowchart
      const btnFlow = card.querySelector(".btn-toggle-flow");
      if (btnFlow) {
        btnFlow.addEventListener("click", () => {
          const flowBox = card.querySelector(".flow-container");
          flowBox.classList.toggle("hidden");
          initMermaid();
        });
      }

      // Event listener mở lời giải
      const btnSol = card.querySelector(".btn-toggle-sol");
      btnSol.addEventListener("click", () => {
        const solBox = card.querySelector(".sol-container");
        const isHidden = solBox.classList.toggle("hidden");
        btnSol.querySelector("span").innerText = isHidden ? "Xem Mã nguồn mẫu & Chú thích" : "Thu gọn mã nguồn";
        btnSol.querySelector("i").setAttribute("data-lucide", isHidden ? "chevron-down" : "chevron-up");
        renderSvgIcons();
        if (!isHidden && window.Prism) Prism.highlightAll();
      });

      listEl.appendChild(card);
    });

    postProcessContent();
  }

  // --- RENDER QUIZZES VIEW ---
  function renderQuizzesView() {
    viewContainer.innerHTML = `
      <div class="max-w-3xl mx-auto py-4 px-2">
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Trắc Nghiệm Tương Tác: Học là Nhớ</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">Kiểm tra mức độ hiểu sâu kiến thức bản chất, tránh lỗi sai ngớ ngẩn khi làm bài thi.</p>
        </div>

        <div id="quizzes-container" class="space-y-8"></div>
      </div>
    `;

    const container = document.getElementById("quizzes-container");

    window.QUIZZES_DATA.forEach((group, gIdx) => {
      const gBox = document.createElement("div");
      gBox.innerHTML = `
        <h2 class="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">${group.title}</h2>
        <div class="space-y-6" id="group-${gIdx}"></div>
      `;
      const qListEl = gBox.querySelector(`#group-${gIdx}`);

      group.questions.forEach((q, qIdx) => {
        const qCard = document.createElement("div");
        qCard.className = "quiz-card";

        qCard.innerHTML = `
          <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-base">${qIdx + 1}. ${escapeHtml(q.question).replace(/\\n/g, '<br>')}</h4>
          <div class="options-container space-y-2">
            ${q.options.map((opt, oIdx) => `
              <div class="quiz-option" data-option="${oIdx}">
                <span class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-500">${String.fromCharCode(65 + oIdx)}</span>
                <span class="text-sm">${escapeHtml(opt)}</span>
              </div>
            `).join('')}
          </div>
          <div class="quiz-explain text-slate-700 dark:text-slate-300">
            ${getSvgIcon("lightbulb", "w-4 h-4 text-blue-500")} <strong>Giải thích chi tiết:</strong> ${q.explain}
          </div>
        `;

        const options = qCard.querySelectorAll(".quiz-option");
        const explainBox = qCard.querySelector(".quiz-explain");

        options.forEach(optEl => {
          optEl.addEventListener("click", () => {
            const chosen = parseInt(optEl.getAttribute("data-option"));
            if (options[0].classList.contains("correct") || options[0].classList.contains("wrong")) return;

            if (chosen === q.answer) {
              optEl.classList.add("correct");
              showToast("Chính xác! Tuyệt vời.");
            } else {
              optEl.classList.add("wrong");
              options[q.answer].classList.add("correct");
              showToast("Chưa chính xác! Hãy đọc giải thích.");
            }
            explainBox.style.display = "block";
          });
        });

        qListEl.appendChild(qCard);
      });

      container.appendChild(gBox);
    });

    postProcessContent();
  }

  // --- RENDER CHEATSHEET VIEW ---
  function renderCheatsheetView() {
    viewContainer.innerHTML = `
      <div class="max-w-4xl mx-auto py-4 px-2">
        <div class="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Bảng Tra Cứu Nhanh (Cheatsheet)</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">Tổng hợp các hàm NumPy, lệnh Matplotlib, Tkinter và công thức Cơ Kỹ Thuật hay dùng nhất.</p>
        </div>

        <div class="space-y-8">
          ${window.CHEATSHEET_DATA.map(sec => `
            <div>
              <h2 class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                ${getSvgIcon("bookmark", "w-4 h-4")}
                <span>${sec.category}</span>
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${sec.items.map(item => `
                  <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-sm">
                    <div class="font-semibold text-sm text-slate-900 dark:text-white mb-1">${item.name}</div>
                    <pre class="bg-slate-50 dark:bg-slate-950 p-2 rounded text-xs font-mono text-blue-600 dark:text-blue-300 my-2 overflow-x-auto border border-slate-100 dark:border-slate-800"><code>${escapeHtml(item.code)}</code></pre>
                    <p class="text-xs text-slate-500 dark:text-slate-400">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    postProcessContent();
  }

  // 8. Render công thức toán học MathType (KaTeX)
  function renderMath() {
    const container = document.getElementById("view-container") || document.body;
    if (window.renderMathInElement) {
      try {
        renderMathInElement(container, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
        });
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    } else {
      setTimeout(renderMath, 150);
    }
  }

  // 9. Các tiện ích hỗ trợ (Copy code, Prism, Lucide, Escape HTML)
  function postProcessContent() {
    renderSvgIcons();
    if (window.Prism) Prism.highlightAll();
    initMermaid();
    renderMath();

    // Setup nút Copy Code
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const codeEl = btn.nextElementSibling.querySelector("code");
        if (codeEl) {
          navigator.clipboard.writeText(codeEl.innerText).then(() => {
            btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> Copied!`;
            renderSvgIcons();
            showToast("Đã sao chép mã nguồn vào clipboard!");
            setTimeout(() => {
              btn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy`;
              renderSvgIcons();
            }, 2000);
          });
        }
      });
    });
  }

  function escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Khởi chạy ban đầu
  renderSidebar();
  renderCurrentView();
});
