import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import FormatDate from 'dateformat';
import './office.css';

class OfficeList extends Component {
  renderTableHeader() {
    let header = Object.keys(this.props.officeListItem[0]);
    return header.map((key, index) => {
      return (
        <th key={index} scope="row">
          {key && key.toUpperCase()}
        </th>
      );
    });
  }

  renderTableData() {
    return this.props.officeListItem.map((item, index) => {
      const { id, officename, officetype, created_at, updated_at } = item;
      return (
        <tr key={index}>
          <th scope="row">{id}</th>
          <td>{officename && officename.toUpperCase()}</td>
          <td>{officetype && officetype.toUpperCase()}</td>
          <td>{FormatDate(created_at)}</td>
          <td>{FormatDate(updated_at)}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div id="officeList">
        <Table responsive hover striped>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </Table>
      </div>
    );
  }
}
OfficeList.propTypes = {
  officeListItem: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool
};
export default OfficeList;
