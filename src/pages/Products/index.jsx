import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Drawer,
  FormGroup,
  PageHeader,
  Select,
  Table,
  TextArea,
} from '../../components'
import { addProduct, editProduct } from '../../redux/actions/productsActions'
import { getProducts } from '../../redux/actions/categoryActions'

export const ProductsPage = () => {
  const { products, categories } = useSelector((state) => state)
  const { items, loading } = products
  const { items: categoryIitems, loading: categoryLoading } = categories
  const [modalOpen, setModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const dispatch = useDispatch()
  const form = useRef()

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
    },
    {
      title: 'Action',
      render: (el) => {
        return (
          <div className='space'>
            <button onClick={() => handleEditButton(el)}>Edit</button>
            <button onClick={() => console.log(el)}>Delete</button>
          </div>
        )
      },
    },
  ]

  const handleOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
    resetForm()
    setIsEdit(null)
  }

  const resetForm = () => {
    form.current.reset()
  }

  const setValues = (data) => {
    for (let item in data) {
      console.log(item)
      const {
        current: { elements },
      } = form
      console.log(elements)
      if (elements[item]) {
        elements[item].value = data[item]
      }
    }
  }

  const handleEditButton = (el) => {
    setValues(el)
    handleOpen()
    setIsEdit(el.id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { target } = e
    const obj = {}
    for (let i = 0; i < target.elements.length - 1; i++) {
      obj[target.elements[i].name] = target.elements[i].value
    }
    setFormLoading(true)
    const response = isEdit
      ? await editProduct(obj, isEdit)
      : await addProduct(obj)
    if (response.id) {
      handleClose()
      setFormLoading(false)
      dispatch(getProducts())
    }
  }

  return (
    <div className='products'>
      <div className='products-container'>
        <PageHeader
          title='Products'
          children={
            <div className='space'>
              <button onClick={handleOpen}>Add Product</button>
              <button>Refresh</button>
            </div>
          }
        />
        <Table columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} onClose={handleClose} title='Add products'>
          <form onSubmit={handleSubmit} ref={form}>
            <FormGroup label='Name' name='name' required={true} />
            <FormGroup
              label='Price'
              name='price'
              type='number'
              required={true}
            />
            <FormGroup
              label='Discount'
              name='discount'
              type='number'
              required={true}
            />
            <FormGroup
              label='Rating'
              name='rating'
              type='number'
              required={true}
            />
            <FormGroup label='Image' name='image' type='url' required={true} />
            <TextArea label='Description' name='description' required={true} />
            <Select
              name='category'
              options={categoryIitems.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              defaultValue={1}
            />
            <div className='form-group'>
              <input
                type='submit'
                disabled={formLoading}
                value={formLoading ? 'Loading...' : isEdit ? 'Edit' : 'Add'}
              />
            </div>
          </form>
        </Drawer>
              

      </div>
    </div>
  )
}
