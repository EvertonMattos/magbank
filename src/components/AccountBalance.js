import React from "react";
import { Col, Tabs, Tab, Table, Button } from "react-bootstrap";
const AccountBalance = ({ data }) => {
  const { lastePay, futurePay } = data;
  return (
    <>
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
        <h3 className="my-5 text-muted">Conta corrente</h3>
        <h6>
          <small>
            <strong>Saldo em conta corrent</strong>
          </small>
        </h6>
        <h4 className="text-success mb-lg-3">
          <small>R$:</small>3.500<small>,00</small>
        </h4>
        <h6>
          <smal>
            <strong>Cheque especial </strong>
          </smal>
        </h6>
        <p className="mb-0">Limite Disponivel</p>
        <p className="mb-4">R$:5.000,00</p>
        <Button className="btn-secondary">Ver Extrato</Button>
      </Col>
      <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
        <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
          <Tab eventKey="latest" title="Ultimos Pagamentos">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data:</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {lastePay.map(({ date, description, value }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="future" title="Lançamentos Futuros">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data:</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {futurePay.map(({ date, description, value }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </>
  );
};

export default AccountBalance;
