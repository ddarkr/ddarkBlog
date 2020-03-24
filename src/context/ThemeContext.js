import React, { Component } from "react"

const defaultState = {
  dark: false,
  notFound: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    dark: false,
    notFound: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark

    localStorage.setItem("ddark", JSON.stringify(dark))
    this.setState({ dark })
  }

  setNotFound = () => {
    this.setState({ notFound: true })
  }

  setFound = () => {
    this.setState({ notFound: false })
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem("ddark"))
    if (lsDark) {
      // localStorage 값이 있으면 다크 모드 ON
      this.setState({ dark: lsDark })
    } else {
      // localStorage 값이 없으면 브라우저 설정 감지
      if (
        lsDark !== false &&
        lsDark !== true &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.setState({ dark: true })
        localStorage.setItem("ddark", true)
      }
    }
  }

  render() {
    const { children } = this.props
    const { dark, notFound } = this.state

    return (
      <ThemeContext.Provider
        value={{
          dark,
          notFound,
          setFound: this.setFound,
          setNotFound: this.setNotFound,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
