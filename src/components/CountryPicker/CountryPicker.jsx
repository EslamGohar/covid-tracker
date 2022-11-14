import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@mui/material'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

export const CountryPicker = ({ handleCountryChange }) => {

  const [ country, setCountry ] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
        setCountry(await fetchCountries())
    }
    fetchAPI()
  }, [setCountry])


  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {country.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}
