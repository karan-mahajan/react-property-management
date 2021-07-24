import { FaTimes } from 'react-icons/fa'

const PropertyDetails = ({ property, onDelete }) => {
    return (
        <div className='task' >
            <h3>{property.name} <FaTimes style={{ color: 'red' }} onClick={() => onDelete(property.id)} /></h3>
            <p>{property.size}</p>
            <p>{property.description}</p>
        </div >
    )
}
export default PropertyDetails