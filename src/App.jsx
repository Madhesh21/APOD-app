import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {

  const[showModal,setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />
      {showModal && (<Sidebar handleToggleModal={handleToggleModal}/>)}
      <Footer handleToggleModal={handleToggleModal} showModal={showModal}/>
    </>
  );
}

export default App
