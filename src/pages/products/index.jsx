import React, { useRef, useState } from 'react'
import { PageHeader, Table, Drawer, Modal, FormGroup, TextArea, Select } from '../../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/categoryActions'
import { addProduct, deleteProduct, editProduct } from '../../redux/actions/productsActions'
import Loader from '../../components/ui/Loader'
import { AlertModal } from '../../components/ui/AlertModal'
import { generateObjData, setFormValues } from '../../helpers/helpers'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const ProductsPage = () => {

  const { products, categories } = useSelector((state) => state)
  const { items, loading } = products
  const { items: categoryItems } = categories
  const [isEdit, setIsEdit] = useState(null)
  const [isAdd, setIsAdd] = useState(null)
  const [setAlert, isSetAlert] = useState()
  const [formLoading, setFormLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [ModalOpen, SetModalOpen] = useState(false)
  const dispatch = useDispatch()
  const form = useRef()
  
  const tableColumns = [
    { title: 'Name', dataKey: 'name', },
    { title: 'Price', dataKey: 'price', },
    { title: 'Category', dataKey: 'category', },
    {
      title: 'Action',
      render: (el) => {
        return (
          <div className='box-btn'>
            <button className='edit' onClick={() => handleEdit(el)}><EditOutlined /></button>
            <button className='delete' onClick={() => handleDeleteButton(el)}><DeleteOutlined /></button>
          </div>
        )
      },
    }
  ]

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const openAlert = () => {
    isSetAlert(true)
    setTimeout(isSetAlert, 3.5 * 1000);
  }

  const handleOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
    resetForm()
    setIsEdit(null)
  }

  const HandleOpen = () => {
    SetModalOpen(true)
  }

  const HandleClose = () => {
    SetModalOpen(false)
  }

  const resetForm = () => {
    form.current.reset()
  }


  const handleEdit = (el) => {
    setFormValues(el, form)
    handleOpen()
    setIsEdit(el.id)
  }

  const handleDeleteButton = (el) => {
    SetModalOpen(true)
    setIsEdit(el.id)
  }

  const handleDelete = async (e) => {
    setFormLoading(true)
    const response = await deleteProduct(isEdit)
    if (response === 204) {
      setFormLoading(false)
      setIsEdit(null)
      SetModalOpen(false)
      dispatch(getProducts())
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const obj = generateObjData(e)
    setFormLoading(true)
    const response = isEdit ? await editProduct(obj, isEdit) : await addProduct(obj)
    if (response.id) {
      setIsAdd(true)
      handleClose()
      setFormLoading(false)
      dispatch(getProducts())
      openAlert()
    }
  }

  return (
    <div className='products'>
      <div className="products-container">
        <PageHeader title={'Products'} children={
          <div className='space'>
            <button className='btn-add' onClick={handleOpen}>Add Product</button>
            <button className='btn-refresh'>Refresh</button>
          </div>} />
        <Table columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} onClose={handleClose} title='Add Products'>
          <form onSubmit={handleSubmit} ref={form}>
            <FormGroup label="Discount" type='number' name="discount" required={true} />
            <FormGroup label="Rating" type='number' name="rating" required={true} />
            <TextArea label="Description" name="description" required={true} />
            <FormGroup label="Image" type='url' name="image" required={true} />
            <Select name="category" options={categoryItems.map(item => ({ label: item.name, value: item.id }))} defaultValue={1} />
            <div>
              <input style={{marginTop: "30px"}} type='submit' disabled={formLoading} value={formLoading ? <Loader /> : isEdit ? 'Edit' : 'Add'} />
            </div>
          </form>
        </Drawer>
        <Modal open={ModalOpen} onClose={HandleClose} onOk={handleDelete} loading={formLoading} />
        <AlertModal open={setAlert} title="✓ Product qoshildi" />
      </div>
    </div>
  )
}
