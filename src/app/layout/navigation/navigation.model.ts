export class NavigationModel {

  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'orders',
        'title': 'orders',
        'type': 'item',
        'icon': 'list',
        'url': '/order'
      },
      {
        'id': 'customers',
        'title': 'customers',
        'type': 'item',
        'icon': 'business',
        'url': '/customer'
      },
      {
        'id': 'users',
        'title': 'users',
        'type': 'item',
        'icon': 'bubble_chart',
        'url': '/user'
      },
      {
        'id': 'admin',
        'title': 'admin panel',
        'type': 'collapse',
        'icon': 'code',
        'children': [
          {
            'id': 'about',
            'title': 'about',
            'type': 'item',
            'url': '/admin/about'
          },
          {
            'id': 'project',
            'title': 'project',
            'type': 'item',
            'url': '/admin/project'
          }
        ]
      },
    ];
  }

}
