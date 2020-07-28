export const navigations = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard'
  },

  {
    name: 'Todo',
    icon: 'format_list_bulleted',
    path: '/todos'
  },
  {
    name: 'Multilevel',
    icon: 'trending_up',
    children: [
      {
        name: 'Level 1',
        icon: 'list',
        children: [
          {
            name: 'Item 1',
            path: '/charts/victory-charts',
            iconText: '1'
          },
          {
            name: 'Item 2',
            path: '/charts/react-vis',
            iconText: '2'
          },
          {
            name: 'Item 3',
            path: '/charts/recharts',
            iconText: '3'
          },
          {
            name: 'Item 4',
            path: '/charts/echarts',
            iconText: '4'
          }
        ]
      }
    ]
  },
  {
    name: 'Chat',
    icon: 'chat',
    badge: { value: '50+', color: 'secondary' },
    path: '/chats'
  },
  {
    name: 'Map',
    icon: 'add_location',
    path: '/map'
  },
  {
    name: 'Canvas',
    icon: 'brush',
    path: '/canvas'
  },
  {
    name: 'Editor',
    icon: 'editor',
    path: '/editor'
  },
  {
    name: 'Settings',
    icon: 'settings',
    path: '/settings'
  }
];
