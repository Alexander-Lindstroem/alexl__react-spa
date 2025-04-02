import { useState } from 'react'
import StartPage from './components/StartPage'
import HomePage from './components/HomePage'
import ContentPage from './components/ContentPage'
import { pageCategories } from './utils/data'

function App() {
  const [currentPage, setCurrentPage] = useState(false)
  console.log(currentPage)

  return (
    <>
      {!currentPage && <StartPage setPageFunction={setCurrentPage}/>}
      {currentPage === "home" && <HomePage setPageFunction={setCurrentPage}/>}
      {currentPage === "character profiles" && <ContentPage category={pageCategories[1]} setPageFunction={setCurrentPage}/>}
      {currentPage === "dictionary" && <ContentPage category={pageCategories[8]} setPageFunction={setCurrentPage}/>}
    </>
  )

}

export default App
