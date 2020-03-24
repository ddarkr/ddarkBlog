import React, { Component } from "react"
import styled from "@emotion/styled"

const FooterBox = styled.footer`
  margin-top: 50px;
  div {
    padding: 20px 0;
    font-size: 1rem;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <FooterBox className="container">
        <div>
          <span>&copy; Dohyun Jung</span>
        </div>
      </FooterBox>
    )
  }
}
