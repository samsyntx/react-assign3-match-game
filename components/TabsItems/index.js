import './index.css'

const TabsItems = props => {
  const {tabsItemDetail, changeCategoryList, isActiveTab} = props
  const {tabId, displayText} = tabsItemDetail

  const clickedOnCategory = () => {
    changeCategoryList(tabId)
  }
  const activeTabStyle = isActiveTab ? 'active-tab-style' : ''

  return (
    <li>
      <button
        type="button"
        onClick={clickedOnCategory}
        className={`tab-list-items ${activeTabStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsItems
