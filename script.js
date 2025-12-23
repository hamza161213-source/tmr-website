// Mindbody integration configuration
const MINDBODY_CONFIG = {
  siteId: 'YOUR_SITE_ID', // Replace with your Mindbody Site ID
  apiKey: 'YOUR_API_KEY', // Replace with your Mindbody API Key
  bookingURL: 'https://your-mindbody-login-page.mindbody.io' // Replace with your booking link
};

document.addEventListener('DOMContentLoaded', function(){
  // Force scroll to top on page load
  if(window.location.hash){
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }

  const form = document.getElementById('contactForm');
  if(form){
    // If using Netlify Forms, allow the browser to submit normally
    const usesNetlify = form.getAttribute('data-netlify') === 'true';
    if(!usesNetlify){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        if(!name||!email||!message){
          alert('Please complete all fields.');
          return;
        }
        alert('Thanks, ' + name + '! Your message has been received. We will be in touch.');
        form.reset();
      });
    }
  }

  // Mindbody booking integration
  const bookingLinks = document.querySelectorAll('.mindbody-booking');
  bookingLinks.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      // Redirect to Mindbody booking system
      window.location.href = MINDBODY_CONFIG.bookingURL;
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = this.getAttribute('href');
      if(target && target.startsWith('#') && !this.classList.contains('mindbody-booking')){
        const el = document.querySelector(target);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });

  // Back to top button functionality
  const backToTop = document.getElementById('backToTop');
  if(backToTop){
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function(){
      if(window.scrollY > 300){
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }

  // Scroll-based fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in to main sections (except hero which has its own animation)
  const sections = document.querySelectorAll('section:not(.hero)');
  sections.forEach((section, index) => {
    section.classList.add('fade-in');
    // Check if element is already in viewport
    const rect = section.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    if(isInView){
      // Add visible class immediately if in view on load
      setTimeout(() => section.classList.add('visible'), 100);
    } else {
      fadeObserver.observe(section);
    }
  });

  // Add staggered fade-in to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.classList.add('fade-in-up');
    if(index < 4) card.classList.add(`stagger-${index + 1}`);
    fadeObserver.observe(card);
  });

  // Add fade-in to features
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    feature.classList.add('fade-in-up');
    if(index < 4) feature.classList.add(`stagger-${index + 1}`);
    fadeObserver.observe(feature);
  });

  // Add fade-in to pricing rows
  const pricingRows = document.querySelectorAll('.pricing-table .row');
  pricingRows.forEach((row, index) => {
    row.classList.add('fade-in');
    if(index < 4) row.classList.add(`stagger-${index + 1}`);
    fadeObserver.observe(row);
  });

  // Add fade-in to FAQ items and accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    item.classList.add('fade-in');
    if(index < 4) item.classList.add(`stagger-${Math.min(index + 1, 4)}`);
    fadeObserver.observe(item);
    
    // Add accordion functionality
    const question = item.querySelector('.faq-question');
    if(question){
      question.addEventListener('click', function(){
        // Close other open items
        faqItems.forEach(otherItem => {
          if(otherItem !== item && otherItem.classList.contains('active')){
            otherItem.classList.remove('active');
          }
        });
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
});

