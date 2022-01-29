const select = document.getElementById("selCases");
const tabsContent = document.querySelectorAll(".tabs__content > .tabs__panel");

const toggleHidden = () => {
  tabsContent.forEach(div => {
    if (div.classList.contains(`tabs__${select.value}`)) {
      div.classList.remove('hidden');
      div.classList.add('tabs__panel--active');
    }
    else {
      div.classList.add('hidden');
      div.classList.remove('tabs__panel--active');
    }
  });
}

select.addEventListener('change', toggleHidden);
toggleHidden();
