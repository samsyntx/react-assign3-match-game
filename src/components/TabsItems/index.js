import './index.css'

const TabsItems = props => {
  const {tabsItemDetail} = props
  const {displayText} = tabsItemDetail

  return <li className="tab-list-items">{displayText}</li>
}

export default TabsItems
