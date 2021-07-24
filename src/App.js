import Header from "./components/Header";
import Properties from "./components/Properties";
import { useState, useEffect } from 'react'
import AddProperty from "./components/AddProperty";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const properties = async () => {
      const propertiesFromServer = await proper();
      setProperties(propertiesFromServer)
    }
    properties()
  }, [])

  const proper = async () => {
    const data = await fetch('http://localhost:5000/properties')

    const result = await data.json();
    return result;
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/properties/${id}`, {
      method: 'DELETE'
    })
    setProperties(properties.filter((property) => property.id !== id))
  }

  const addProperty = async (property) => {
    // const id = Math.floor(Math.random() * 100) + 1
    // const newProperty = { id, ...property }
    // setProperties([...properties, newProperty])

    const res = await fetch('http://localhost:5000/properties', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(property),
    })

    const data = await res.json()
    setProperties([...properties, data])

  }

  return (
    <div className="container">
      <Header />
      <AddProperty onAdd={addProperty} />
      {properties.length > 0 ? <Properties properties={properties} onDelete={onDelete} /> : 'No Property to Show'}
    </div>
  );
}

export default App;
