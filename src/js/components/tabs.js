// ============ TABS =============

const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tabs__button');
const tabsContent = document.querySelectorAll('.tabs__item');

if (tabs) {
  tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs__button')) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }
  });
}

const tabsHandler = (path) => {
  tabsBtn.forEach(el => {el.classList.remove('tabs__button--active')});
  document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');

  tabsContent.forEach(el => {el.classList.remove('tabs__item--active')});
  document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__item--active');
};