import {
  MAIL_ADD
} from '../types'

let id = 0;
function createData(unread, fav, imp, title, content, date ) {
  id += 1;
  return { id, unread, fav, imp, title, content, date };
}

const mailsInitialState = [
  createData(true, true, true, 'Medium Daily Digest', '“How to Get More Work Done in a Week Than Most People Do in a Month” published in Personal Growth by Thomas Oppong', 'Dec 8'),
  createData(true, false, true, 'React Status ', 'How to differentiate between deep and shallow copies in JavaScript', 'Dec 8'),
  createData(true, true, true, 'Medium Daily Digest', '“Functional Programming” published in The Renaissance Developer by TK', 'Dec 6'),
  createData(true, false, true, 'TylerMcGinnis.com', 'React Newsletter - Issue 140', 'Dec 5'),

  createData(true, false, false, 'Cercle', 'Next monday: Cercle invites Recondite to play a special live set in the beautiful Abbatiale of Bernay!', 'Dec 7'),
  createData(true, false, false, 'TylerMcGinnis.com', 'React Newsletter - Issue 141', 'Dec 7'),
  createData(true, false, false, 'Quincy Larson', 'A free 3-hour Node.js for Beginners course to help you learn back-end development', 'Dec 6'),
  createData(true, false, false, 'GitHub', 'A third-party OAuth application has been added to your account', 'Dec 1'),

  createData(false, true, true, 'Quincy Larson', 'A free 3-hour Node.js for Beginners course to help you learn back-end development', 'Dec 7'),
  createData(false, true, true, 'GitHub', 'A third-party OAuth application has been added to your account', 'Dec 1'),
  createData(false, true, true, 'Travis CI', 'Passed: rebyoliveira/react-simple-button#1', 'Nov 30'),
  createData(false, true, true, 'ReactEurope', 'ReactEurope 2019: First tickets available next week & workshops CFP!', 'Nov 1'),

  createData(false, false, true, 'JavaScript Lab Belgium', 'Thursday: Join 16 JS Hackers at "HackJam workshop React.js & Apollo"', 'Oct 21'),
  createData(false, false, false, 'Codecademy Newsletter', 'What will you build next?', 'Oct 11'),
  createData(false, false, true, 'freeCodeCamp.org ', 'Welcome to freeCodeCamp.org', 'Oct 01'),
];

const mails = (state = mailsInitialState, action) => {
  switch (action.type) {
    case MAIL_ADD:
      const payloadMail = action.payload.mail
      const date = new Date().toLocaleDateString('en', {month:"short", day:"2-digit"})
      const id = Date.now()
      return [...state, {...payloadMail, id, date, unread: true, imp: true}]
    default:
      return state
  }
}

export default mails;
