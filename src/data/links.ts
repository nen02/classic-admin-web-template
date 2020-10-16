export default [
  {
    id: 1,
    type: 'header',
    desc: 'Main Nav'
  },
  {
    id: 2,
    type: 'link',
    desc: 'Home',
    icon: 'home',
    url: '/'
  },
  {
    id: 3,
    type: 'link',
    desc: 'Components',
    icon: 'cogs',
    url: '/components'
  },
  {
    id: 4,
    type: 'header',
    desc: 'System'
  },
  {
    id: 5,
    type: 'link',
    desc: 'Settings',
    icon: 'cog',
    url: '#'
  },
  {
    id: 6,
    type: 'tree',
    desc: 'Files',
    icon: 'folder',
    items: [
      {
        id: 1,
        desc: 'Word',
        icon: 'file-word',
        url: '/files/word'
      },
      {
        id: 2,
        desc: 'Excel',
        icon: 'file-excel',
        url: '#'
      },
      {
        id: 3,
        desc: 'Video',
        icon: 'file-video',
        url: '#'
      },
      {
        id: 4,
        desc: 'Image',
        icon: 'file-image',
        url: '#'
      },
      {
        id: 5,
        desc: 'Archive',
        icon: 'file-archive',
        url: '#'
      },
      {
        id: 6,
        desc: 'Pdf',
        icon: 'file-pdf',
        url: '#'
      },
      {
        id: 7,
        desc: 'Csv',
        icon: 'file-csv',
        url: '#'
      }
    ]
  },
  {
    id: 7,
    type: 'tree',
    desc: 'Icons',
    icon: 'icons',
    items: [
      {
        id: 1,
        desc: 'Ruler',
        icon: 'ruler',
        url: '#'
      },
      {
        id: 2,
        desc: 'Address Card',
        icon: 'address-card',
        url: '#'
      },
      {
        id: 3,
        desc: 'Warehouse',
        icon: 'warehouse',
        url: '#'
      },
      {
        id: 4,
        desc: 'Eraser',
        icon: 'eraser',
        url: '#'
      },
      {
        id: 5,
        desc: 'Power Off',
        icon: 'power-off',
        url: '#'
      },
      {
        id: 6,
        desc: 'Viruses',
        icon: 'viruses',
        url: '#'
      },
      {
        id: 7,
        desc: 'Dragon',
        icon: 'dragon',
        url: '#'
      }
    ]
  }
]
