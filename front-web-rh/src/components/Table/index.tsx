import { TableContainer, TableRow, Paper, TableBody, Table as TableMui } from '@mui/material';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import {
  TableCellAction,
  TableCellBlack,
  TableCellImage,
  TableCellImageContainer,
  TableCellStatus,
  TableCellWhite,
  TableHeadSyled,
} from 'components/Table/styles';

function Table({ headerValues, row = [], action }: ITableProps) {
  return (
    <TableContainer component={Paper}>
      <TableMui>
        <TableHeadSyled>
          <TableRow>
            {headerValues.map(value => (
              <TableCellWhite key={value}>{value}</TableCellWhite>
            ))}
            <TableCellWhite />
          </TableRow>
        </TableHeadSyled>
        <TableBody>
          {row.map(({ name, id, status, role, email, registration, imageUrl }, index) => (
            <TableRow key={id}>
              <TableCellImage>
                <TableCellImageContainer>
                  <img
                    src={
                      imageUrl?.includes('undefined') ? 'https://picsum.photos/100/100' : imageUrl
                    }
                    alt="Person"
                  />
                  <span>{name}</span>
                </TableCellImageContainer>
              </TableCellImage>
              <TableCellBlack>{registration}</TableCellBlack>
              <TableCellStatus status={status}>
                <div>
                  <code />
                  <span>{status}</span>
                </div>
              </TableCellStatus>
              <TableCellBlack>{role}</TableCellBlack>
              <TableCellBlack>{email}</TableCellBlack>
              <TableCellAction align="right">
                <AiOutlineEdit size={24} onClick={() => action.edit(row[index])} />
                <AiOutlineDelete size={24} onClick={() => action.delete(row[index])} />
              </TableCellAction>
            </TableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
}

export default Table;
