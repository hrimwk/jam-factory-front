const navList = [
  {
    link: '/',
    name: 'ABOUT US',
    class: 'sub1',
    subNav: [
      { name: '대상에프앤비', link: '/' },
      { name: '연혁', link: '/' },
      { name: '주요사업', link: '/' },
    ],
  },
  {
    link: '/',
    name: 'BRAND',
    class: 'sub2',
    subNav: [
      { name: '복음자리', link: '/' },
      { name: '로즈버드', link: '/' },
    ],
  },
  {
    link: '/product',
    name: 'PRODUCT',
    class: 'sub3',
    subNav: [
      { name: '잼/스프레드', link: '/jam' },
      { name: '커피/차', link: '/tea' },
      { name: '간식/베이커리', link: '/snack' },
    ],
  },
  {
    link: '/',
    name: 'NOTICE',
    class: 'sub4',
    subNav: [
      { name: '공지사항', link: '/' },
      { name: '이벤트', link: '/' },
      { name: 'Q&A', link: '/' },
    ],
  },
];

export { navList };
