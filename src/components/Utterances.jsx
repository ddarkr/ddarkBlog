import React, { createRef, useLayoutEffect, useContext } from "react"

import ThemeContext from "../context/ThemeContext"

const src = "https://utteranc.es/client.js"
const repo = "ddarkr/ddarkBlog"

const Utterances = React.memo(() => {
  const containerRef = createRef()
  const theme = useContext(ThemeContext)

  useLayoutEffect(() => {
    const utterances = document.createElement("script")

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "💬 comment",
      theme: theme.dark ? "github-dark" : "github-light",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current.appendChild(utterances)
  }, [])

  return <div ref={containerRef} />
})

Utterances.displayName = "Utterances"
Utterances.contextType = ThemeContext

export default Utterances
