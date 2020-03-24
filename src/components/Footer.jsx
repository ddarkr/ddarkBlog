import React, { Component } from "react"
import styled from "@emotion/styled"

const FooterBox = styled.footer`
  span {
    font-size: 0.94rem;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <FooterBox className="container">
        <div>
          <span>Dohyun Jung</span>
        </div>
      </FooterBox>
    )
  }
}
