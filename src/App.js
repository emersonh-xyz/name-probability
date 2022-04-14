
import React from "react"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Results from "./components/Results"



export default function App() {

    const [ageData, setAgeData] = useState([])
    const [genderData, setGenderData] = useState([])
    const [natData, setNatData] = useState([])

    const state = {
        ageData,
        setAgeData,
        genderData,
        setGenderData,
        natData,
        setNatData,
    }

    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <Main 
                    state={state}/>
                </div>
            } />

            <Route path="/results" element={
                <div>
                    <Results
                    state={state}/>
                </div>
            } />

        </Routes>
    )
}