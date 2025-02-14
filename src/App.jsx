import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';

function App() {

  const[showModal,setShowModal] = useState(false)
  const[data, setData] = useState(null)
  const[loading,setLoading] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchData(){
      const NASA_API = import.meta.env.VITE_NASA_API_KEY;
      const url ="https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API}`;

      /* const today = (new Date()).toDateString
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData)
        console.log("Fetched from cache today")
        return
      } */
      try {
        const res = await fetch(url)
        const apiData = await res.json()
       /*  localStorage.setItem(localKey, JSON.stringify(apiData)) */
        setData(apiData)
        console.log("Fetched from API today")
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {data ? (
        <Main data={data}/>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal} />}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} showModal={showModal} />)}
    </>
  );
}

export default App
