import "./App.css"

export default function Card(props) {
    return (
        <div className='Card'>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    )
};