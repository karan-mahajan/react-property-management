import Header from "./components/Header";
import Properties from "./components/Properties";
import { useState } from 'react'
import AddProperty from "./components/AddProperty";

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Health Department",
      size: 1234,
      description: 'Testing 1'
    },
    {
      id: 2,
      name: "Sport Complex",
      size: 5000,
      description: 'Testing 1'
    },
    {
      id: 3,
      name: "Shopping Mall",
      size: 4500,
      description: 'Testing 1'
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
