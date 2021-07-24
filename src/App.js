import Header from "./components/Header";
import Properties from "./components/Properties";
import { useState } from 'react'
import AddProperty from "./components/AddProperty";

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Health Department",
      cost: 4000000,
      area: "Delhi",
    },
    {
      id: 2,
      name: "Sport Complex",
      cost: 8000000,
      area: "Mumbai",
    },
    {
      id: 3,
      name: "Shopping Mall",
      cost: 40000000,
      area: "Punjab",
    },
  ]);

  const onDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id))
  }

  const addProperty = (property) => {
    setProperties([...properties, property])
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
