// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info: chrome.contextMenus.OnClickData) {
  switch (info.menuItemId) {
    case 'radio':
      // Radio item function
      console.log('Radio item clicked. Status:', info.checked);
      break;
    case 'checkbox':
      // Checkbox item function
      console.log('Checkbox item clicked. Status:', info.checked);
      break;
    default:
      // Standard context menu item function
      console.log('Standard context menu item clicked.');
  }
}
chrome.runtime.onInstalled.addListener(function () {
  console.log('onInstalled...');
  // Create one test item for each context type.
  let contexts: chrome.contextMenus.ContextType[] = [
    'page',
    'selection',
    'link',
    'editable',
    'image',
    'video',
    'audio',
  ];
  for (let i = 0; i < contexts.length; i++) {
    let context = contexts[i];
    let title = "Test '" + context + "' menu item";
    chrome.contextMenus.create({
      title: title,
      contexts: [context],
      id: context,
    });
  }

  // Create a parent item and two children.
  let parent = chrome.contextMenus.create({
    title: 'Test parent item',
    id: 'parent',
  });
  chrome.contextMenus.create({
    title: 'Child 1',
    parentId: parent,
    id: 'child1',
  });
  chrome.contextMenus.create({
    title: 'Child 2',
    parentId: parent,
    id: 'child2',
  });
});
