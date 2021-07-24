import { FaTimes } from 'react-icons/fa'

const PropertyDetails = ({ property, onDelete }) => {
    return (
        <div className='task' >
            <h3>{property.name} <FaTimes style={{ color: 'red' }} onClick={() => onDelete(property.id)} /></h3>
            <p>{property.cost}</p>
            <p>{property.area}</p>
        </div >
    )
}
export default PropertyDetails