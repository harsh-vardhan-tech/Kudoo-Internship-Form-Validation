// ====== Form Validation ======
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

const fields = {
  name: {
    el: document.getElementById('name'),
    err: document.getElementById('errName'),
    validate: (v) => {
      if (!v.trim()) return 'Please enter your name.';
      if (v.trim().length < 2) return 'Name must be at least 2 characters.';
      if (!/^[a-zA-Z\s.'-]+$/.test(v.trim())) return 'Name can only contain letters.';
      return '';
    }
  },
  email: {
    el: document.getElementById('email'),
    err: document.getElementById('errEmail'),
    validate: (v) => {
      if (!v.trim()) return 'Please enter your email.';
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!re.test(v.trim())) return 'Please enter a valid email address.';
      return '';
    }
  },
  phone: {
    el: document.getElementById('phone'),
    err: document.getElementById('errPhone'),
    validate: (v) => {
      if (!v.trim()) return 'Please enter your phone number.';
      // strip spaces, +, -, ()
      const cleaned = v.replace(/[\s+\-()]/g, '');
      if (!/^\d{10,15}$/.test(cleaned)) return 'Phone must be 10–15 digits.';
      return '';
    }
  },
  message: {
    el: document.getElementById('message'),
    err: document.getElementById('errMessage'),
    validate: (v) => {
      if (!v.trim()) return 'Please write a short message.';
      if (v.trim().length < 10) return 'Message should be at least 10 characters.';
      return '';
    }
  }
};

// Live validation as user types
Object.keys(fields).forEach((key) => {
  const f = fields[key];
  f.el.addEventListener('input', () => validateField(key));
  f.el.addEventListener('blur', () => validateField(key));
});

function validateField(key) {
  const f = fields[key];
  const value = f.el.value;
  const err = f.validate(value);
  const wrap = f.el.closest('.field');

  if (err) {
    wrap.classList.add('error');
    wrap.classList.remove('success');
    f.err.textContent = err;
    return false;
  } else {
    wrap.classList.remove('error');
    wrap.classList.add('success');
    f.err.textContent = '';
    return true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let allValid = true;
  Object.keys(fields).forEach((key) => {
    if (!validateField(key)) allValid = false;
  });

  if (!allValid) {
    // shake form-card for feedback
    const card = document.querySelector('.form-card');
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = 'shake 0.4s';
    return;
  }

  // Show success message
  successMsg.classList.add('show');

  // Reset form after 1.5s
  setTimeout(() => {
    form.reset();
    Object.keys(fields).forEach((key) => {
      fields[key].el.closest('.field').classList.remove('success');
    });
  }, 800);

  // Hide success message after 5s
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 5000);
});

// Add shake animation via JS
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-5px); }
  }
`;
document.head.appendChild(style);
