export type Locale = 'en' | 'nl';

const translations = {
  en: {
    // NavBar
    nav_home: 'Home',
    nav_booking: 'Booking',
    nav_socials: 'Socials',
    nav_about: 'About',

    // Home page
    home_identity: 'DJ · Producer · The Netherlands',
    home_genres: 'Hardstyle · Frenchcore · Rawstyle',
    home_description:
      'High-energy sets for festival stages and club floors: relentless, precise, and built to move crowds.',
    home_cta_book: 'Book Now',
    home_cta_about: 'About Dinox',
    home_credibility: 'Performed at RandRock · Twenterand Run Festival',

    // About page
    about_header: 'About Dinox',
    about_subheader:
      'DJ, producer, and performer from the Netherlands, known for hardstyle, frenchcore, and rawstyle.',
    about_bio_title: 'BIO',
    about_bio_p1:
      'At {age} years old, DJ/Producer Dinox is a force to be reckoned with in the hardstyle and frenchcore scene. A lifelong fan of high-BPM music, Dinox discovered the electrifying energy of high-tempo beats at a young age and has been hooked ever since.',
    about_bio_p2:
      'With a mission to spread positive energy through music and performance, Dinox creates an unforgettable experience for every audience. Known for his dynamic sets and infectious enthusiasm, he combines passion with skill to deliver high-energy performances that leave crowds buzzing, whether at a packed nightclub, a festival stage, or an intimate event.',
    about_bio_p3:
      'Join Dinox on a journey where the beats are fast, the energy is high, and the vibes are always positive. Let the music move you and feel the rush that has driven Dinox since childhood.',
    about_producer_title: 'PRODUCER',
    about_producer_p1:
      'As a producer, Dinox started crafting his own tracks at 18, specializing in hardstyle, hardcore, frenchcore, and rawstyle.',
    about_producer_p2:
      'His goal is to infuse every track with emotion, creating a listening experience that makes the listener feel empowered and ready to take on the world, channeling positive energy and lifting their spirits.',
    about_producer_p3:
      'Drawing inspiration from the harderstyle scene, other music genres, and fellow artists, Dinox produced tracks like Don\u2019t Stop Running and Multiverse. By fusing different genre influences into a single vision, he carves out a distinctive sound within the harderstyle scene.',
    about_dj_title: 'DJ',
    about_dj_p1:
      'Dinox is known for his powerful, atmospheric sets, packed with intense kicks and melodic tracks that stay in your head long after the music fades. With a keen ear and sharp attention to detail, he carefully selects tracks that stir the crowd and perfectly match the energy of the event.',
    about_dj_p2:
      'Specializing in frenchcore, hardcore, hardstyle, and rawstyle, he consistently captivates his audience with unforgettable moments. New sets are regularly uploaded to SoundCloud, giving fans a direct taste of his distinctive style.',
    about_dj_p3:
      'Having performed at events like RandRock and the Twenterand Run festival, Dinox has proven he knows how to elevate a crowd and take any event to the next level. Add Dinox to your lineup and prepare for an explosive performance that will make the day truly unforgettable.',
    about_preview_title: 'DINOX PREVIEW',
    about_preview_tagline: 'What you see is what you get.',
    about_preview_cta:
      'Ready to bring that energy to your event? {link} and secure your booking.',
    about_preview_link: 'Get in touch',

    // Booking page
    booking_header: 'Book DJ Dinox',
    booking_subheader:
      "Bring high-energy hardstyle and frenchcore to your festival, club night, or private event. Fill in the form below and we\u2019ll be in touch.",
    booking_info_response: 'We will get back to you as soon as possible',
    booking_info_types: 'Festivals, clubs & private events',
    booking_info_contact: 'Direct contact:',

    // Booking form
    form_section_booking: 'Booking',
    form_event_name: 'Event Name',
    form_event_date: 'Event Date*',
    form_event_date_required: 'Event Date is required',
    form_event_time: 'Event Time*',
    form_event_time_required: 'Event Time is required',
    form_section_your_info: 'Your Information',
    form_company_name: 'Company Name*',
    form_company_name_required: 'Company Name is required',
    form_first_name: 'First Name*',
    form_first_name_required: 'First Name is required',
    form_last_name: 'Last Name',
    form_email: 'Email*',
    form_email_required: 'Email is required',
    form_phone: 'Phone*',
    form_phone_required: 'Phone is required',
    form_city: 'City',
    form_country: 'Country',
    form_section_event_info: 'Event Information',
    form_venue_name: 'Venue Name*',
    form_venue_name_required: 'Venue Name is required',
    form_street: 'Street',
    form_house_number: 'House Number',
    form_postal_code: 'Postal Code',
    form_venue_city: 'Venue City*',
    form_venue_city_required: 'Venue City is required',
    form_venue_country: 'Venue Country*',
    form_venue_country_required: 'Venue Country is required',
    form_extra_info: 'Optional extra information about the event',
    form_submit: 'Request Booking',
    form_submitting: 'Submitting...',
    form_success:
      'Booking request received. We will get back to you as soon as possible.',
    form_error: 'An error occurred. Please try again later.',

    // Socials page
    socials_header: 'Follow Dinox',
    socials_subheader:
      'Stay up to date with fresh tracks, mixes, and upcoming events across all platforms.',
    socials_instagram_desc: 'Photos, stories & event updates',
    socials_soundcloud_desc: 'Latest mixes, sets & track previews',
    socials_youtube_desc: 'Full sets & stage highlights',
    socials_spotify_desc: 'Stream original productions',
    socials_facebook_desc: 'News, events & announcements',
    socials_email_desc: 'Bookings & direct contact',

    // Footer
    footer_title: 'DJ & PRODUCER DINOX',
    footer_designed_by: 'Designed by',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_cookies: 'Cookies Policy',
    footer_cookie_settings: 'Cookies Settings',

    // Cookie consent
    cookie_title: 'Cookies',
    cookie_body:
      'We use cookies to improve your experience and analyse site usage.',
    cookie_learn_more: 'Learn more',
    cookie_decline: 'Decline',
    cookie_accept: 'Accept',
  },

  nl: {
    // NavBar
    nav_home: 'Home',
    nav_booking: 'Boeken',
    nav_socials: 'Socials',
    nav_about: 'Over',

    // Home page
    home_identity: 'DJ · Producer · Nederland',
    home_genres: 'Hardstyle · Frenchcore · Rawstyle',
    home_description:
      'Energieke sets voor festivalpodia en clubvloeren: ongenadig, precies en gebouwd om crowds te bewegen.',
    home_cta_book: 'Boek Nu',
    home_cta_about: 'Over Dinox',
    home_credibility: 'Opgetreden op RandRock · Twenterand Run Festival',

    // About page
    about_header: 'Over Dinox',
    about_subheader:
      'DJ, producer en performer uit Nederland, bekend om hardstyle, frenchcore en rawstyle.',
    about_bio_title: 'BIO',
    about_bio_p1:
      'Op {age}-jarige leeftijd is DJ/Producer Dinox een kracht om rekening mee te houden in de hardstyle en frenchcore scene. Als levenslang fan van high-BPM muziek ontdekte Dinox op jonge leeftijd de elektriserende energie van hoog-tempo beats en is sindsdien verslaafd.',
    about_bio_p2:
      'Met als missie positieve energie te verspreiden via muziek en performance, creëert Dinox een onvergetelijke ervaring voor elk publiek. Bekend om zijn dynamische sets en besmettelijk enthousiasme, combineert hij passie met vakmanschap om energieke optredens neer te zetten die het publiek in vervoering achterlaten, of het nu in een bomvolle nachtclub, op een festivalpodiom of bij een intiem evenement is.',
    about_bio_p3:
      'Ga mee op reis met Dinox waar de beats snel zijn, de energie hoog en de vibes altijd positief. Laat de muziek je bewegen en voel de rush die Dinox al vanaf zijn kindertijd drijft.',
    about_producer_title: 'PRODUCER',
    about_producer_p1:
      'Als producer begon Dinox op zijn 18e met het maken van eigen tracks, gespecialiseerd in hardstyle, hardcore, frenchcore en rawstyle.',
    about_producer_p2:
      'Zijn doel is om elke track te doordrenken met emotie, een luisterervaring te creëren die de luisteraar krachtig en klaar maakt om de wereld aan te kunnen, vol positieve energie en gevoel van inspiratie.',
    about_producer_p3:
      'Geïnspireerd door de harderstyle scene, andere muziekgenres en collega-artiesten produceerde Dinox tracks zoals Don\u2019t Stop Running en Multiverse. Door verschillende genre-invloeden samen te smelten tot één visie, hakt hij een kenmerkend geluid uit binnen de harderstyle scene.',
    about_dj_title: 'DJ',
    about_dj_p1:
      'Dinox staat bekend om zijn krachtige, atmosferische sets, vol intense kicks en melodieuze tracks die lang na het einde van de muziek blijven hangen. Met een scherp oor en oog voor detail selecteert hij zorgvuldig tracks die het publiek raken en perfect aansluiten bij de energie van het evenement.',
    about_dj_p2:
      'Gespecialiseerd in frenchcore, hardcore, hardstyle en rawstyle, boeit hij zijn publiek steeds weer met onvergetelijke momenten. Nieuwe sets worden regelmatig op SoundCloud geplaatst, zodat fans direct kunnen proeven van zijn kenmerkende stijl.',
    about_dj_p3:
      'Met optredens op evenementen als RandRock en het Twenterand Run festival heeft Dinox bewezen te weten hoe hij een crowd naar een hoger niveau tilt. Zet Dinox op je line-up en bereid je voor op een explosief optreden dat de dag werkelijk onvergetelijk maakt.',
    about_preview_title: 'DINOX PREVIEW',
    about_preview_tagline: 'Wat je ziet, is wat je krijgt.',
    about_preview_cta:
      'Klaar om die energie naar jouw evenement te brengen? {link} en zeker je boeking.',
    about_preview_link: 'Neem contact op',

    // Booking page
    booking_header: 'Boek DJ Dinox',
    booking_subheader:
      'Breng high-energy hardstyle en frenchcore naar jouw festival, clubavond of privé-evenement. Vul het formulier in en we nemen contact met je op.',
    booking_info_response: 'We nemen zo snel mogelijk contact met je op',
    booking_info_types: 'Festivals, clubs & privé-evenementen',
    booking_info_contact: 'Direct contact:',

    // Booking form
    form_section_booking: 'Boeking',
    form_event_name: 'Naam evenement',
    form_event_date: 'Datum evenement*',
    form_event_date_required: 'Datum evenement is verplicht',
    form_event_time: 'Tijd evenement*',
    form_event_time_required: 'Tijd evenement is verplicht',
    form_section_your_info: 'Jouw gegevens',
    form_company_name: 'Bedrijfsnaam*',
    form_company_name_required: 'Bedrijfsnaam is verplicht',
    form_first_name: 'Voornaam*',
    form_first_name_required: 'Voornaam is verplicht',
    form_last_name: 'Achternaam',
    form_email: 'E-mail*',
    form_email_required: 'E-mail is verplicht',
    form_phone: 'Telefoon*',
    form_phone_required: 'Telefoon is verplicht',
    form_city: 'Stad',
    form_country: 'Land',
    form_section_event_info: 'Evenementinformatie',
    form_venue_name: 'Naam locatie*',
    form_venue_name_required: 'Naam locatie is verplicht',
    form_street: 'Straat',
    form_house_number: 'Huisnummer',
    form_postal_code: 'Postcode',
    form_venue_city: 'Stad locatie*',
    form_venue_city_required: 'Stad locatie is verplicht',
    form_venue_country: 'Land locatie*',
    form_venue_country_required: 'Land locatie is verplicht',
    form_extra_info: 'Optionele extra informatie over het evenement',
    form_submit: 'Boeking aanvragen',
    form_submitting: 'Verzenden...',
    form_success:
      'Boekingsverzoek ontvangen. We nemen zo snel mogelijk contact met je op.',
    form_error: 'Er is een fout opgetreden. Probeer het later opnieuw.',

    // Socials page
    socials_header: 'Volg Dinox',
    socials_subheader:
      'Blijf op de hoogte van nieuwe tracks, mixes en aankomende evenementen op alle platforms.',
    socials_instagram_desc: "Foto's, stories & evenementupdates",
    socials_soundcloud_desc: 'Nieuwste mixes, sets & track previews',
    socials_youtube_desc: 'Volledige sets & podiumhighlights',
    socials_spotify_desc: 'Stream originele producties',
    socials_facebook_desc: 'Nieuws, evenementen & aankondigingen',
    socials_email_desc: 'Boekingen & direct contact',

    // Footer
    footer_title: 'DJ & PRODUCER DINOX',
    footer_designed_by: 'Ontworpen door',
    footer_privacy: 'Privacybeleid',
    footer_terms: 'Gebruiksvoorwaarden',
    footer_cookies: 'Cookiebeleid',
    footer_cookie_settings: 'Cookie-instellingen',

    // Cookie consent
    cookie_title: 'Cookies',
    cookie_body:
      'We gebruiken cookies om je ervaring te verbeteren en het sitegebruik te analyseren.',
    cookie_learn_more: 'Meer info',
    cookie_decline: 'Weigeren',
    cookie_accept: 'Accepteren',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
export default translations;
