import {Component} from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import './index.css'

class ListTrail extends Component {
  render() {
    const {choicesList} = this.props
    return (
      <>
        <li className="li">
          <h1 className="nav-heading1">{choicesList.id}</h1>
          <p className="para1">{choicesList.text}</p>
          <h1>
            <FaRupeeSign size="25" />
            {choicesList.amount} <span className="para1">/Month</span>
          </h1>
          <h1 className="back">{choicesList.inCome}</h1>
          <h1 className="nav-heading1">{choicesList.title}</h1>
          <div className="imggg">
            <img
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt="tick"
              className="tick"
            />
            <h1 className="para2">{choicesList.items2}</h1>
          </div>
          <div className="imggg">
            <img
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt="tick"
              className="tick"
            />
            <h1 className="para2">{choicesList.items}</h1>
          </div>
          <div className="imggg">
            <img
              src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
              alt="tick"
              className="tick"
            />
            <h1 className="para2">{choicesList.items1}</h1>
          </div>
          <button type="button" className="btn2">
            Try For Free
          </button>
        </li>
      </>
    )
  }
}

export default ListTrail
