/**
 * ELECTRICAL SERVICES — Vanilla JavaScript Application
 * TSCG Technologies Portfolio Demo
 * Accessible, lightweight, zero-dependency script.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Header Sticky & Scroll Dynamics
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  const handleScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (siteHeader) {
      if (scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close when clicking outside or clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !siteHeader.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. Highlight Current Page in Navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 4. Scroll Reveal via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 5. FAQ Accordion Functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 6. Project Category Filtering (Projects Page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 7. Project Details Modal System
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = projectModal ? projectModal.querySelector('.modal-close-btn') : null;
  const projectButtons = document.querySelectorAll('[data-project-trigger]');

  const projectData = {
    'proj-1': {
      title: 'Modern Residential Lighting Setup',
      category: 'Residential • Architectural Illumination',
      image: 'images/electrical-project-residential.jpg',
      desc: 'An architectural multi-zone lighting scheme featuring low-glare downlights, ambient recessed LED cove lighting, and digital scene controls for contemporary living spaces.',
      scope: [
        'Multi-channel LED circuit distribution and dimming',
        'Ceiling cove indirect architectural accent runs',
        'Wall plate smart scene switches and preset controllers',
        'Low-voltage driver isolation and clean concealed raceways'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-2': {
      title: 'Complete Home Electrical Rewiring',
      category: 'Residential • Infrastructure & Safety Upgrade',
      image: 'images/electrical-project-wiring.jpg',
      desc: 'Demonstration concept for comprehensive full-property rewiring, replacing legacy conduit with insulated dual-core fire-retardant cabling, dedicated circuit runs, and structured earth continuity.',
      scope: [
        'Phase load calculation and sub-circuit segregation',
        'Dedicated high-load lines for kitchen appliances and AC units',
        'Complete neutral link modernization and earthing electrode bond',
        'Installation of tamper-resistant safety socket assemblies'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-3': {
      title: 'Commercial Office Lighting & Power Grid',
      category: 'Commercial • Corporate Workspace Fit-Out',
      image: 'images/electrical-project-commercial.jpg',
      desc: 'Structured power routing and glare-controlled modular linear suspended lighting for modern open-plan workstations, boardrooms, and server rooms.',
      scope: [
        'Underfloor modular busbar power track integration',
        'Emergency egress lighting with automatic battery inverter backup',
        'Daylight-harvesting photocell dimming controls',
        'Isolated clean power circuits for sensitive IT server infrastructure'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-4': {
      title: 'Main Distribution Panel Installation',
      category: 'Commercial & Industrial • Switchboard Infrastructure',
      image: 'images/electrical-project-panel.jpg',
      desc: 'High-amperage 3-phase modular distribution board assembly featuring high-breaking-capacity MCCBs, RCBO branch protection, digital multimeter metering, and surge diversion.',
      scope: [
        'Busbar phase load balancing and phase-rotation verification',
        'Type 2 coordinated surge protective device (SPD) array',
        'Industrial labelling, single-line schematic documentation frame',
        'Torque-calibrated terminations with tamper inspection seals'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-5': {
      title: 'Retail Storefront Electrical Fit-Out',
      category: 'Commercial • High-Impact Retail Display',
      image: 'images/electrical-project-retail.jpg',
      desc: 'Dynamic retail electrical design featuring high-CRI directional track lighting, illuminated brand facade signage power supply, and point-of-sale isolated circuits.',
      scope: [
        'High-density 3-circuit track lighting with adjustable beam optics',
        'Timer-controlled illuminated display showcase circuits',
        'Hidden sub-surface cable raceways for clean customer pathways',
        'Energy monitoring dashboard sub-metering unit'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-6': {
      title: 'Architectural Outdoor & Landscape Lighting',
      category: 'Lighting • Exterior & Security Systems',
      image: 'images/electrical-project-outdoor-lighting.jpg',
      desc: 'Weatherproof IP67-rated architectural exterior illumination, grazing building facade features, perimeter garden pathway bollards, and low-voltage security spotlights.',
      scope: [
        'IP68 gel-filled waterproof underground junction enclosures',
        'Astronomical timer and dusk-to-dawn ambient lux sensor integration',
        'Independent safety isolation switches for outdoor rings',
        'Marine-grade corrosion-resistant brass and aluminum luminaires'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-7': {
      title: '3-Phase Industrial Service Upgrade',
      category: 'Electrical Installation • Capacity Modernization',
      image: 'images/electrical-project-upgrade.jpg',
      desc: 'Conceptual upgrade from standard single-phase residential feed to robust three-phase utility feed capable of powering heavy machinery, workshop tools, and multi-unit split AC systems.',
      scope: [
        'Utility service intake isolation and heavy-duty meter enclosure',
        'Balanced phase distribution across dedicated machinery circuits',
        'Harmonic filtering and motor-rated overload protective switches',
        'Main earthing terminal upgrade with deep chemical ground rod'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    },
    'proj-8': {
      title: 'Dual High-Output EV Charging Concept',
      category: 'Modern Solutions • Electric Vehicle Infrastructure',
      image: 'images/electrical-project-ev-charging.jpg',
      desc: 'Dedicated 22kW three-phase Level 2 EV charging station installation demo with smart dynamic load-shedding to prevent domestic overload during peak grid usage.',
      scope: [
        'Dedicated 32A / 400V circuit with Type B RCD residual current unit',
        'Dynamic current transformer (CT) clamp load management module',
        'Weather-sealed tethered charging cable dock and pedestal mount',
        'Surge protection module and smart mobile metering sync'
      ],
      notice: 'Illustrative demonstration concept. Does not represent actual client work.'
    }
  };

  const openProjectModal = (projId) => {
    const data = projectData[projId];
    if (!data || !projectModal) return;

    projectModal.querySelector('.modal-title').textContent = data.title;
    projectModal.querySelector('.modal-cat').textContent = data.category;
    projectModal.querySelector('.modal-img').src = data.image;
    projectModal.querySelector('.modal-img').alt = data.title;
    projectModal.querySelector('.modal-desc').textContent = data.desc;

    const scopeList = projectModal.querySelector('.modal-scope');
    scopeList.innerHTML = '';
    data.scope.forEach(item => {
      const li = document.createElement('li');
      li.className = 'feature-check-item';
      li.innerHTML = `
        <span class="feature-check-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span>${item}</span>
      `;
      scopeList.appendChild(li);
    });

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  };

  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  projectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project-trigger');
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // 8. Image Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = lightboxModal ? lightboxModal.querySelector('.modal-close-btn') : null;
  const lightboxImg = lightboxModal ? lightboxModal.querySelector('.lightbox-img') : null;
  const lightboxCaption = lightboxModal ? lightboxModal.querySelector('.lightbox-caption') : null;

  const openLightbox = (src, caption) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Electrical Services Preview';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-modal')) {
        closeLightbox();
      }
    });
  }

  // Allow clicking on project card images to open lightbox
  document.querySelectorAll('[data-lightbox-src]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-lightbox-src');
      const caption = el.getAttribute('data-lightbox-caption');
      openLightbox(src, caption);
    });
  });

  // Global ESC key listener for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeLightbox();
      const demoModal = document.getElementById('demo-confirm-modal');
      if (demoModal && demoModal.classList.contains('open')) {
        demoModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });

  // 9. Interactive Demo Notice Modal Helper
  const showDemoConfirmationModal = (title, message, isEmergency = false) => {
    let demoModal = document.getElementById('demo-confirm-modal');
    if (!demoModal) {
      demoModal = document.createElement('div');
      demoModal.id = 'demo-confirm-modal';
      demoModal.className = 'modal-backdrop';
      demoModal.innerHTML = `
        <div class="modal-content" style="max-width: 520px; text-align: center;">
          <button type="button" class="modal-close-btn" aria-label="Close modal">&times;</button>
          <div class="modal-body" style="padding: 36px 28px;">
            <div id="demo-modal-icon" style="width: 56px; height: 56px; margin: 0 auto 16px auto; border-radius: 50%; display: flex; align-items: center; justify-content: center;"></div>
            <h3 id="demo-modal-title" style="font-size: 1.35rem; font-weight: 800; margin-bottom: 12px; color: var(--text-primary);"></h3>
            <p id="demo-modal-desc" style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;"></p>
            <div style="background: rgba(16, 29, 43, 0.7); border: 1px dashed var(--border-subtle); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 24px;">
              <span class="demo-watermark-tag">DEMO PORTFOLIO SIMULATION</span>
              <p style="font-size: 0.78rem; color: var(--text-dim); margin-top: 6px;">No actual electrical enquiry was transmitted. No personal data was saved or processed.</p>
            </div>
            <button type="button" class="btn btn-primary demo-modal-ok-btn" style="width: 100%;">Understood &amp; Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(demoModal);

      demoModal.querySelector('.modal-close-btn').addEventListener('click', () => {
        demoModal.classList.remove('open');
        document.body.style.overflow = '';
      });
      demoModal.querySelector('.demo-modal-ok-btn').addEventListener('click', () => {
        demoModal.classList.remove('open');
        document.body.style.overflow = '';
      });
      demoModal.addEventListener('click', (e) => {
        if (e.target === demoModal) {
          demoModal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    const iconBox = demoModal.querySelector('#demo-modal-icon');
    if (isEmergency) {
      iconBox.style.background = 'rgba(255, 155, 66, 0.2)';
      iconBox.style.color = 'var(--safety-orange)';
      iconBox.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    } else {
      iconBox.style.background = 'rgba(53, 201, 230, 0.2)';
      iconBox.style.color = 'var(--bright-cyan)';
      iconBox.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    }

    demoModal.querySelector('#demo-modal-title').textContent = title;
    demoModal.querySelector('#demo-modal-desc').innerHTML = message;
    demoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // 10. Contact Form Validation & Demonstration Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = contactForm.querySelector('#full-name');
      const phoneInput = contactForm.querySelector('#phone-number');
      const emailInput = contactForm.querySelector('#email-address');
      const serviceInput = contactForm.querySelector('#service-required');
      const messageInput = contactForm.querySelector('#message');

      const validateField = (input, condition, errorMsg) => {
        const errorEl = input.parentElement.querySelector('.form-error-msg');
        if (!condition) {
          input.classList.add('error');
          if (errorEl) {
            errorEl.textContent = errorMsg;
            errorEl.classList.add('visible');
          }
          isValid = false;
        } else {
          input.classList.remove('error');
          if (errorEl) {
            errorEl.classList.remove('visible');
          }
        }
      };

      // Validations
      validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name.');
      const phoneRegex = /^[0-9+\s\-()]{7,15}$/;
      validateField(phoneInput, phoneRegex.test(phoneInput.value.trim()), 'Please enter a valid phone number.');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
      validateField(serviceInput, serviceInput.value !== '', 'Please select a service.');
      validateField(messageInput, messageInput.value.trim().length >= 10, 'Please provide brief details (min 10 chars).');

      if (!isValid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="pulse-dot" style="display:inline-block; margin-right:8px;"></svg> Processing Demo...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        contactForm.reset();

        showDemoConfirmationModal(
          'Enquiry Submitted (Demonstration)',
          'Thank you for testing the Electrical Services portfolio demo. In a live production deployment, this enquiry would be safely routed to your dispatch software or client inbox.'
        );
      }, 700);
    });
  }

  // 11. Emergency Request Form Validation & Simulation
  const emergencyForm = document.getElementById('emergency-form');
  if (emergencyForm) {
    emergencyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = emergencyForm.querySelector('#emerg-name');
      const phoneInput = emergencyForm.querySelector('#emerg-phone');
      const locationInput = emergencyForm.querySelector('#emerg-location');
      const issueInput = emergencyForm.querySelector('#emerg-issue');
      const descInput = emergencyForm.querySelector('#emerg-desc');

      const checkField = (input, condition, msg) => {
        const errorEl = input.parentElement.querySelector('.form-error-msg');
        if (!condition) {
          input.classList.add('error');
          if (errorEl) {
            errorEl.textContent = msg;
            errorEl.classList.add('visible');
          }
          isValid = false;
        } else {
          input.classList.remove('error');
          if (errorEl) {
            errorEl.classList.remove('visible');
          }
        }
      };

      checkField(nameInput, nameInput.value.trim().length >= 2, 'Name is required.');
      const phoneRegex = /^[0-9+\s\-()]{7,15}$/;
      checkField(phoneInput, phoneRegex.test(phoneInput.value.trim()), 'Valid contact number is required.');
      checkField(locationInput, locationInput.value.trim().length >= 3, 'Location is required.');
      checkField(issueInput, issueInput.value !== '', 'Please select the issue type.');
      checkField(descInput, descInput.value.trim().length >= 8, 'Brief description required.');

      if (!isValid) return;

      const submitBtn = emergencyForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Request...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        emergencyForm.reset();

        showDemoConfirmationModal(
          'Emergency Alert Simulation Received',
          '<strong>SAFETY REMINDER:</strong> This is an interactive demo interface. If you are experiencing an actual electrical fire or sparking in real life, evacuate the space immediately and dial your local national emergency services.<br><br>No real technicians have been dispatched.',
          true
        );
      }, 700);
    });
  }
});
