// =========================== \\
// ======== MASK PHONE ======= \\
// ======= npm i imask ======= \\
// =========================== \\

const element = document.getElementById('phone1');
const element2 = document.getElementById('phone2');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask1 = IMask(element, maskOptions);
const mask2 = IMask(element2, maskOptions);