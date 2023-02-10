import './index.css'

const HistoryProfile = props => {
  const {eachItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = eachItem
  return (
    <li className="container">
      <p className="paragraph">{timeAccessed}</p>
      <img src={logoUrl} className="image-url" alt={domainUrl} />
      <h1 className="title">{title}</h1>

      <p>{domainUrl}</p>
      <div className="delete-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </div>
    </li>
  )
}

export default HistoryProfile
