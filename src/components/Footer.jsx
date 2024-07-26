import React from 'react'

export default function Footer(props) {

  const{handleToggleModal, showModal} = props

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>Martian Landscape</h2>
        <h1>NASA's APOD</h1>
      </div>
      {!showModal && (
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      )}
    </footer>
  );
}
