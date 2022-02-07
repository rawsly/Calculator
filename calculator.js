const calculatorDiv = $('#calculator');
const categoriesContainer = $('#v-pills-tab');
const tabContentContainer = $('#v-pills-tabContent');

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
]

function insertTabsAndContent(data, tabsContainer, contentContainer) {
  data.forEach((tab, index) => {
    const tabId = `tab-${tab.id}`;
    const active = index === 0 ? 'active' : '';
    const show = index === 0 ? 'show' : '';
    const tabCategoryContent = `
      <button class="nav-link ${active}" id="${tabId}" data-bs-toggle="pill" data-bs-target="#${tab.id}" type="button" role="tab" aria-controls="${tab.id}" aria-selected="true">
        ${tab.icon}
        <span>${tab.text}</span>
      </button>
    `;
    tabsContainer.append(tabCategoryContent);

    const tabContentContainer = `
      <div class="tab-pane fade ${show} ${active}" id="${tab.id}" role="tabpanel" aria-labelledby="${tabId}"></div>
    `;
    contentContainer.append(tabContentContainer);
    tab.items.forEach((tabItem, tabItemIndex) => {
      const newItem = `
      <div class="tab-item" id="tab-item-${tabItem.id}">
        <p>${tabItem.name}</p>
        <div id="tab-item-action" class="tab-item-action">
          <button type="button" class="btn btn-primary btn-sm plus">+</button>
        </div>
      </div>
      `;
      const currentContentContainer = $(contentContainer.children()[index]);
      console.log($(contentContainer.children()[index]), index);
      currentContentContainer.append(newItem);
      if (tabItemIndex !== tab.items.length - 1) {
        currentContentContainer.append('<div class="hr"></div>');
      }
    });
  });
}

insertTabsAndContent(CATEGORIES, categoriesContainer, tabContentContainer);


// write a calculation function
function calculateTotal(data) {
  let sum = 0;
  data.forEach(item => sum += item);
  return sum;
}