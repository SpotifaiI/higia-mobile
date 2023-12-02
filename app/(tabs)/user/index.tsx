import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';

import { GradientMain } from '../../../components/GradientMain';
import { ProfileDetails } from '../../../components/ProfileDetails';
import { CollaboratorsContext } from '../../../contexts/CollaboratorsContext';
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
  const {
    name,
    email,
    birthDate,
    phone
  } = useContext(CollaboratorsContext);

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
            {name}
          </ProfileName>
        </ProfileHeader>

        <ProfileBody>
          <ProfileDetails
            label="E-mail"
            text={email} />
          <ProfileDetails
            label="Telefone"
            text={phone} />
          <ProfileDetails
            label="Data de Nascimento"
            text={birthDate} />
        </ProfileBody>
      </Wrapper>
    </ProfileContainer>
  );
}