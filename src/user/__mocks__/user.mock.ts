import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123456789',  
  email: 'emailmock@emali.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$AfCE8eKAmKsgC16rPrGbXOFC7oJ/oMoLOj.wRelUiOIQjVr5gL6qm',
  phone: '555555555',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};