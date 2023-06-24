import * as React from "react"
const Burger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={26}
    fill="none"
    {...props}
  >
    <path
      fill="#A6A6A6"
      fillRule="evenodd"
      d="M30 2.429A2.143 2.143 0 0 0 27.857.286H2.143a2.143 2.143 0 1 0 0 4.285h25.714A2.143 2.143 0 0 0 30 2.43ZM30 13.143A2.143 2.143 0 0 0 27.857 11H2.143a2.143 2.143 0 0 0 0 4.286h25.714A2.143 2.143 0 0 0 30 13.143ZM30 23.857a2.143 2.143 0 0 0-2.143-2.143H15A2.143 2.143 0 0 0 15 26h12.857A2.143 2.143 0 0 0 30 23.857Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Burger
