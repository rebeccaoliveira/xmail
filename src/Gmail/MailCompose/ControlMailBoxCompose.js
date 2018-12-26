import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

//Components
import MailBoxCompose from './MailBoxCompose'
import MinimizedMailBoxCompose from './MinimizedMailBoxCompose'
import ModalMailBoxCompose from './ModalMailBoxCompose'

const styles = theme => ({
    div: {
    },
});

function ControlMailBoxCompose({ compose }) {
  const MailboxComponent = (composeState) => {
    switch(composeState) {
      case 'open':
        return <MailBoxCompose />;
      case 'minimized':
        return <MinimizedMailBoxCompose />;
      case 'maximized':
        return <ModalMailBoxCompose />;
      default:
        return null;
    }
  }

  return (
    <div>
      {MailboxComponent(compose.winState)}
    </div>
  );
}

// function ControlMailBoxCompose({ state }) {
//   return (
//     <div>
//       {(function() {
//         switch(state) {
//           case 'open':
//             return <MailBoxCompose />;
//           case 'minimize':
//             return <MinimizedMailBoxCompose />;
//           case 'maximize':
//             return <ModalMailBoxCompose  />;
//           default:
//             return null;
//         }
//       })()}
//     </div>
//   );
// }

ControlMailBoxCompose.propTypes = {
  state: PropTypes.oneOf(['open', 'minimize', 'maximize'])
}

const mapStateToProps = state => {
  const { compose } = state
  return ({
    compose
  })
}

export default connect(mapStateToProps)(
  withStyles(styles)(ControlMailBoxCompose)
)
