import { GoGraph } from 'react-icons/go';
import { FaSuitcase } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Modal } from '@mui/material';

import api from 'services/api';
import Header from 'components/Header';
import {
  ListEmployeeContainer,
  ListEmployeeContent,
  ListEmployeeFlexSearch,
  ListEmployeeFlexTitle,
  ListEmployeeTitle,
  modalStyle,
} from 'pages/ListEmployee/styles';
import LogoUniforAll from 'assets/images/LogoUniforAll.png';
import HeaderItem from 'components/HeaderItem';
import Table from 'components/Table';
import Button from 'components/Button';
import SearchInput from 'components/SearchInput';
import Dropdown from 'components/Dropdown';
import { ROLE, STATUS } from 'pages/ListEmployee/constants';
import ModalTypes from 'pages/ListEmployee/ModalTypes';

function ListEmployee() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState<IEmployeeRow[]>([]);
  const [search, setSearch] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('');

  const [modalConfig, setModalConfig] = useState<IModalTypes>({
    type: 'edit',
    statusFilter,
    roleFilter,
  });

  const formatUser = (usersData: IUser[]) =>
    usersData.map(
      ({ name, status, _id, registration, email, role, image_url }) =>
        ({
          name,
          status,
          id: _id,
          registration,
          email,
          role,
          imageUrl: image_url,
        } as IEmployeeRow),
    );

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleChangeRole = (newValue?: unknown) => {
    setRoleFilter((newValue as { label: string; value: string })?.value ?? '');
  };

  const handleChangeStatus = (newValue?: unknown) => {
    setStatusFilter((newValue as { label: string; value: string })?.value ?? '');
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const actionEdit = (user: IEmployeeRow) => {
    setIsOpen(true);
    setModalConfig({ type: 'edit', user, statusFilter, roleFilter });
  };

  const actionDelete = (user: IEmployeeRow) => {
    setIsOpen(true);
    setModalConfig({ type: 'delete', user, statusFilter, roleFilter });
  };

  useEffect(() => {
    api
      .get<IRequestUser>('users', {
        params: { filter: search, status: statusFilter, role: roleFilter },
      })
      .then(({ data: { data } }) => setUsers(formatUser(data)));
  }, [roleFilter, search, statusFilter]);

  return (
    <ListEmployeeContainer>
      <Modal open={isOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <ModalTypes
            {...modalConfig}
            onCancel={handleCloseModal}
            setUsers={setUsers}
            roleFilter={roleFilter}
            statusFilter={statusFilter}
          />
        </Box>
      </Modal>
      <Header icon={LogoUniforAll} iconAlt="Unifor logo">
        <HeaderItem as="link">
          <GoGraph /> Dashboard
        </HeaderItem>
        <HeaderItem as="link">
          <FaSuitcase />
          Colaboradores
        </HeaderItem>
        <HeaderItem as="button" primary={false} borderType="normal">
          <MdOutlineLogout /> SAIR
        </HeaderItem>
      </Header>

      <ListEmployeeContent>
        <ListEmployeeFlexTitle>
          <ListEmployeeTitle>Colaboradores</ListEmployeeTitle>
          <Button primary={false} borderType="normal" onClick={() => navigate('register')}>
            <BsPlusLg /> Cadastrar novo acesso
          </Button>
        </ListEmployeeFlexTitle>

        <ListEmployeeFlexSearch>
          <SearchInput
            onChange={handleChangeSearch}
            placeholder="Busque pela matrícula ou nome do colaborador "
          />
          <Dropdown placeholder="Cargo" options={ROLE} onSelect={handleChangeRole} />
          <Dropdown placeholder="Status" options={STATUS} onSelect={handleChangeStatus} />
        </ListEmployeeFlexSearch>
        <Table
          headerValues={['Nome', 'Matrícula', 'Status', 'Cargo', 'E-mail']}
          row={users}
          action={{ edit: actionEdit, delete: actionDelete }}
        />
      </ListEmployeeContent>
    </ListEmployeeContainer>
  );
}

export default ListEmployee;
