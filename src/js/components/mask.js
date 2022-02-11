// =========================== \\
// ======== MASK PHONE ======= \\
// ======= npm i imask ======= \\
// =========================== \\

if (document.querySelector('[type="tel"]')) {
  document.querySelectorAll('[type="tel"]').forEach(el => {
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(el, maskOptions);
  })
}

