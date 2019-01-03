import {
  MAIL_ADD
} from '../types'

export const mailAdd = (to, subject, body, date) => ({
  type: MAIL_ADD,
  payload: { mail: { to, title: subject, content: body, date } }
});
