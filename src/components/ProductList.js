import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);  // Estado para los productos
  const [loading, setLoading] = useState(true);  // Estado de carga

  // Estructura completa de productos
  const allProducts = [
    { _id: "AcerAspire-x1", name: "Acer Aspire x1", image: require('../assets/product-pics/AcerAspire-x1.png') },
    { _id: "AcerAspire-x2", name: "Acer Aspire x2", image: require('../assets/product-pics/AcerAspire-x2.png') },
    { _id: "Alienware13-x1", name: "Alienware 13 x1", image: require('../assets/product-pics/Alienware13-x1.png') },
    { _id: "Alienware13-x2", name: "Alienware 13 x2", image: require('../assets/product-pics/Alienware13-x2.png') },
    { _id: "AmazonEchoDot-x1", name: "Amazon Echo Dot x1", image: require('../assets/product-pics/AmazonEchoDot-x1.png') },
    { _id: "AmazonEchoDot-x2", name: "Amazon Echo Dot x2", image: require('../assets/product-pics/AmazonEchoDot-x2.png') },
    { _id: "AmazonEcho-x1", name: "Amazon Echo x1", image: require('../assets/product-pics/AmazonEcho-x1.png') },
    { _id: "AmazonEcho-x2", name: "Amazon Echo x2", image: require('../assets/product-pics/AmazonEcho-x2.png') },
    { _id: "AndroidWear-x1", name: "Android Wear x1", image: require('../assets/product-pics/AndroidWear-x1.png') },
    { _id: "AndroidWear-x2", name: "Android Wear x2", image: require('../assets/product-pics/AndroidWear-x2.png') },
    { _id: "BeatsPro-x1", name: "Beats Pro x1", image: require('../assets/product-pics/BeatsPro-x1.png') },
    { _id: "BeatsPro-x2", name: "Beats Pro x2", image: require('../assets/product-pics/BeatsPro-x2.png') },
    { _id: "CanonEOS5D-x1", name: "Canon EOS 5D x1", image: require('../assets/product-pics/CanonEOS5D-x1.png') },
    { _id: "CanonEOS5D-x2", name: "Canon EOS 5D x2", image: require('../assets/product-pics/CanonEOS5D-x2.png') },
    { _id: "Chromecast-x1", name: "Chromecast x1", image: require('../assets/product-pics/Chromecast-x1.png') },
    { _id: "Chromecast-x2", name: "Chromecast x2", image: require('../assets/product-pics/Chromecast-x2.png') },
    { _id: "Dell-x1", name: "Dell x1", image: require('../assets/product-pics/Dell-x1.png') },
    { _id: "Dell-x2", name: "Dell x2", image: require('../assets/product-pics/Dell-x2.png') },
    { _id: "GoPro-x1", name: "GoPro x1", image: require('../assets/product-pics/GoPro-x1.png') },
    { _id: "GoPro-x2", name: "GoPro x2", image: require('../assets/product-pics/GoPro-x2.png') },
    { _id: "InstaxMini-x1", name: "Instax Mini x1", image: require('../assets/product-pics/InstaxMini-x1.png') },
    { _id: "InstaxMini-x2", name: "Instax Mini x2", image: require('../assets/product-pics/InstaxMini-x2.png') },
    { _id: "iPadMini-x1", name: "iPad Mini x1", image: require('../assets/product-pics/iPadMini-x1.png') },
    { _id: "iPadMini-x2", name: "iPad Mini x2", image: require('../assets/product-pics/iPadMini-x2.png') },
    { _id: "iPhone8-x1", name: "iPhone 8 x1", image: require('../assets/product-pics/iPhone8-x1.png') },
    { _id: "iPhone8-x2", name: "iPhone 8 x2", image: require('../assets/product-pics/iPhone8-x2.png') },
    { _id: "KoboAura-x1", name: "Kobo Aura x1", image: require('../assets/product-pics/KoboAura-x1.png') },
    { _id: "KoboAura-x2", name: "Kobo Aura x2", image: require('../assets/product-pics/KoboAura-x2.png') },
    { _id: "LenovoYogaBook-x1", name: "Lenovo Yoga Book x1", image: require('../assets/product-pics/LenovoYogaBook-x1.png') },
    { _id: "LenovoYogaBook-x2", name: "Lenovo Yoga Book x2", image: require('../assets/product-pics/LenovoYogaBook-x2.png') },
    { _id: "LenovoYogaTab-x1", name: "Lenovo Yoga Tab x1", image: require('../assets/product-pics/LenovoYogaTab-x1.png') },
    { _id: "LenovoYogaTab-x2", name: "Lenovo Yoga Tab x2", image: require('../assets/product-pics/LenovoYogaTab-x2.png') },
    { _id: "MacbookPro-x1", name: "Macbook Pro x1", image: require('../assets/product-pics/MacbookPro-x1.png') },
    { _id: "MacbookPro-x2", name: "Macbook Pro x2", image: require('../assets/product-pics/MacbookPro-x2.png') },
    { _id: "MarshallMajorll-x1", name: "Marshall Major ll x1", image: require('../assets/product-pics/MarshallMajorll-x1.png') },
    { _id: "MarshallMajorll-x2", name: "Marshall Major ll x2", image: require('../assets/product-pics/MarshallMajorll-x2.png') },
    { _id: "MotoG5-x1", name: "Moto G5 x1", image: require('../assets/product-pics/MotoG5-x1.png') },
    { _id: "MotoG5-x2", name: "Moto G5 x2", image: require('../assets/product-pics/MotoG5-x2.png') },
    { _id: "NikonD300-x1", name: "Nikon D300 x1", image: require('../assets/product-pics/NikonD300-x1.png') },
    { _id: "NikonD300-x2", name: "Nikon D300 x2", image: require('../assets/product-pics/NikonD300-x2.png') },
    { _id: "Nintendo3DS-x1", name: "Nintendo 3DS x1", image: require('../assets/product-pics/Nintendo3DS-x1.png') },
    { _id: "Nintendo3DS-x2", name: "Nintendo 3DS x2", image: require('../assets/product-pics/Nintendo3DS-x2.png') },
    { _id: "ParrotAR-x1", name: "Parrot AR x1", image: require('../assets/product-pics/ParrotAR-x1.png') },
    { _id: "ParrotAR-x2", name: "Parrot AR x2", image: require('../assets/product-pics/ParrotAR-x2.png') },
    { _id: "Phantom2-x1", name: "Phantom 2 x1", image: require('../assets/product-pics/Phantom2-x1.png') },
    { _id: "Phantom2-x2", name: "Phantom 2 x2", image: require('../assets/product-pics/Phantom2-x2.png') }
  ];

  // Función para cargar los productos
  useEffect(() => {
    setProducts(allProducts);
    setLoading(false); // Una vez cargados los productos, cambia el estado de loading
  }, []);

  // Si los productos están cargando
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <div key={product._id} style={{ margin: '20px', textAlign: 'center' }}>
          <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
          <h4>{product.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
