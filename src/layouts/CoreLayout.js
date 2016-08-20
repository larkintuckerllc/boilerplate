import React from 'react'
const CoreLayout = ({ children }) =>
  <div>
    <div>CoreLayout</div>
    {children}
  </div>
CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}
export default CoreLayout
