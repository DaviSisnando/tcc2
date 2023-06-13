type StatusType = 'Ativo' | 'Desligado' | 'Férias' | 'Afastado' | 'Aposentado';

interface IEmployeeRow {
  name: string;
  id: string;
  registration: string;
  status: StatusType;
  role: string;
  email: string;
  imageUrl?: string;
}

interface ITableProps {
  headerValues: string[];
  row: IEmployeeRow[];
  action: {
    edit: (user: IEmployeeRow) => void;
    delete: (user: IEmployeeRow) => void;
  };
}
