
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Main({state}) {

    const [currInput, setCurrInput] = useState("") // Get our current input from the user

    const { loading, setLoading } = useState(false)

    const navigate = useNavigate(); // Navigation 
    
    // Collect all of our prop data
    const setAgeData = state.setAgeData 
    const setGenderData = state.setGenderData
    const setNatData = state.setNatData


    // Fetch age data
    const fetchAge = () => {
        let url = `https://api.agify.io/?name=${currInput}`
        fetch(url)
            .then(response => response.json())
            .then(data => setAgeData(data));
    }

    // Fetch gender data
    const fetchGender = () =>{
        let url = `https://api.genderize.io/?name=${currInput}`
        fetch(url)
            .then(response => response.json())
            .then(data => setGenderData(data));
    }


    // Fetch nationality data
    const fetchNationality = () =>{
        let url = `https://api.nationalize.io?name=${currInput}`
        fetch(url)
            .then(response => response.json())
            .then(data => setNatData(data))
            .finally(() => navigate("/results"))
    }

    const getData = () => {
        fetchAge()
        fetchGender()
        fetchNationality()
    }

    return (
        <div>
            <div className="has-text-centered">
                <div className="title is-2">Name API</div>
                <div className="subtitle is-6">Return predicted information</div>
                <div className="block"></div>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter a name here"
                    value={currInput}
                    onChange={(e) => (setCurrInput(e.target.value.trim()))} />
                <div className="block"></div>
                <button onClick={() => getData()} className="button is-halfwidth has-text-centered">Fetch</button>
            </div>
        </div>
    )
}

