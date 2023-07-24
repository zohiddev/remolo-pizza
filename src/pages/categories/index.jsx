import React, { useRef, useState } from 'react'
import { PageHeader, Table, Drawer, Modal, FormGroup, TextArea } from '../../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addCategory, deleteCategory, editCategory, getCategories } from '../../redux/actions/categoryActions'
import Loader from '../../components/ui/Loader'
import { generateObjData, setFormValues } from '../../helpers/helpers'
import { AlertModal } from '../../components/ui/AlertModal'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const CategoriesPage = () => {

  const {items, loading} = useSelector((state) => state.categories)
  const [isEdit, setIsEdit] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [ModalOpen, SetModalOpen] = useState(false)
  const [setAlert, isSetAlert] = useState()
  const dispatch = useDispatch()
  const form = useRef()
  const tableColumns = [
    {title: 'Name',dataKey: 'name',},
    {title: 'Action',
    render: (el) => {
      return (
        <div className='space'>
          <button onClick={() => handleEdit(el)}><EditOutlined /></button>
          <button onClick={() => handleDeleteButton(el)}><DeleteOutlined /></button>
        </div>
      )
    },
    }
  ]

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const openAlert = () => {
    isSetAlert(true)
    setTimeout(isSetAlert, 3.5 * 1000);
}

  const handleOpen = () =>{
    setModalOpen(true)
  }

  const HandleOpen = () =>{
    SetModalOpen(true)
  }

  const handleClose = () =>{
    setModalOpen(false)
    resetForm()
    setIsEdit(null)
  }

  const HandleClose = () =>{
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
    const response = await deleteCategory(isEdit)
    if(response === 204){
      setFormLoading(false)
      setIsEdit(null)
      SetModalOpen(false)
      dispatch(getCategories())
    }
  }

  const handleSuubmit = async (e) => {
    e.preventDefault()
    const obj = generateObjData(e)
    setFormLoading(true)
    const response = isEdit ? await editCategory(obj, isEdit) : await addCategory(obj)
    if(response.id){
      handleClose()
      setFormLoading(false)
      dispatch(getCategories())
      openAlert()
    }
  }

  return (
    <div className='categories'>
      <div className="categories-container">
        <PageHeader title={'Categories'} children={
        <div className='space'>
          <button onClick={handleOpen}>Add Categories</button>
          <button>Refresh</button>
        </div>}/>
        <Table columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} onClose={handleClose} title={'Add Categories'}>
        <form onSubmit={handleSuubmit} ref={form}>
          <FormGroup label="Name" name="name" required={true} />
          <FormGroup label="Icon" type='text'  name="icon" required={true} />
            <div className="form-group btn">
              <input type='submit' value={formLoading ? <Loader/> : isEdit ? 'Edit' : 'Add'} />
            </div>
        </form>
        </Drawer>
        <Modal open={ModalOpen} onClose={HandleClose} onOk={handleDelete} loading={formLoading}></Modal>
        <AlertModal open={setAlert}  title="✓ Categoriy qoshildi" />
      </div>
    </div>
  )
}
