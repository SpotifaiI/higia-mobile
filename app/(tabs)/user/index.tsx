import { Feather } from '@expo/vector-icons';

import { GradientMain } from '../../../components/GradientMain';
import { Wrapper } from '../../../global/styles/components';
import { colors } from '../../../global/styles/theme';
import {
  ProfileAvatar,
  ProfileBody,
  ProfileContainer,
  ProfileDetailsContainer,
  ProfileDetailsData,
  ProfileDetailsLabel,
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
          <ProfileDetailsContainer>
            <ProfileDetailsLabel>
              E-mail
            </ProfileDetailsLabel>
            <ProfileDetailsData>
              contato@joao.com.br
            </ProfileDetailsData>
          </ProfileDetailsContainer>
        </ProfileBody>
      </Wrapper>
    </ProfileContainer>
  );
}