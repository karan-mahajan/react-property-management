import { useState } from "react"

const AddProperty = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name || !size || !description) {
            alert('Please Enter all the values')
            return
        }
        setDescription('')
        setSize('')
        setName('')
        onAdd({ name, size, description })
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Property Name</label>
                <input value={name} type='text' placeholder='Property Name' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Property Size</label>
                <input value={size} type='text' onChange={(e) => setSize(e.target.value)} placeholder='Property Size'></input>
            </div>
            <div className='form-control'>
                <label>Property Description</label>
                <input value={description} type='text' onChange={(e) => setDescription(e.target.value)} placeholder='Property Description'></input>
            </div>
            <input type='submit' value='Add Property' className='btn btn-block'></input>
        </form>
    )
}
export default AddProperty