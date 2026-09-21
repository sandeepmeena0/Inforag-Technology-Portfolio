/**
 * Inforag Technology — Official Company Portfolio Logic
 * Pure Vanilla JavaScript | Zero Dependencies | Ultra Smooth
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMobileMenu = () => {
    if (mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const isExpanded = mainNav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav item
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside header
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Reset when resizing window to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  // 3. Active Nav Link Highlighting via Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 4. Animated Progress Bars on Scroll
  const progressBars = document.querySelectorAll('.progress-fill');
  let animated = false;

  const triggerProgressAnimation = () => {
    progressBars.forEach(bar => {
      const targetVal = bar.getAttribute('data-progress');
      if (targetVal) {
        bar.style.width = `${targetVal}%`;
      }
    });
  };

  const aboutSection = document.getElementById('about');
  if ('IntersectionObserver' in window && aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          triggerProgressAnimation();
          animated = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(aboutSection);
  } else {
    triggerProgressAnimation();
  }

  // 5. REAL PORTFOLIO DATASET (All 90 Client Websites Categorized)
  const portfolioData = [
    // --- CATEGORY: SALONS & BEAUTY ---
    {
      title: 'Looks Salon India',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.lookssalon.in/',
      desc: 'Premier luxury salon chain offering bespoke hair styling, skin aesthetics, and bridal grooming.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: '28 Degree Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.28degreesalon.com/',
      desc: 'Exclusive aesthetic salon specializing in contemporary hair trends, styling, and premium treatments.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'The Beauty Lounge',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://thebeautylounge.in/',
      desc: 'High-end beauty sanctuary providing personalized spa therapies, beauty lounge, and makeover services.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Keira Salon & Spa',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://keira.co.in/',
      desc: 'Modern holistic wellness and salon brand known for rejuvenating skin rituals and hair artistry.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: "Shiva's Signature Salon",
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.shivassignature.com/',
      desc: 'Celebrity-favorite hair styling atelier delivering precision hair cuts, color, and luxury grooming.',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Naturals Salon & Spa',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.naturals.in/',
      desc: "India's pioneer chain of unisex salon and spas with pan-India network and standardized services.",
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Toni & Guy India',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://toniandguyindia.com/',
      desc: 'Iconic British hair-fashion salon delivering world-class editorial styling and high-fashion looks.',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Green Trends Unisex Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.mygreentrends.in/',
      desc: 'Accessible beauty and personal grooming salon chain delivering professional quality care.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Studio 11 Salon & Spa',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.studio11.co/',
      desc: 'Full-service destination for premium hair, beauty, and relaxation spa therapies.',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Geetanjali Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.geetanjalisalon.com/',
      desc: 'Award-winning high-fashion hair styling and bespoke luxury salon brand with multiple outlets.',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'VLCC Personal Care & Wellness',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://vlcc.com/',
      desc: 'Pioneering wellness and beauty leader providing holistic skin, body, and laser aesthetic solutions.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Smytten Beauty & Lifestyle',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://smytten.com/',
      desc: "India's largest product discovery and trial platform for premium cosmetics, skin, and grooming brands.",
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Master Crop Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.mastercropsalon.com/',
      desc: 'Expert hair cropping, balayage coloring, and premium men & women grooming salon.',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Mojo World Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://mojoworld.in/',
      desc: 'Vibrant unisex salon studio with specialized treatments for modern hair styling and aesthetics.',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Little Hair Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.littlehairsalon.com/',
      desc: 'Boutique styling lounge focusing on natural hair textures, bespoke coloring, and hair wellness.',
      image: 'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Purple Face Beauty',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://purpleface.in',
      desc: 'Bridal makeover and professional cosmetic studio with customized beauty packages.',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Aari Skin Aesthetics',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://aariskin.in/',
      desc: 'Advanced cosmetology and skin clinic offering non-invasive laser treatments and facials.',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Live True London',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://livetruelondon.com/',
      desc: 'Contemporary UK hair salon chain celebrated for tailored balayage and creative coloring.',
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Glasshouse Salon UK',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://glasshousesalon.co.uk/',
      desc: 'Sustainable, organic hair and wellness space focusing on eco-friendly, gentle haircare.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Duck & Dry London',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://duckanddry.com/',
      desc: 'Trendy blowout and updo styling bar in London with signature hair treatments and Prosecco bars.',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Oxana Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.oxanasalon.com/',
      desc: 'Exclusive European-inspired beauty lounge for precision cuts, bridal hair, and pampering.',
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Style House Salon',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://stylehousesalon.com/',
      desc: 'Trendy salon space offering extensions, texture treatments, and precision hair artistry.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Album Hair Studio',
      category: 'salons',
      categoryLabel: 'Salons & Beauty',
      url: 'https://www.albumhair.com/',
      desc: 'High-concept creative studio setting new benchmarks in hair styling and fashion artistry.',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop'
    },

    // --- CATEGORY: CLINICS AND HOSPITALS ---
    {
      title: 'Fortis Healthcare',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.fortishealthcare.com/',
      desc: 'One of the largest integrated healthcare networks with multi-super-speciality hospitals.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Max Healthcare',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.maxhealthcare.in/',
      desc: 'India-leading hospital network with world-class quaternary medical care and clinical talent.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Manipal Hospitals',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.manipalhospitals.com/',
      desc: 'Trusted healthcare delivery network providing tertiary treatment across diverse disciplines.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Wockhardt Hospitals',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.wockhardthospitals.com/',
      desc: 'Specialty medical institution recognized for cardiology, neurology, and advanced surgeries.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'CARE Hospitals',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.carehospitals.com/',
      desc: 'Premier multispeciality healthcare group serving patients with comprehensive medical excellence.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Kaya Skin Clinic',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.kaya.in/',
      desc: 'India’s foremost dermatology clinic chain delivering scientifically-backed skin & hair therapies.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Oliva Skin & Hair Clinic',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.olivaclinic.com/',
      desc: 'Pioneering medico-aesthetic clinic delivering US-FDA approved laser skin and trichology care.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Richfeel Trichology Naturals',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.richfeelnaturals.com/',
      desc: 'First certified trichological clinic in India specializing in scalp health, alopecia, and hair care.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Nethradhama Super Speciality Eye Hospital',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://nethradhama.org/',
      desc: 'World-class ophthalmological center pioneering laser refractive surgeries and eye therapies.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Sabka Dentist Clinics',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://sabkadentist.com/',
      desc: 'Affordable, standardized dental care clinic network serving over 100+ locations across India.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'One Medical Primary Care',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.onemedical.com/',
      desc: 'Tech-enabled modern primary care platform blending 24/7 virtual care with in-person clinics.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Cleveland Clinic',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://my.clevelandclinic.org/',
      desc: 'Nonprofit multispecialty academic medical center renowned worldwide for clinical excellence.',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Appletree Medical Group',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.appletreemedicalgroup.com',
      desc: 'Comprehensive multi-clinic network providing convenient family and walk-in clinical care.',
      image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Sonic Healthcare Global',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.sonichealthcare.com/',
      desc: 'International healthcare leader delivering laboratory pathology and diagnostic imaging.',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'InstantScripts Telehealth',
      category: 'clinics',
      categoryLabel: 'Clinics & Hospitals',
      url: 'https://www.instantscripts.com.au/',
      desc: 'Rapid digital prescription, doctor consultation, and telehealth medical platform.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop'
    },

    // --- CATEGORY: HOTELS AND RESTAURANTS ---
    {
      title: 'Hotel Pawan Putra',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://hotelpawanputra.com/',
      desc: 'Comfortable leisure hotel featuring grand banquet facilities, corporate suites, and dining.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Roland Hotel Kolkata',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'http://rolandhotel.com/',
      desc: 'Contemporary boutique business hotel in South Kolkata with fine dining and curated stays.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Om Shanti Hotel',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://omshantihotel.com',
      desc: 'Serene hospitality and dining destination known for warm service and comfortable lodgings.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hotel De Mattrie',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://www.demattrie.in/',
      desc: 'Charming city hotel offering modern accommodations and delightful multi-cuisine food.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Barsana Boutique Hotel Kolkata',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://www.barsanahotelkolkata.com/',
      desc: 'Luxury pure-vegetarian boutique hotel and banquet destination with culinary excellence.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'The Residency Hotel',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://theresidency.co.in/',
      desc: 'Celebrated four-star business hospitality group delivering lavish suites and premier banqueting.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Second House Kolkata Dining',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://www.secondhousekolkata.com/',
      desc: 'Artisanal cafe, lounge, and culinary dining destination with handcrafted gourmet menus.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hotel Golden Parkk',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://goldenparkk.com',
      desc: 'Iconic boutique hotel in central city hub featuring nightlife, restaurants, and executive stays.',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Indismart Hotel',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://indismart.in/',
      desc: 'Modern tech-centric hotel in the IT corridor catering to business travelers and conferences.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'The Regency Hotel Mumbai',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://www.theregencymumbai.in/',
      desc: 'Sophisticated transit and corporate hotel close to Mumbai airport with premium hospitality.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hotel Apna Avenue',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://hotelapnaavenue.com',
      desc: 'Prime hospitality venue in Indore with modern family rooms, banquet hall, and fast service.',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hotel Amer Palace',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://www.hotelamerpalace.com/',
      desc: 'Historic hospitality palace offering regal ambiance, grand conference facilities, and dining.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Beacon Hotels & Resorts',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://beaconhotels.com/',
      desc: 'Smart, eco-conscious business hotels designed for corporate and modern millennial travel.',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Ira by Orchid Hotels',
      category: 'hotels',
      categoryLabel: 'Hotels & Dining',
      url: 'https://irahotels.com/bhubaneshwar.html',
      desc: 'Upscale corporate hotel in Bhubaneswar with deluxe suites, specialty dining, and spas.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop'
    },

    // --- CATEGORY: SHOPS AND BOUTIQUES ---
    {
      title: 'Ekas Signature Boutique',
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://www.ekassignature.in/',
      desc: 'Bespoke ethnic couture, designer suits, and festive bridal ensembles made to measure.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: "Nakoda's Designer Boutique",
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://www.nakodasboutique.com/',
      desc: 'Exquisite handcrafted sarees, bridal lehengas, and heritage Indian ethnic creations.',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Prathama Fashion Boutique',
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://prathama.ueniweb.com/',
      desc: 'Custom-tailored ladies fashion boutique with ethnic collections and stylish western outfits.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Bansanwar Handcrafted Ethnic',
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://bansanwar.com/',
      desc: 'Traditional artisan fashion, festive kurtas, and classic handwoven fabrics.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Erigo Originals Fashion Studio',
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://erigooriginals.localo.site/',
      desc: 'Trendy lifestyle apparel store specializing in urban casuals and custom fashion styling.',
      image: 'https://images.unsplash.com/photo-1525562723836-d6f07fe31270?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Seema Silai Centre & Studio',
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://seemasilaicentre.live/',
      desc: 'Dedicated tailoring center and fashion institute creating tailored dresses and stitching.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Amoha Fashion Studio',
      category: 'shops',
      categoryLabel: 'Shops & Boutiques',
      url: 'https://amohafashion.in/',
      desc: 'Contemporary women’s ethnic silhouettes, festive kurtis, and designer occasion wear.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'
    },

    // --- CATEGORY: CONSULTANCY & ADVISORY ---
    {
      title: 'GSK & Associates Chartered Accountants',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://www.gskca.com/',
      desc: 'Chartered accounting firm providing statutory audits, corporate taxation, and financial advisory.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Keshavam International Advisors',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://keshavaminternational.co.in/',
      desc: 'Global business and trade consulting firm facilitating exports, compliance, and international expansion.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'KNJ Projects Management',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://www.knjprojects.com/',
      desc: 'Strategic infrastructure consultants specializing in commercial project management and execution.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: '100 Consultant Strategic Hub',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://100consultant.com/',
      desc: 'Business development and scaling advisory firm helping SMEs optimize operations and growth.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Patel Consultancy & Legal Advisors',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://www.patelconsultancy.in/',
      desc: 'Corporate tax consultants offering legal registrations, compliance, and accounting systems.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: '51k Growth Hub Corporate Advisory',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://www.51kgrowthhub.com/',
      desc: 'Innovation accelerator helping businesses scale with mentorship, marketing, and funding strategy.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Brand Ur Business Marketing Consultants',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      url: 'https://brandurbusiness.com/in',
      desc: 'Holistic brand management and marketing consultancy driving corporate visibility and sales.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },

    // --- CATEGORY: REAL ESTATE ---
    {
      title: 'My Space India Real Estate',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://myspaceindia.biz/',
      desc: 'Premier commercial and residential real estate advisory firm connecting investors with prime properties.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'JD Associates Property Advisory',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://jdassociatesindore.wixsite.com/',
      desc: 'Trusted real estate broking firm in Indore specializing in land acquisitions and luxury homes.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Smart Space Indore Real Estate',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://www.smartspaceindore.com/',
      desc: 'Commercial leasing, co-working infrastructure, and premium corporate offices in Indore.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Rahul Real Estate Services',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://rahulrealestate.com/',
      desc: 'Reliable real estate advisory dealing in agricultural farmlands, residential villas, and plots.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Shreenath Real Estate Group',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://shreenathrealestate.in/',
      desc: 'Real estate developers creating master-planned residential townships, row-houses, and properties.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Land Acers Property Consultants',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://www.landacers.com/',
      desc: 'Specialist property consultancy for high-value agricultural plots, commercial lands, and investment.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'SAA One Luxury Real Estate',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://saa.one/',
      desc: 'Elite luxury developer showcasing ultra-modern residences with smart architecture and amenities.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Alaya Realty Developments',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://www.alayarealty.in/',
      desc: 'Boutique real estate brand focusing on sustainable housing, gated apartments, and community spaces.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'B Motilal Group Builders',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://www.bmotilalgroup.com/',
      desc: 'Established civil builders and property developers known for landmark commercial buildings.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Ideal Real Estate Developers',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      url: 'https://www.ideal.in/',
      desc: 'Prominent real estate development group transforming urban skylines with landmark residences.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop'
    },

    // --- CATEGORY: ECOMMERCE ---
    {
      title: 'Manthan Stones & Decor',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://manthanstones.in/',
      desc: 'D2C online store for natural stones, granites, wall cladding, and architectural home decor.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Sayoori Woman Ethnic Store',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://sayooriwoman.in/',
      desc: 'E-commerce fashion destination for women featuring handcrafted kurtis, suits, and daily festive wear.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Swastik Marbles & Tiles',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://swastikmarbles.in/',
      desc: 'Online building supplies store for premium Italian marbles, tiles, quartz, and home finishes.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Bhaarat Bazaar D2C Superstore',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.bhaaratbazaar.com/',
      desc: 'Fast-moving consumer goods and multi-category online store bringing regional groceries home.',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'StoreSutra Online Megastore',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.storesutra.in/',
      desc: 'E-commerce marketplace offering lifestyle essentials, gadgets, kitchenware, and daily savings.',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Home of Adah Lifestyle',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://homeofadah.com/',
      desc: 'Conscious handcrafted lifestyle store offering eco-friendly fashion, table linens, and decor.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Sanskriti Heritage E-Commerce',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.sanskritiecommerce.com/',
      desc: 'Online showcase for authentic Indian heritage textiles, vintage sarees, and artisanal jewelry.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Handkraft Market Artisanal Goods',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.handkraftmarket.com/',
      desc: 'Fair-trade online marketplace bridging rural Indian artisans with global conscious buyers.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Melaan Handcrafted Apparel',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.melaan.in/',
      desc: 'Modern artisanal apparel brand featuring hand-block prints and breathable cotton dresses.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Paasho Designer Wear',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://paasho.com/',
      desc: 'Contemporary women’s designer wear online with festive collections, lehengas, and fusion wear.',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Terra Shoppy Sustainable Products',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://terrashoppy.com/',
      desc: 'Eco-conscious e-commerce platform offering plastic-free alternatives and wellness products.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Navarithi Fashion & Sarees',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.navarithi.com/',
      desc: 'Online saree and bridal boutique with pure silks, banarasis, and designer blouse tailoring.',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Pinecone India Minimalist Decor',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://pineconeindia.in/',
      desc: 'Handcrafted wooden home decor, desk accents, and sustainable corporate gifts online store.',
      image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'GetBanaya Custom Products',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      url: 'https://www.getbanaya.in/',
      desc: 'Personalized gifting and custom merchandise platform for birthdays, weddings, and corporates.',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop'
    }
  ];

  // 6. RENDER PORTFOLIO CARDS DIRECTLY
  const portfolioGrid = document.getElementById('portfolioGrid');
  const projectCountSpan = document.getElementById('projectCount');

  const renderPortfolio = (filter = 'salons') => {
    if (!portfolioGrid) return;

    const filtered = portfolioData.filter(item => item.category === filter);

    if (projectCountSpan) {
      projectCountSpan.textContent = filtered.length;
    }

    portfolioGrid.innerHTML = filtered.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="portfolio-card" data-category="${item.category}" title="Visit ${item.title}">
        <div class="card-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="card-badge-floating">${item.categoryLabel}</span>
          <div class="card-visit-overlay">
            <span class="overlay-text">Visit Live Website</span>
            <div class="overlay-btn-icon">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
        <div class="card-details">
          <span class="card-cat">${item.categoryLabel}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-summary">${item.desc}</p>
          <div class="card-link-cta">
            <span>Explore Website</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </a>
    `).join('');
  };

  // Initial render with first category (Salons & Beauty)
  renderPortfolio('salons');

  // 7. FILTER BUTTONS HANDLING
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');
      renderPortfolio(filterValue);
    });
  });

  // 8. Auto-update current year in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
