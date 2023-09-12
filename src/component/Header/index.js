import {Component} from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa'
import './index.css'

class Header extends Component {
  state = {
    showMobileMenu: false,
  }

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu,
    }))
  }

  render() {
    const {showMobileMenu} = this.state
    return (
      <>
        <header className="header-section">
          <nav className="logo-header-container">
            <div className="link-text">
              <img
                src="https://www.tayanasolutions.com/wp-content/uploads/2021/04/Shopify-Logo.png"
                alt="website logo"
                className="image-logo"
              />
            </div>
            <div className="ram">
              <p className="nav-heading">Start Free Trail</p>

              <button
                type="button"
                className="hamburger-menu"
                onClick={this.onClickHamburgerMenu}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.948 6H20.051C20.573 6 21 6.427 21 6.949V7.051C21 7.573 20.573 8 20.051 8H3.948C3.426 8 3 7.573 3 7.051V6.949C3 6.427 3.426 6 3.948 6ZM20.051 11H3.948C3.426 11 3 11.427 3 11.949V12.051C3 12.573 3.426 13 3.948 13H20.051C20.573 13 21 12.573 21 12.051V11.949C21 11.427 20.573 11 20.051 11ZM20.051 16H3.948C3.426 16 3 16.427 3 16.949V17.051C3 17.573 3.426 18 3.948 18H20.051C20.573 18 21 17.573 21 17.051V16.949C21 16.427 20.573 16 20.051 16Z"
                    fill="#262626"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {showMobileMenu && (
            <section className="home-menu-container">
              <div className="list-items-section">
                <p className="list-item">
                  Solution <FiChevronDown />
                </p>

                <p className="list-item">
                  Pricing <FiChevronDown />
                </p>

                <p className="list-item">
                  Resources <FiChevronDown />
                </p>

                <button
                  type="button"
                  className="logout-button"
                  onClick={this.onClickLogout}
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="logout-button1"
                  onClick={this.onClickLogout}
                >
                  Start Your Free Trial
                </button>
              </div>
              <button
                type="button"
                className="menu-close-button"
                onClick={this.onClickHamburgerMenu}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L8.58579 10L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L10 11.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L11.4142 10L13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289L10 8.58579L7.70711 6.29289Z"
                    fill="#262626"
                  />
                </svg>
              </button>
            </section>
          )}
        </header>
        <div className="bg-container">
          <div className="bg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
              className="website_logo"
              alt="website_logo"
            />
            <p className="para">
              Solution {'   '}
              <FiChevronDown className="icon" />
            </p>
            <p className="para">Pricing</p>
            <p className="para">
              Resources
              <FiChevronDown className="icon" />
            </p>
          </div>
          <div className="bg">
            <p className="para">Log in</p>
            <button className="btn" type="button">
              Start free trial
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Header
