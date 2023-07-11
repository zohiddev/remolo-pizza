import React from 'react'
import { PageHeader } from '../../components/ui/PageHeader';
import { Table } from '../../components/ui/Table';


const tableColumns = [
  {
    title: 'Name',
    dataKey: 'name',
  },
  {
    title: 'Price',
    dataKey: 'price',
  },
  {
    title: 'Category',
    dataKey: 'category',
  }
]

const data = [
  [
    {
      "id": 1,
      "name": "Pizza muzzarella",
      "description": "",
      "price": "1200.00",
      "discount": null,
      "rating": null,
      "image": "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      "category": 1
    },
    {
      "id": 2,
      "name": "Pizza pepperoni",
      "description": "",
      "price": "1200.00",
      "discount": null,
      "rating": null,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 1
    },
    {
      "id": 3,
      "name": "asdsa edit",
      "description": "asdasdasd",
      "price": "123.00",
      "discount": 123,
      "rating": 123,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 2
    },
    {
      "id": 4,
      "name": "asdasda edit",
      "description": "qwedasdqwedadwqe",
      "price": "123123.00",
      "discount": 123123,
      "rating": 123123,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 3
    },
    {
      "id": 5,
      "name": "qweqwewq edit",
      "description": "asdasdasd",
      "price": "12312.00",
      "discount": 123123,
      "rating": 123123,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 4
    },
    {
      "id": 6,
      "name": "QART",
      "description": "232",
      "price": "123.00",
      "discount": 2,
      "rating": 2,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 4
    },
    {
      "id": 7,
      "name": "sds",
      "description": "fr",
      "price": "43.00",
      "discount": 34,
      "rating": 34,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 4
    },
    {
      "id": 8,
      "name": "err",
      "description": "ede",
      "price": "4.00",
      "discount": 4,
      "rating": 4,
      "image": "https://galbanicheese.com/wp-content/uploads/2019/09/Fresh-Mozzarella-Margherita-Pizza-72DPI-800x600.jpg",
      "category": 3
    }
  ]
]


export const ProductsPage = () => {
  return (
    <div className="products">
      <div className="product-container">
        <PageHeader titlle='Products' children={<button>Refresh</button>} />
        <Table columns={tableColumns} data={data} />
      </div>
    </div>
  )
}
