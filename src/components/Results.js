import React from "react"
import { useNavigate } from 'react-router-dom'


const Results = ({ state }) => {

    const navigate = useNavigate(null)

    const ageData = state.ageData
    const genderData = state.genderData
    const natData = state.natData

    return (
        <div className="container">
            <div className="section"></div>
            <div className="title is-primary has-text-centered">"{ageData.name}"</div>
            <div className="title has-text-centered ">Predictions</div>
            <div className="columns">
            <div className="column">
                <div className="subtitle is-primary has-text-centered has-text-weight-bold">Age: {ageData.age}</div>
                <div className="subtitle is-primary has-text-centered has-text-weight-bold">Set of: {ageData.count}</div>
            </div>
            <div className="column">
                <div className="subtitle is-primary has-text-centered has-text-weight-bold">Gender: {genderData.gender}</div>
                <div className="subtitle has-text-centered has-text-weight-bold">Probability: {genderData.probability}/1</div>
            </div>
            <div className="column">
                <div className="subtitle is-primary has-text-centered has-text-weight-bold">Nationality: {natData.country[0].country_id}</div>
                <div className="subtitle has-text-centered has-text-weight-bold">Probability: {Math.round(natData.country[0].probability * 100) / 100}/1</div>
            </div>
            </div>
            <div className="section">
                <button onClick={() => navigate("/")} className="button button is-primary is-fullwidth">Back</button>
            </div>
        </div>

    )
}

export default Results