import { useCallback, useMemo, useState } from 'react';

import Button from 'components/Button';
import { ModalTypeButtons, ModalTypeContainer, ModalTypeRow } from 'pages/ListEmployee/styles';
import TextInput from 'components/TextInput';
import Dropdown from 'components/Dropdown';
import { ROLE, STATUS } from 'pages/ListEmployee/constants';
import api from 'services/api';

function ModalTypes({
  user,
  type = 'edit',
  onCancel,
  setUsers,
  roleFilter,
  statusFilter,
}: IModalTypes) {
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [status, setStatus] = useState(user?.status ?? '');
  const [role, setRole] = useState(user?.role ?? '');

  const formatUser = (usersData: IUser[]) =>
    usersData.map(
      ({
        name: uName,
        status: uStatus,
        _id,
        registration,
        email: uEmail,
        role: uRole,
        image_url,
      }) =>
        ({
          name: uName,
          status: uStatus,
          id: _id,
          registration,
          email: uEmail,
          role: uRole,
          imageUrl: image_url,
        } as IEmployeeRow),
    );

  const handleDeleteUser = useCallback(() => {
    user &&
      api
        .delete(`users/${user.id}`)
        .then(() => {
          onCancel && onCancel();
        })
        .then(() => {
          api
            .get<IRequestUser>('users', {
              params: { filter: '', status: statusFilter, role: roleFilter },
            })
            .then(({ data: { data } }) => setUsers && setUsers(formatUser(data)));
        });
  }, [onCancel, roleFilter, setUsers, statusFilter, user]);

  const handleEditUser = useCallback(() => {
    user &&
      api
        .put(`users/${user.id}`, { name, email, status, role })
        .then(() => {
          onCancel && onCancel();
        })
        .then(() => {
          api
            .get<IRequestUser>('users', {
              params: { filter: '', status: statusFilter, role: roleFilter },
            })
            .then(({ data: { data } }) => setUsers && setUsers(formatUser(data)));
        });
  }, [email, name, onCancel, role, roleFilter, setUsers, status, statusFilter, user]);

  const edit = useMemo(
    () => (
      <>
        <h1>Deseja Editar esse usuário?</h1>
        <ModalTypeRow>
          <TextInput
            value={name}
            label="Nome"
            placeholder="Nome"
            onChange={event => setName(event.target.value)}
          />
          <TextInput
            value={email}
            label="E-mail"
            placeholder="E-mail"
            onChange={event => setEmail(event.target.value)}
          />
        </ModalTypeRow>
        <ModalTypeRow>
          <Dropdown
            value={status}
            label="Status"
            placeholder="Status"
            options={STATUS}
            onSelect={option => setStatus((option as IOption)?.value ?? '')}
          />
          <Dropdown
            value={role}
            label="Cargo"
            placeholder="Cargo"
            options={ROLE}
            onSelect={option => setRole((option as IOption)?.value ?? '')}
          />
        </ModalTypeRow>
        <ModalTypeButtons>
          <Button primary={false} borderType="normal" onClick={onCancel}>
            Cancelar
          </Button>
          <Button borderType="normal" onClick={handleEditUser}>
            Salvar
          </Button>
        </ModalTypeButtons>
      </>
    ),
    [email, handleEditUser, name, onCancel, role, status],
  );

  const deleteModel = useMemo(
    () => (
      <>
        <h1>Deseja Deleter esse usuário?</h1>
        <ModalTypeButtons>
          <Button primary={false} borderType="normal" onClick={onCancel}>
            Cancelar
          </Button>
          <Button borderType="normal" onClick={handleDeleteUser}>
            Deletar
          </Button>
        </ModalTypeButtons>
      </>
    ),
    [handleDeleteUser, onCancel],
  );

  const ModelType = useMemo(() => {
    const typeMap = { edit, delete: deleteModel };

    return typeMap[type];
  }, [deleteModel, edit, type]);

  return <ModalTypeContainer>{ModelType}</ModalTypeContainer>;
}

export default ModalTypes;
