// أصوات أسماء الطلاب المسجلة في الاستوديو بصوت القارئ حامد المعتمد
const STUDENT_STUDIO_VOICES = {
    "عمر خالد العتيبي": "audio/students/st_omar_otaibi.mp3",
    "عمر خالد العتيبى": "audio/students/st_omar_otaibi.mp3",
    "عبدالرحمن الشمري": "audio/students/st_abdulrahman_shammari.mp3",
    "عبد الرحمن الشمري": "audio/students/st_abdulrahman_shammari.mp3",
    "سعود فيصل المطيري": "audio/students/st_saud_mutairi.mp3",
    "سعود فيصل المطيرى": "audio/students/st_saud_mutairi.mp3",
    "بدر عثمان السالم": "audio/students/st_badr_salem.mp3",
    "سلطان إبراهيم الغامدي": "audio/students/st_sultan_ghamdi.mp3",
    "سلطان ابراهيم الغامدي": "audio/students/st_sultan_ghamdi.mp3",
    "سلطان إبراهيم الغامدى": "audio/students/st_sultan_ghamdi.mp3",
    "سلطان ابراهيم الغامدى": "audio/students/st_sultan_ghamdi.mp3",
    "علي سامي الخالدي": "audio/students/st_ali_khaldi.mp3",
    "على سامي الخالدي": "audio/students/st_ali_khaldi.mp3",
    "علي سامى الخالدي": "audio/students/st_ali_khaldi.mp3",
    "علي سامي الخالدى": "audio/students/st_ali_khaldi.mp3",
    "يوسف عبدالله الشهري": "audio/students/st_yousef_shehri.mp3",
    "يوسف عبد الله الشهري": "audio/students/st_yousef_shehri.mp3",
    "يوسف عبدالله الشهرى": "audio/students/st_yousef_shehri.mp3",
    "يوسف عبد الله الشهرى": "audio/students/st_yousef_shehri.mp3",
    "محمد فهد الدوسري": "audio/students/st_mohammed_dosari.mp3",
    "محمد فهد الدوسرى": "audio/students/st_mohammed_dosari.mp3",
    "فهد ناصر العمري": "audio/students/st_fahad_omari.mp3",
    "فهد ناصر العمرى": "audio/students/st_fahad_omari.mp3",
    "إبراهيم ماجد القرني": "audio/students/st_ibrahim_qarni.mp3",
    "ابراهيم ماجد القرني": "audio/students/st_ibrahim_qarni.mp3",
    "إبراهيم ماجد القرنى": "audio/students/st_ibrahim_qarni.mp3",
    "ابراهيم ماجد القرنى": "audio/students/st_ibrahim_qarni.mp3",
    "سلمان فهد العنزي": "audio/students/st_salman_anzi.mp3",
    "سلمان فهد العنزى": "audio/students/st_salman_anzi.mp3",
    "معاذ سعد الحارثي": "audio/students/st_moath_harthi.mp3",
    "معاذ سعد الحارثى": "audio/students/st_moath_harthi.mp3",
    "عبدالإله محمد الغامدي": "audio/students/st_abdulelah_ghamdi.mp3",
    "عبد الإله محمد الغامدي": "audio/students/st_abdulelah_ghamdi.mp3",
    "عبدالاله محمد الغامدي": "audio/students/st_abdulelah_ghamdi.mp3",
    "عبد الاله محمد الغامدي": "audio/students/st_abdulelah_ghamdi.mp3",
    "عبدالإله محمد الغامدى": "audio/students/st_abdulelah_ghamdi.mp3",
    "عبد الإله محمد الغامدى": "audio/students/st_abdulelah_ghamdi.mp3",
    "نايف صالح القحطاني": "audio/students/st_nayef_qahtani.mp3",
    "نايف صالح القحطانى": "audio/students/st_nayef_qahtani.mp3",
    "سعود مشعل الدوسري": "audio/students/st_saud_meshal_dosari.mp3",
    "سعود مشعل الدوسرى": "audio/students/st_saud_meshal_dosari.mp3",
    "فيصل عبدالعزيز المالكي": "audio/students/st_faisal_malki.mp3",
    "فيصل عبد العزيز المالكي": "audio/students/st_faisal_malki.mp3",
    "فيصل عبدالعزيز المالكى": "audio/students/st_faisal_malki.mp3",
    "فيصل عبد العزيز المالكى": "audio/students/st_faisal_malki.mp3",
    "حمزة يحيى الزهراني": "audio/students/st_hamza_zahrani.mp3",
    "حمزه يحيى الزهراني": "audio/students/st_hamza_zahrani.mp3",
    "حمزة يحيى الزهرانى": "audio/students/st_hamza_zahrani.mp3",
    "حمزة يحي الزهراني": "audio/students/st_hamza_zahrani.mp3",
    "باسم خالد الشريف": "audio/students/st_basem_shareef.mp3",
    "أسامة عبدالله الدوسري": "audio/students/st_osama_dosari.mp3",
    "اسامة عبدالله الدوسري": "audio/students/st_osama_dosari.mp3",
    "أسامة عبد الله الدوسري": "audio/students/st_osama_dosari.mp3",
    "اسامة عبد الله الدوسري": "audio/students/st_osama_dosari.mp3",
    "أسامة عبدالله الدوسرى": "audio/students/st_osama_dosari.mp3",
    "طارق زياد العتيبي": "audio/students/st_tariq_otaibi.mp3",
    "طارق زياد العتيبى": "audio/students/st_tariq_otaibi.mp3",
    "ماجد سلطان الشهري": "audio/students/st_majed_shehri.mp3",
    "ماجد سلطان الشهرى": "audio/students/st_majed_shehri.mp3",
    "عاصم محمد السبيعي": "audio/students/st_asem_subaie.mp3",
    "عاصم محمد السبيعى": "audio/students/st_asem_subaie.mp3",
    "فواز إبراهيم القرني": "audio/students/st_fawaz_qarni.mp3",
    "فواز ابراهيم القرني": "audio/students/st_fawaz_qarni.mp3",
    "فواز إبراهيم القرنى": "audio/students/st_fawaz_qarni.mp3",
    "فواز ابراهيم القرنى": "audio/students/st_fawaz_qarni.mp3",
    "وليد أحمد الشمري": "audio/students/st_waleed_shammari.mp3",
    "وليد احمد الشمري": "audio/students/st_waleed_shammari.mp3",
    "وليد أحمد الشمرى": "audio/students/st_waleed_shammari.mp3",
    "وليد احمد الشمرى": "audio/students/st_waleed_shammari.mp3",
    "سامي ناصر القحطاني": "audio/students/st_sami_qahtani.mp3",
    "سامى ناصر القحطاني": "audio/students/st_sami_qahtani.mp3",
    "سامي ناصر القحطانى": "audio/students/st_sami_qahtani.mp3",
    "default_champion": "audio/students/default_champion.mp3",
    "حاتم فهد البقمي": "audio/students/st_hatem_buqmi.mp3",
    "حاتم فهد البقمى": "audio/students/st_hatem_buqmi.mp3",
    "ريان صالح الحربي": "audio/students/st_rayan_harbi.mp3",
    "ريان صالح الحربى": "audio/students/st_rayan_harbi.mp3"
};
const STUDENT_NORMALIZED_VOICES = {
    "عمر خالد العتيبي": "audio/students/st_omar_otaibi.mp3",
    "عبدالرحمن الشمري": "audio/students/st_abdulrahman_shammari.mp3",
    "سعود فيصل المطيري": "audio/students/st_saud_mutairi.mp3",
    "بدر عثمان السالم": "audio/students/st_badr_salem.mp3",
    "سلطان ابراهيم الغامدي": "audio/students/st_sultan_ghamdi.mp3",
    "علي سامي الخالدي": "audio/students/st_ali_khaldi.mp3",
    "يوسف عبدالله الشهري": "audio/students/st_yousef_shehri.mp3",
    "محمد فهد الدوسري": "audio/students/st_mohammed_dosari.mp3",
    "فهد ناصر العمري": "audio/students/st_fahad_omari.mp3",
    "ابراهيم ماجد القرني": "audio/students/st_ibrahim_qarni.mp3",
    "سلمان فهد العنزي": "audio/students/st_salman_anzi.mp3",
    "معاذ سعد الحارثي": "audio/students/st_moath_harthi.mp3",
    "عبدالاله محمد الغامدي": "audio/students/st_abdulelah_ghamdi.mp3",
    "نايف صالح القحطاني": "audio/students/st_nayef_qahtani.mp3",
    "سعود مشعل الدوسري": "audio/students/st_saud_meshal_dosari.mp3",
    "فيصل عبدالعزيز المالكي": "audio/students/st_faisal_malki.mp3",
    "حمزه يحيي الزهراني": "audio/students/st_hamza_zahrani.mp3",
    "حمزه يحي الزهراني": "audio/students/st_hamza_zahrani.mp3",
    "باسم خالد الشريف": "audio/students/st_basem_shareef.mp3",
    "اسامه عبدالله الدوسري": "audio/students/st_osama_dosari.mp3",
    "طارق زياد العتيبي": "audio/students/st_tariq_otaibi.mp3",
    "ماجد سلطان الشهري": "audio/students/st_majed_shehri.mp3",
    "عاصم محمد السبيعي": "audio/students/st_asem_subaie.mp3",
    "فواز ابراهيم القرني": "audio/students/st_fawaz_qarni.mp3",
    "وليد احمد الشمري": "audio/students/st_waleed_shammari.mp3",
    "سامي ناصر القحطاني": "audio/students/st_sami_qahtani.mp3",
    "حاتم فهد البقمي": "audio/students/st_hatem_buqmi.mp3",
    "ريان صالح الحربي": "audio/students/st_rayan_harbi.mp3"
};

function getStudentStudioAudio(name) {
    if (!name) return null;
    const clean = name.trim();
    if (STUDENT_STUDIO_VOICES[clean]) return STUDENT_STUDIO_VOICES[clean];

    // Normalize and check
    const norm = clean.replace(/[ً-ٰٟ]/g, '')
                      .replace(/[إأآ]/g, 'ا')
                      .replace(/ة/g, 'ه')
                      .replace(/ى/g, 'ي')
                      .replace(/عبد\s+/g, 'عبد')
                      .replace(/\s+/g, ' ')
                      .trim();

    if (STUDENT_NORMALIZED_VOICES[norm]) return STUDENT_NORMALIZED_VOICES[norm];

    // Substring match
    for (const [key, path] of Object.entries(STUDENT_NORMALIZED_VOICES)) {
        if (norm.includes(key) || key.includes(norm)) {
            return path;
        }
    }

    return null;
}
