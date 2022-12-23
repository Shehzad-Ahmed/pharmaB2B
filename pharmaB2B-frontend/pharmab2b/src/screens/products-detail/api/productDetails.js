import axios from 'axios';

const getProductDetails = async (id) => {
  const response = await axios.get(`/api/inventory/products/${id}`);
  const data = response.data;
  return {
    id: data.id,
    name: data.name,
    manufacturer: {
      name: data.manufacturer.name,
      description: data.manufacturer.description,
    },
    type: data.type,
    packagingType: data.packaging_type,
    unitsPerPackage: data.units_per_package,
    availablePackages: data.available_packages,
    price: data.price,
    gstApplicable: data.gst_applicable,
    gst: data.gst,
    imageUrl: data.image_url,
  };
};

export default getProductDetails;
