import React from "react";
import { Row, Col, Tabs, Tab, Form, Button } from "react-bootstrap";
const AccountPayments = () => {
  return (
    <>
      <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
        <h3 className="mt-4 text-muted">Pagamentos</h3>
        <Tabs className="mt-5 pt-lg-2" defaultActiveKey="boleto">
          <Tab eventKey="boleto" title="Boleto">
            <Form>
              <Form.Group controlId="formBarCode" className="mt-4">
                <Form.Label>Código de Barra </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insira o código de barra"
                />
              </Form.Group>
              <Form.Group
                controlId="formTypePay"
                key="inline-radio"
                className="mt-4"
              >
                <Form.Label>Formas de pagamentos</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Débito em conta corrente"
                    id="debit"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="Cartão de crédito"
                    id="credit"
                    name="formHorizontalRadios"
                    className="ml-4"
                  />
                </div>
              </Form.Group>
            </Form>
            <Button variant="success">Continuar</Button>
          </Tab>
          <Tab eventKey="future" title="Transferência">
            <Form.Row className="mt-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Banco</Form.Label>
                <Form.Control as="select" defaultValue="MagBank">
                  <option>MagBank</option>
                  <option>Xpto</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formAgencia">
                <Form.Label>Agência</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group as={Col} controlId="formAccountCur">
                <Form.Label>Conta corrente</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formValueTransf">
                <Form.Label>Valor da Transferência</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group as={Col} controlId="formIndetifiExtrato">
                <Form.Label>Indentificação nos extratos</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Row>
            <Button variant="success">Continuar</Button>
          </Tab>
        </Tabs>
      </Col>
    </>
  );
};

export default AccountPayments;
