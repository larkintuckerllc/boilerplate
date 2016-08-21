import React, { PropTypes } from 'react';
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
      <div>
        {screens.map(screen =>
          <div key={screen.id}>{screen.description}</div>)}
      </div> :
      null
    }
  </div>
ScreensView.propTypes = {
  isGetting: PropTypes.bool.isRequired,
  isGettingError: PropTypes.bool.isRequired,
  screens: PropTypes.array.isRequired
}
export default ScreensView
