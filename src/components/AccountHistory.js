import React from "react";
import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { historyPay } = data;
  return (
    <>
      <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
        <h3 className="mt-4 text-muted">Extratos de Conta Corrente</h3>
        <Table striped borderless>
          <thead>
            <tr>
              <th>Data:</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th> Saldo </th>
            </tr>
          </thead>
          <tbody>
            {historyPay.map(({ date, description, value, saldo }) => (
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{value}</td>
                <td>{saldo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </>
  );
};

export default AccountHistory;
