interface IModalTypes {
  statusFilter: string;
  roleFilter: string;
  user?: IEmployeeRow;
  type?: 'edit' | 'delete';
  onCancel?: () => void;
  setUsers?: (users: IEmployeeRow[]) => void;
}
