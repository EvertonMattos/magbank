import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./AccountModal.scss";

const AccountModal = ({ show, handleClose, auth }) => {
  const history = useHistory();
  const [name, setName] = useState();

  const handlChange = () => {
    auth.login(name, "12345", history.push("/dashboard"));
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className=" title-modal">Crie sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label className="text-label">Seu Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu Nome"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="text-label">Seu Email</Form.Label>
            <Form.Control type="email" placeholder="Seu Email" />
          </Form.Group>

          <Form.Group controlId="formCitySelect">
            <Form.Label
              className="my-1 mr-2 text-label"
              htmlFor="formCitySelect"
            >
              Seu Estado
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="formCitySelect"
              custom
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Eu li é concordo com termos de uso"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handlChange}>
          Criar conta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
