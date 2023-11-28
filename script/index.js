const cardsArr = [
  {
    cardBg: './img/home/categories/1.png',
    cardIcon: './img/home/categories/icons/PaintBrush.svg',
    cardTitle: 'Art'
  },
  {
    cardBg: './img/home/categories/2.png',
    cardIcon: './img/home/categories/icons/Swatches.svg',
    cardTitle: 'Collectibles'
  },
  {
    cardBg: './img/home/categories/3.png',
    cardIcon: './img/home/categories/icons/MusicNotes.svg',
    cardTitle: 'Music'
  },
  {
    cardBg: './img/home/categories/4.png',
    cardIcon: './img/home/categories/icons/Camera.svg',
    cardTitle: 'Photography'
  },
  {
    cardBg: './img/home/categories/5.png',
    cardIcon: './img/home/categories/icons/VideoCamera.svg',
    cardTitle: 'Video'
  },
  {
    cardBg: './img/home/categories/6.png',
    cardIcon: './img/home/categories/icons/MagicWand.svg',
    cardTitle: 'Utility'
  },
  {
    cardBg: './img/home/categories/7.png',
    cardIcon: './img/home/categories/icons/Basketball.svg',
    cardTitle: 'Sport'
  },
  {
    cardBg: './img/home/categories/8.png',
    cardIcon: './img/home/categories/icons/Planet.svg',
    cardTitle: 'Virtual Worlds'
  },
]


document.addEventListener('DOMContentLoaded', () => {
  const cardsRow = document.querySelector('.categories__row');

  cardsArr.forEach(card => {
    const item = document.createElement('div');
    item.classList.add('item')

    item.style.backgroundImage = 'url(' + card.cardBg + ')';

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item__info')

    const elem = document.createElement('div');
    elem.classList.add('item__hover')

    const itemTitle = document.createElement('p');
    itemTitle.classList.add('item__title');
    itemTitle.textContent = card.cardTitle;

    const itemIcon = document.createElement('img');
    itemIcon.classList.add('item__icon')
    itemIcon.src = card.cardIcon;
    itemIcon.alt = card.cardTitle;


    itemInfo.append(itemTitle);
    item.append(elem);
    item.append(itemIcon);
    item.append(itemInfo);
    cardsRow.append(item);

    item.addEventListener('mouseenter', () => {
      itemIcon.style.opacity = '0';
      elem.style.opacity = '0';
    })

    item.addEventListener('mouseleave', () => {
      itemIcon.style.opacity = '1';
      elem.style.opacity = '1';
    })

  });
})

 