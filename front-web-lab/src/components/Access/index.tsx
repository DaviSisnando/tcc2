import { IoIosLock, IoIosUnlock } from 'react-icons/io';
import { useMemo } from 'react';

import { AccessContainer, AccessMessage, AccessTitle } from 'components/Access/styles';
import colors from 'styles/colors';

function Access({ type }: IAccessProps) {
  const config = useMemo(() => {
    if (type === 'unlocked') {
      return {
        Icon: IoIosUnlock,
        title: 'Acesso liberado',
        message: 'Usuário validado e a porta pode ser aberta',
      };
    }

    return {
      Icon: IoIosLock,
      title: 'Acesso negado',
      message: 'O usuário nao possui permissão para entrar',
    };
  }, [type]);

  return (
    <AccessContainer>
      <AccessTitle>{config.title}</AccessTitle>
      <config.Icon size={140} color={colors.blue.dark} />
      <AccessMessage>{config.message}</AccessMessage>
    </AccessContainer>
  );
}

export default Access;
