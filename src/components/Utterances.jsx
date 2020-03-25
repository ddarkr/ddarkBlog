import React, { createRef, useLayoutEffect } from "react"

const src = "https://utteranc.es/client.js"
const repo = "ddarkr/ddarkBlog"

const Utterances = React.memo(() => {
  const containerRef = createRef()

  useLayoutEffect(() => {
    const utterances = document.createElement("script")

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "💬 comment",
      theme: "github-light",
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

export default Utterances