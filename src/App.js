import {Component} from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import Header from './component/Header'
import ListTrail from './component/ListTrail'
import './App.css'

const choicesList = [
  {
    id: 'Basic',
    text:
      'Everything you need to sell online, ship products, process payments, and the basics to sell in person.',

    amount: '19,994',
    inCome: 'Get your  first 3 months  for Rs 20/mo',
    title: "What's included on Basic",

    items2: 'Basic Reports',
    items: '2 staff accounts',
    items1: 'Upto 1,000 inventory Basic',
  },
  {
    id: 'Shopify',
    text:
      'Level up your business with professional reporting and more staff accounts.',

    amount: '7,447',
    inCome: 'Get your  first 3 months  for Rs 20/mo',
    title: "what's included on Shopify",

    items2: 'Professional Reports',
    items: '5 staff accounts',
    items1: 'Upto 1,000 inventory Basic',
  },
  {
    id: 'Advanced',
    text:
      'Get the best of Shopify with advanced features and our lowest transaction fees',

    amount: '30,164',
    inCome: 'Get your  first 3 months  for Rs 20/mo',
    title: "what's included on Advanced",

    items2: 'Custom Reports Builder',
    items: '15 staff accounts',
    items1: 'Upto 1,000 inventory Basic',
  },
]

const listing = [
  {
    id: 'Basic',
  },
  {
    id: 'Shopify',
  },
  {
    id: 'Advanced',
  },
]

class App extends Component {
  state = {link: listing[0].id}

  onRendering = id => {
    this.setState({link: id})
  }

  render() {
    const {link} = this.state
    console.log(link)

    const raja = choicesList.filter(i => i.id === link)
    console.log(raja)

    return (
      <div>
        <Header />
        <div className="to">
          <div className="top">
            <button type="button" className="btn">
              Per Monthly
            </button>
            <p className="pa">Per Year(Saves 25%)</p>
          </div>
        </div>
        <ul className="ul">
          {choicesList.map(i => (
            <ListTrail key={i.id} choicesList={i} />
          ))}
        </ul>
        <div className="hide">
          <div className="div">
            {listing.map(i => (
              <button
                className={i.id === link ? 'id' : 'id1'}
                type="button"
                onClick={() => this.onRendering(i.id)}
              >
                {i.id}
              </button>
            ))}
          </div>
          <div className="small">
            <h1>
              <FaRupeeSign size="25" />
              {raja[0].amount} <span className="para1">/Month</span>
            </h1>

            <h1 className="back">{raja[0].inCome}</h1>
            <h1 className="nav-heading1">{raja[0].title}</h1>
            <div className="imggg">
              <img
                src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                alt="tick"
                className="tick"
              />
              <h1 className="para2">{raja[0].items2}</h1>
            </div>
            <div className="imggg">
              <img
                src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                alt="tick"
                className="tick"
              />
              <h1 className="para2">{raja[0].items}</h1>
            </div>
            <div className="imggg">
              <img
                src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                alt="tick"
                className="tick"
              />
              <h1 className="para2">{raja[0].items1}</h1>
            </div>
          </div>
          <button type="button" className="btn2">
            Try For Free
          </button>
        </div>
      </div>
    )
  }
}

export default App
