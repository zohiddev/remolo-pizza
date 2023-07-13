import { useEffect, useRef, useState } from "react";
import {
  Button,
  DeleteModal,
  Drawer,
  FormGroup,
  Loading,
  Select,
  Table,
  Modal,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategories,
  editProduct,
  addProduct,
  deleteProduct,
} from "../../redux/actions";
import { TextArea } from "../../components";
import { collectFormData } from "../../utils";

export const Products = () => {
  const titleData = [
    {
      id: 1,
      key: "price",
      value: "Price",
    },
    {
      id: 2,
      key: "name",
      value: "Name",
    },
    {
      id: 3,
      key: "category",
      value: "Category",
    },
    {
      id: 4,
      value: "Action",
      actions: (el) => (
        <div className="table__buttons-wrapper">
          <Button
            content="Edit"
            className="table__button edit"
            onClick={() => onEdit(el)}
          />
          <Button
            content="Delete"
            className="table__button delete"
            onClick={() => onDelete(el.id)}
          />
        </div>
      ),
    },
  ];

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(null);
  const [isDelete, setIsDelete] = useState(null);
  const formRef = useRef();

  const dispatch = useDispatch();

  const closeDrawer = () => {
    setDrawerIsOpen(false);
    setEdit(null);
    formRef.current.reset();
  };

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = collectFormData(e);
    setIsLoading(true);
    if (edit) {
      const response = await editProduct(data, edit);
      if (response.status === 201) {
        dispatch(getProducts());
      }
    } else {
      const response = await addProduct(data);
      if (response.status === 200) {
        dispatch(getProducts());
      }
    }
    setIsLoading(false);
    closeDrawer();
  };

  const onEdit = (data) => {
    setEdit(data.id);
    const form = formRef.current;
    for (let i in data) {
      if (form[i]) {
        form[i].value = data[i];
      }
    }
    openDrawer();
  };

  const onDelete = (id) => {
    setIsDelete(id);
  };

  const onCloseDelete = () => {
    setIsDelete(null);
  };

  const onDeleteAgree = async () => {
    setIsLoading(true);
    const response = await deleteProduct(isDelete);
    if (response.status === 204) {
      dispatch(getProducts());
    }
    onCloseDelete();
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <main className="products-page main">
      <div className="products-page__container">
        <div className="products-page__header">
          <h2 className="title">Products</h2>
          <div className="actions">
            <Button
              content="Add"
              className="table__button add"
              onClick={openDrawer}
            />
            <Button
              content="Refresh"
              className="table__button edit"
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
        {products.isLoading | isLoading ? (
          <Loading />
        ) : (
          <Table title={titleData} data={products.items} />
        )}
      </div>
      <Drawer
        isOpen={drawerIsOpen}
        onClose={closeDrawer}
        className="products-page__drawer"
      >
        <form className="form" ref={formRef} onSubmit={onSubmit}>
          <div className="form__wrapper">
            <Select options={categories.items} name="category" />
            <FormGroup name="name" title="Name" required={true} />
            <FormGroup
              type="number"
              name="price"
              title="Price"
              required={true}
            />
            <FormGroup type="number" name="discount" title="Discount" />
            <TextArea
              title="Description"
              name="description"
              className="input-group"
            />
            <FormGroup type="number" name="rating" title="Rating" />
            <FormGroup type="url" name="image" title="Image" required={true} />
            <Button
              content={edit ? "Edit" : "Add"}
              className="table__button add"
              disabled={isLoading}
            />
          </div>
        </form>
      </Drawer>
      <Modal isOpen={isDelete} onClose={onCloseDelete}>
        <DeleteModal onClose={onCloseDelete} onDeleteAgree={onDeleteAgree} />
      </Modal>
    </main>
  );
};
