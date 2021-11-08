import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import {SubmitHandler, FormHandles} from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

type Food = {
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string,
}

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (data:FormHandles) => void;
  isOpen: boolean;
  editingFood: Food;
}


const ModalEditFood = ({editingFood, isOpen, setIsOpen, handleUpdateFood}:ModalEditFoodProps) => {
  const formRef = createRef<FormHandles>()

  const handleSubmit:SubmitHandler<FormHandles> = async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
