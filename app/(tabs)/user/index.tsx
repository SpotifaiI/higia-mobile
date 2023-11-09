import { Feather } from '@expo/vector-icons';

import { GradientMain } from '../../../components/GradientMain';
import { ProfileDetails } from '../../../components/ProfileDetails';
import { Wrapper } from '../../../global/styles/components';
import { colors } from '../../../global/styles/theme';
import {
  ProfileAvatar,
  ProfileBody,
  ProfileContainer,
  ProfileHeader,
  ProfileName
} from './styles';

export function User() {
  return (
    <ProfileContainer>
      <Wrapper>
        <ProfileHeader>
          <ProfileAvatar>
            <GradientMain>
              <Feather size={96} color={colors.white} name="user" />
            </GradientMain>
          </ProfileAvatar>

          <ProfileName>
            João de Silva
          </ProfileName>
        </ProfileHeader>

        <ProfileBody>
          <ProfileDetails
            label="E-mail"
            text="contato@joao.com.br" />
          <ProfileDetails
            label="Telefone"
            text="(47) 9 9999-9999" />
          <ProfileDetails
            label="Data de Nascimento"
            text="23/10/1963" />
          <ProfileDetails
            label="CPF"
            text="000.000.000-00" />
        </ProfileBody>
      </Wrapper>
    </ProfileContainer>
  );
}