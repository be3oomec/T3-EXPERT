const tabs1 = new GraphTabs('tab', {
  isChanged: (tabs) => {
    console.log(tabs);
  }
});