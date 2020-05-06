import React, { useState } from "react"

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false)
  function handleToggle() {
    setIsChecked(!isChecked)
    //toggle dark-mode class
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")
  }
  return (
    <div className="toggle">
      <label htmlFor="toggle" className="switch">
        <span className="title">
          switch {isChecked ? "light mode" : "dark mode"}
        </span>
        <input
          id="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={() => handleToggle()}
        />
        <span className="slider round">
          <span className="toggle-icon-tick"></span>
        </span>
      </label>
    </div>
  )
}
export default Toggle
