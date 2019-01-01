import {
  MAIL_ADD
} from '../types'

export const mailAdd = (to, subject, body) => ({
  type: MAIL_ADD,
  payload: { mail: { to, subject, body } }
});
