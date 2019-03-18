import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsDataService {

  constructor() { }

  data=[{
    'productId':1,
    'name': 'Pristine Long Shirt Dress',
    'type': 'dress',
    'cost': 2000,
    'color':['blue','black'],
    'size':['xl','l','m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/10/1538743990J13A9727.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/10/1538744023J13A9793.jpg',
    'available':0
},
{
    'productId':2,
    'name': 'Northern Lights Knotted Jumpsuit',
    'type': 'dress',
    'cost': 2500,
    'color':['blue','black'],
    'size':['xl','l','m','s'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536317760NICOBAR-04.09.186581.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536317760NICOBAR-04.09.186931.jpg',
    'available':10
},
{
    'productId':3,
    'name': 'Side Elastic Dress',
    'type': 'dress',
    'cost': 3000,
    'color':['red','blue'],
    'size':['xl','l','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2019/03/1551672767J13A2231.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2019/03/1551672767J13A2278.jpg',
    'available':10
},
{
    'productId':4,
    'name':'Empire Maxi Stripe Dress' ,
    'type': 'dress',
    'cost': 5800,
    'color':['white','black','blue'],
    'size':['xl','l','m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/11/1542622409J13A0382.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/11/1542622409J13A0428.jpg',
    'available':10
},
{
    'productId':5,
    'name': 'Celestial Basic Pyjamas',
    'type': 'bottom',
    'cost': 5500,
    'color':['white'],
    'size':['xl','l','m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2019/02/1549972312J13A9228.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2019/02/1549972367J13A9086.jpg',
    'available':0
},
{
    'productId':6,
    'name': 'Stop & Refuel Trousers',
    'type': 'bottom',
    'cost': 3800,
    'color':['black','blue'],
    'size':['l','m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536918746IMG_2697.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536918791IMG_2649.jpg',
    'available':10
},
{
    'productId':7,
    'name': 'Side Elastic Narrow Pants',
    'type': 'bottom',
    'cost': 4800,
    'color':['white','red'],
    'size':['xl','l','m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/11/1542623018J13A0588.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/11/1542623045J13A0445.jpg',
    'available':10
},
{
    'productId':8,
    'name': 'Boy Short Pyjamas',
    'type': 'bottom',
    'cost': 4600,
    'color':['black','white'],
    'size':['xl','l','m','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/04/1523943014A46A0496-1.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/04/1523959416A46A05261.jpg',
    'available':0
},
{
    'productId':9,
    'name': 'Cantonese Top',
    'type': 'top',
    'cost': 3800,
    'color':['white','red'],
    'size':['xl','l','m','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2019/01/1547705394J13A0792.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2019/01/1547705449J13A0872.jpg',
    'available':10
},
{
    'productId':10,
    'name': 'Gathered Kaftan Stripe',
    'type': 'top',
    'cost': 4800,
    'color':['red','white'],
    'size':['m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/11/1542623502J13A1565.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/11/1542623556J13A9719.jpg',
    'available':10
},
{
    'productId':11 ,
    'name':'Side High Slit Top',
    'type':'top',
    'cost':4200,
    'color':['red','white'],
    'size':['xl','l','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/10/1539347381J13A3680.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/10/1539347381J13A3703.jpg',
    'available':10
},
{
    'productId': 12,
    'name':'Box Pleat Shirt',
    'type':'top',
    'cost':4300,
    'color':['red','white','black'],
    'size':['xl','l','m','s'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2019/03/1551672042J13A2446.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2019/03/1551672042J13A2485.jpg',
    'available':0
},
{
    'productId': 13,
    'name':'Gussette Slit Floral Kurta',
    'type':'kurta',
    'cost':6500,
    'color':['red','white'],
    'size':['xl','l','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2019/01/1548911026J13A0525.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2019/01/1548910993J13A0533.jpg',
    'available':10
},
{
    'productId': 14,
    'name': 'Midnight Boat Neck Kurta',
    'type':'kurta',
    'cost':7500,
    'color':['blue','black'],
    'size':['xl','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536315544NICOBAR-04.09.187844.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536315545NICOBAR-04.09.187875.jpg',
    'available':10
},
{
    'productId': 15,
    'name':'Basic Mid-length Kurta',
    'type':'kurta',
    'cost':5800,
    'color':['red','white','black','blue'],
    'size':['xl','l','m'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536920815IMG_3541.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/09/1536920815IMG_3592.jpg',
    'available':0
},
{
    'productId': 16,
    'name':'Go East Kurta',
    'type':'kurta',
    'cost':6800,
    'color':['red','black','white'],
    'size':['m','s','xs'],
    'ilink':'https://cdn.nicobar.com/500/media/images/products/2018/08/1533897505Nicobar0024.jpg',
    'hlink':'https://cdn.nicobar.com/500/media/images/products/2018/08/1533897505Nicobar0062.jpg',
    'available':0
}
]

getdata(): any {
  return this.data;
}
}
