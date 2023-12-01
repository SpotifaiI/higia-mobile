import { createContext, PropsWithChildren, useState } from 'react';

import { Collaborator } from '../api/collaborators/collaborators.model';

export type CollaboratorsProviderProps = PropsWithChildren;
export type CollaboratorsContextData = {
  name: string;
  id: string;
  birthDate: string;
  email: string;
  phone: string;
  updateCredentials: (collaborator: Collaborator) => void;
  isLoggedIn: () => boolean;
};

export const CollaboratorsContext = createContext<CollaboratorsContextData>(
  {} as CollaboratorsContextData
);

export function CollaboratorsProvider({
  children
}: CollaboratorsProviderProps) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function updateCredentials(collaborator: Collaborator) {
    setId(collaborator.id);
    setName(collaborator.name);
    setBirthDate(buildCollaboratorDate(collaborator.birthday));
    setEmail(collaborator.email);
    setPhone(collaborator.phoneNumber);
  }

  function isLoggedIn() {
    return id.length > 0;
  }

  function buildCollaboratorDate(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <CollaboratorsContext.Provider value={{
      name,
      birthDate,
      email,
      id,
      phone,
      updateCredentials,
      isLoggedIn
    }}>
      {children}
    </CollaboratorsContext.Provider>
  );
}