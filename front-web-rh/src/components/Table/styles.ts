import { TableCell, TableHead } from '@mui/material';
import styled from 'styled-components';

import colors from 'styles/colors';

const getStatusInfo = (status: StatusType) => {
  const statusMap = {
    Ativo: {
      color: '#4EB6F0',
      label: 'Ativo',
    },
    Desligado: {
      color: '#F0837B',
      label: 'Desligado',
    },
    Férias: {
      color: '#FFCA43',
      label: 'Férias',
    },
    Afastado: {
      color: '#FFCA43',
      label: 'Afastado',
    },
    Aposentado: {
      color: '#FFCA43',
      label: 'Aposentado',
    },
  };

  return statusMap[status];
};

export const TableHeadSyled = styled(TableHead)`
  background-color: ${colors.blue.sad};
  color: ${colors.white.solf};
  font-weight: 600;
`;

export const TableCellSyled = styled(TableCell)`
  font-weight: 600 !important;
`;

export const TableCellWhite = styled(TableCellSyled)`
  color: ${colors.white.solf} !important;
`;

export const TableCellBlack = styled(TableCellSyled)`
  color: ${colors.black.soft};
`;

export const TableCellImage = styled(TableCellBlack)`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const TableCellImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TableCellStatus = styled(TableCellBlack)<{ status: StatusType }>`
  div {
    display: flex;
    align-items: center;
  }

  code {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ status }) => getStatusInfo(status).color};
    margin-right: 10px;
  }

  span {
    text-transform: capitalize;
  }
`;

export const TableCellAction = styled(TableCellBlack)`
  width: 15%;

  svg {
    margin: 0 10px;
    cursor: pointer;
  }
`;
