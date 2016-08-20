import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
const ScreensView = ({ isGetting, isGettingError, screens }) =>
  <div>
    {isGetting ?
      <div>Loading</div> :
      null
    }
    {isGettingError ?
      <div>Error</div> :
      null
    }
    {!isGetting && !isGettingError ?
      <List>
        {screens.map(screen =>
          <ListItem key={screen.id} primaryText={screen.description} />
        )}
      </List> :
      null
    }
  </div>
ScreensView.propTypes = {
  isGetting: PropTypes.bool.isRequired,
  isGettingError: PropTypes.bool.isRequired,
  screens: PropTypes.array.isRequired
}
export default ScreensView
