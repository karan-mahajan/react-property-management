import { useState } from "react"

const AddProperty = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [area, setArea] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name || !cost || !area) {
            alert('Please Enter all the values')
            return
        }
        setArea('')
        setCost('')
        setName('')
        onAdd({ name, cost, area })
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Property Name</label>
                <input value={name} type='text' placeholder='Property Name' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Property Cost</label>
                <input value={cost} type='number' onChange={(e) => setCost(e.target.value)} placeholder='Property Cost'></input>
            </div>
            <div className='form-control'>
                <label>Property Area</label>
                <input value={area} type='text' onChange={(e) => setArea(e.target.value)} placeholder='Property Area'></input>
            </div>
            <input type='submit' value='Add Property' className='btn btn-block'></input>
        </form>
    )
}
export default AddProperty