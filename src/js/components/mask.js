// =========================== \\
// ======== MASK PHONE ======= \\
// ======= npm i imask ======= \\
// =========================== \\

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask1 = IMask(element, maskOptions);