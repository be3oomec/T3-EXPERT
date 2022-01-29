// Находим селект и контент табов
const select = document.getElementById("selCases");
const tabsContent = document.querySelectorAll(".tabs__content > .tabs__panel");

// Вижн информации при переключении опшинов в селекте
const toggleHidden = () => {
  // Пробегаемся по псевдомассиву табов с контентом
  tabsContent.forEach(div => {
    // Если таб имеет класс совпадающий с value в селекте => вкл/выкл вижн
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
// Следим за изменением селекта
select.addEventListener('change', toggleHidden);
toggleHidden();
