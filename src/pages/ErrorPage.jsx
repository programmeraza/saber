import React from 'react'
import './pages.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const ErrorPage = () => {
  return (
    <>
    <Header/>
      <div className="error">
        <div className="container">
            <div className="error__wrapper">
                <h1>404</h1>
                <p>Not found</p>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ErrorPage
