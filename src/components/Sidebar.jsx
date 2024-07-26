import React from 'react'

export default function Sidebar(props) {

  const { handleToggleModal } = props

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>

      <div className="sidebarContents">
        <h2>Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos maiores odio. Maiores quos eligendi quibusdam repellat quisquam
            voluptatibus molestias eveniet aspernatur ratione! Deserunt, fuga
            est itaque error labore facilis.
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
