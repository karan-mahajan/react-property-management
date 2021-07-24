import PropertyDetails from "./PropertyDetails";

const Properties = ({ properties, onDelete }) => {
  return (
    <>
      {properties.map((property) => (
        <PropertyDetails key={property.id} property={property} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Properties;
