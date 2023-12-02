import React from 'react'
import ProductsList from '../components/products/productsList'
import { LanguageContext } from '../context/language';
import { ThemeContext } from '../context/theme';
import { useContext } from "react";

export default function Products() {
  const { contextLang , setContextLang }  = useContext(LanguageContext)
  const { contextTheme , setContextTheme }  = useContext(ThemeContext)
  return (
    <div className={contextTheme === 'Light' ? 'text-dark': "text-light"}>
      {contextLang === "EN" ? <h2>Welcome to our official website</h2>
      : contextLang === "AR" ? <h2 dir='rtl'>مرحبا بكم فى موقعنا الرسمى</h2>
      : contextLang === "FR" ? <h2>Soyez les bienvenus sur notre site</h2>
      : <h1/>}
      
      <hr />
      <ProductsList />
    </div>
  )
}
