
let slider = document.querySelector('#filters__price');
if (slider) {
  noUiSlider.create(slider, {
      start: [20, 80],
      tooltips: [true, true],
      connect: true,
      range: {
          'min': 0,
          'max': 100
      }
  });
}