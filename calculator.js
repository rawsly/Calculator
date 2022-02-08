const BEDROOM_ITEMS = [
  {
    id: 'single-bed',
    name: 'Single Bed',
    unit: 1
  },
  {
    id: 'rug',
    name: 'Rug',
    unit: 0.5
  },
  {
    id: 'shelf',
    name: 'Shelf',
    unit: 0.5
  },
  {
    id: 'bedside-table-trunk',
    name: 'Bedside table/Trunk',
    unit: 0.5
  },
  {
    id: 'dressing-table',
    name: 'Dressing table',
    unit: 1
  },
  {
    id: 'double-bed',
    name: 'Double bed',
    unit: 2
  }
];

const LIVING_DINING_ITEMS = [
  {
    id: 'hi-fi-system',
    name: 'Hi-fi system',
    unit: 1
  },
  {
    id: 'cupboard',
    name: 'Cupboard',
    unit: 0.5
  },
  {
    id: 'billiards-table',
    name: 'Billiards table',
    unit: 0.5
  },
  {
    id: 'bedside-table-trunk',
    name: 'Bedside table/Trunk',
    unit: 0.5
  },
  {
    id: 'dressing-table',
    name: 'Dressing table',
    unit: 1
  },
  {
    id: 'double-bed',
    name: 'Double bed',
    unit: 2
  }
];

const OFFICE_ITEMS = [
  {
    id: 'computer-unit',
    name: 'Computer Unit',
    unit: 1
  },
  {
    id: 'computer',
    name: 'Computer',
    unit: 0.5
  },
  {
    id: 'bookcase',
    name: 'Bookcase',
    unit: 0.5
  },
];

const CATEGORIES = [
  {
    id: 'bedroom',
    text: 'Bedroom',
    icon: `<svg version="1.1" viewBox="0 0 104 68.84" xmlns="http://www.w3.org/2000/svg"><title>Bedroom</title> <g transform="translate(-23,-40.58)" data-name="Laag 1"> <path class="cls-1" d="m24.4 109.4h6.53a1.43 1.43 0 0 0 1.42-1.39v-13h85.3v13a1.43 1.43 0 0 0 1.42 1.42h6.53a1.43 1.43 0 0 0 1.4-1.42v-32.9a6.42 6.42 0 0 0-6.22-6.4v-21.7a6.43 6.43 0 0 0-6.42-6.42h-78.59a6.43 6.43 0 0 0-6.41 6.42v21.69a6.42 6.42 0 0 0-6.36 6.41v32.9a1.43 1.43 0 0 0 1.4 1.39zm99.78-17.2h-98.36v-6h98.36zm-94.67 14.36h-3.69v-11.55h3.69zm94.67 0h-3.69v-11.55h3.69zm-91.99-59.55a3.58 3.58 0 0 1 3.58-3.58h78.61a3.58 3.58 0 0 1 3.62 3.58v21.69h-8.45v-9.58a6.43 6.43 0 0 0-6.42-6.42h-17.78a6.43 6.43 0 0 0-6.42 6.42v9.58h-7.71v-9.58a6.43 6.43 0 0 0-6.41-6.42h-17.75a6.43 6.43 0 0 0-6.42 6.42v9.58h-8.45zm74.49 21.66h-24.91v-9.55a3.59 3.59 0 0 1 3.58-3.59h17.75a3.58 3.58 0 0 1 3.58 3.59zm-38.29 0h-24.92v-9.55a3.59 3.59 0 0 1 3.59-3.59h17.75a3.59 3.59 0 0 1 3.58 3.59zm-39 2.83h91.2a3.59 3.59 0 0 1 3.58 3.58v8.28h-98.35v-8.25a3.59 3.59 0 0 1 3.58-3.58z"></path> </g> </svg>`,
    items: BEDROOM_ITEMS,
  },
  {
    id: 'living-dining',
    text: 'Living and Dining',
    icon: `<svg version="1.1" viewBox="0 0 104 68.84" xmlns="http://www.w3.org/2000/svg"><title>Bedroom</title> <g transform="translate(-23,-40.58)" data-name="Laag 1"> <path class="cls-1" d="m24.4 109.4h6.53a1.43 1.43 0 0 0 1.42-1.39v-13h85.3v13a1.43 1.43 0 0 0 1.42 1.42h6.53a1.43 1.43 0 0 0 1.4-1.42v-32.9a6.42 6.42 0 0 0-6.22-6.4v-21.7a6.43 6.43 0 0 0-6.42-6.42h-78.59a6.43 6.43 0 0 0-6.41 6.42v21.69a6.42 6.42 0 0 0-6.36 6.41v32.9a1.43 1.43 0 0 0 1.4 1.39zm99.78-17.2h-98.36v-6h98.36zm-94.67 14.36h-3.69v-11.55h3.69zm94.67 0h-3.69v-11.55h3.69zm-91.99-59.55a3.58 3.58 0 0 1 3.58-3.58h78.61a3.58 3.58 0 0 1 3.62 3.58v21.69h-8.45v-9.58a6.43 6.43 0 0 0-6.42-6.42h-17.78a6.43 6.43 0 0 0-6.42 6.42v9.58h-7.71v-9.58a6.43 6.43 0 0 0-6.41-6.42h-17.75a6.43 6.43 0 0 0-6.42 6.42v9.58h-8.45zm74.49 21.66h-24.91v-9.55a3.59 3.59 0 0 1 3.58-3.59h17.75a3.58 3.58 0 0 1 3.58 3.59zm-38.29 0h-24.92v-9.55a3.59 3.59 0 0 1 3.59-3.59h17.75a3.59 3.59 0 0 1 3.58 3.59zm-39 2.83h91.2a3.59 3.59 0 0 1 3.58 3.58v8.28h-98.35v-8.25a3.59 3.59 0 0 1 3.58-3.58z"></path> </g> </svg>`,
    items: LIVING_DINING_ITEMS,
  },
  {
    id: 'office',
    text: 'Office',
    icon: `<svg version="1.1" viewBox="0 0 104 68.84" xmlns="http://www.w3.org/2000/svg"><title>Bedroom</title> <g transform="translate(-23,-40.58)" data-name="Laag 1"> <path class="cls-1" d="m24.4 109.4h6.53a1.43 1.43 0 0 0 1.42-1.39v-13h85.3v13a1.43 1.43 0 0 0 1.42 1.42h6.53a1.43 1.43 0 0 0 1.4-1.42v-32.9a6.42 6.42 0 0 0-6.22-6.4v-21.7a6.43 6.43 0 0 0-6.42-6.42h-78.59a6.43 6.43 0 0 0-6.41 6.42v21.69a6.42 6.42 0 0 0-6.36 6.41v32.9a1.43 1.43 0 0 0 1.4 1.39zm99.78-17.2h-98.36v-6h98.36zm-94.67 14.36h-3.69v-11.55h3.69zm94.67 0h-3.69v-11.55h3.69zm-91.99-59.55a3.58 3.58 0 0 1 3.58-3.58h78.61a3.58 3.58 0 0 1 3.62 3.58v21.69h-8.45v-9.58a6.43 6.43 0 0 0-6.42-6.42h-17.78a6.43 6.43 0 0 0-6.42 6.42v9.58h-7.71v-9.58a6.43 6.43 0 0 0-6.41-6.42h-17.75a6.43 6.43 0 0 0-6.42 6.42v9.58h-8.45zm74.49 21.66h-24.91v-9.55a3.59 3.59 0 0 1 3.58-3.59h17.75a3.58 3.58 0 0 1 3.58 3.59zm-38.29 0h-24.92v-9.55a3.59 3.59 0 0 1 3.59-3.59h17.75a3.59 3.59 0 0 1 3.58 3.59zm-39 2.83h91.2a3.59 3.59 0 0 1 3.58 3.58v8.28h-98.35v-8.25a3.59 3.59 0 0 1 3.58-3.58z"></path> </g> </svg>`,
    items: OFFICE_ITEMS,
  },
];

function calculateTotal() {
  let sum = 0;
  CATEGORIES.forEach((category, index) => {
    category.items.forEach((item) => {
      const unitVal = parseFloat($(`#${category.id}-${item.id}-unit`).val());
      const unitCount = parseInt($(`#${category.id}-${item.id}-count`).val())
      sum += unitVal * unitCount;
    });
  });
  return sum;
}

function updateState(tabId, tabItemId, type) {
  const p = $(`#tab-item-${tabItemId} p`);
  const minusBtn = $(`#${tabId}-${tabItemId}-minus`);
  if (type === 1) {
    p.addClass('bold');
    minusBtn.prop('disabled', false);
  } else  {
    p.removeClass('bold');
    minusBtn.prop('disabled', true);
  }
}

function handleItemIncreaseClick(e, tabId, tabItemId) {
  const currentCountInput = $(`#${tabId}-${tabItemId}-count`);
  const currentCount = parseInt(currentCountInput.val(), 10);
  currentCountInput.val(currentCount + 1);
  if (currentCount === 0) {
    updateState(tabId, tabItemId, 1);
  }
  calculateTotal();
}

function handleItemDecreaseClick(e, tabId, tabItemId) {
  const currentCountInput = $(`#${tabId}-${tabItemId}-count`);
  const currentCount = parseInt(currentCountInput.val(), 10);
  currentCountInput.val(currentCount - 1);
  if (currentCount === 1) {
    updateState(tabId, tabItemId, 0);
  }
  calculateTotal();
}

function handleItemCountChange(e, tabId, tabItemId) {
  const newValue = parseInt(e.target.value, 10);
  if (newValue === 0) {
    updateState(tabId, tabItemId, 0);
  } else {
    updateState(tabId, tabItemId, 1);
  }
  calculateTotal();
}

function insertTabsAndContent(tabsContainerId, contentContainerId) {
  CATEGORIES.forEach((tab, index) => {
    const tabId = `tab-${tab.id}`;
    const active = index === 0 ? 'active' : '';
    const show = index === 0 ? 'show' : '';
    const tabCategoryContent = `
      <button class="nav-link ${active}" id="${tabId}" data-bs-toggle="pill" data-bs-target="#${tab.id}" type="button" role="tab" aria-controls="${tab.id}" aria-selected="true">
        ${tab.icon}
        <span>${tab.text}</span>
      </button>
    `;
    let tabsContainer = $(`#${tabsContainerId}`);
    tabsContainer.append(tabCategoryContent);

    const tabContentContainer = `
      <div class="tab-pane fade ${show} ${active}" id="${tab.id}" role="tabpanel" aria-labelledby="${tabId}"></div>
    `;

    let contentContainer = $(`#${contentContainerId}`);
    contentContainer.append(tabContentContainer);
    tab.items.forEach((tabItem, tabItemIndex) => {
      const newItem = `
      <div class="tab-item" id="tab-item-${tabItem.id}">
        <p>${tabItem.name}</p>
        <div id="tab-item-action" class="tab-item-action">
          <button disabled id="${tab.id}-${tabItem.id}-minus" type="button" class="btn btn-primary btn-sm plus">-</button>
          <input type="number" class="form-control form-control-sm tab-item-count-input" id="${tab.id}-${tabItem.id}-count" value="0">
          <button id="${tab.id}-${tabItem.id}-plus" type="button" class="btn btn-primary btn-sm plus">+</button>
        </div>
        <input type="hidden" id="${tab.id}-${tabItem.id}-unit" value="${tabItem.unit}">
      </div>
      `;
      const currentContentContainer = $(contentContainer.children()[index]);
      currentContentContainer.append(newItem);
      if (tabItemIndex !== tab.items.length - 1) {
        currentContentContainer.append('<div class="hr"></div>');
      }

      $(`#${tab.id}-${tabItem.id}-plus`).click((e) => handleItemIncreaseClick(e, tab.id, tabItem.id));
      $(`#${tab.id}-${tabItem.id}-minus`).click((e) => handleItemDecreaseClick(e, tab.id, tabItem.id));
      $(`#${tab.id}-${tabItem.id}-count`).change((e) => handleItemCountChange(e, tab.id, tabItem.id));
    });
  });
}

function createCalculator(containerId, categoriesContainerId, tabContentContainerId) {
  $(`#${containerId}`).append(`
    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="${categoriesContainerId}" role="tablist" aria-orientation="vertical">
      </div>
      <div class="tab-content" id="${tabContentContainerId}">
      </div>
    </div>
  `);

  insertTabsAndContent(categoriesContainerId, tabContentContainerId);
}

createCalculator('calculator', 'v-pills-tab', 'v-pills-tabContent');