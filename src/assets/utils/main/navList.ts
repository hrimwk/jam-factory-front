const navList = [
  {
    link: '/',
    name: 'ABOUT US',
    class: 'sub1',
    subNav: [
      { name: '대상에프앤비', link: '/daesang' },
      { name: '연혁', link: '/history' },
      { name: '주요사업', link: '/bussiness' },
    ],
  },
  {
    link: '/',
    name: 'BRAND',
    class: 'sub2',
    subNav: [
      { name: '복음자리', link: '/bokumjari' },
      { name: '로즈버드', link: '/rosebud' },
    ],
  },
  {
    link: '/products',
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
      { name: '공지사항', link: 'notice' },
      { name: '이벤트', link: '/event' },
      { name: 'Q&A', link: '/qna' },
    ],
  },
];

export { navList };
