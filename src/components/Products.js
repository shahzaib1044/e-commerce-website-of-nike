import React, { useState } from 'react';
import pic1 from './shoe1.jpeg';
import pic2 from './shoe2.jpeg';
import pic3 from './shhoe3.jpeg';
import Payment from './Payment';

import PaymentSummaryPage from './PaymentSummaryPage';

const ProductsPage = () => {
  const productsData = [
    { id: 1, name: 'Shoe 1', image: pic1, sizes: ['7', '8', '9'], price: 49.99 },
    { id: 2, name: 'Shoe 2', image: pic2, sizes: ['8', '9', '10'], price: 59.99 },
    { id: 3, name: 'Shoe 3', image: pic3, sizes: ['9', '10', '11'], price: 69.99 },
    // Add more product data...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);

  const productsPerPage = 9;
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product) => {
    const { id, name, image, price } = product;
    const size = selectedSizes[id];
    if (size) {
      const newItem = { id, name, image, size, price };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      setShowCheckout(true);
    }
  };

  const handleProceedToPayment = () => {
    setShowCheckout(false);
    setShowPaymentSummary(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', marginTop: '20px' }}>Products</h1>

      <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '250px',
              margin: '20px',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{product.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSizes[product.id] === size ? 'selected' : ''}`}
                    onClick={() => handleSizeClick(product.id, size)}
                    style={{
                      backgroundColor: selectedSizes[product.id] === size ? '#f44336' : '#fff',
                      color: selectedSizes[product.id] === size ? '#fff' : '#000',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Price: ${product.price.toFixed(2)}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
              style={{
                backgroundColor: '#f44336',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {showCheckout && cartItems.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={handleProceedToPayment}
            style={{
              backgroundColor: '#f44336',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      {showPaymentSummary && cartItems.length > 0 && (
        <PaymentSummaryPage cartItems={cartItems} />
      )}

      <div style={{ margin: '20px' }}>
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          style={{
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            marginRight: '10px',
            opacity: currentPage === 1 ? 0.5 : 1,
            pointerEvents: currentPage === 1 ? 'none' : 'auto',
          }}
        >
          Previous Page
        </button>
        <span style={{ fontSize: '14px', color: '#666' }}>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          style={{
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            marginLeft: '10px',
            opacity: currentPage === totalPages ? 0.5 : 1,
            pointerEvents: currentPage === totalPages ? 'none' : 'auto',
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;

// import PaymentSummaryPage from './PaymentSummaryPage';

// const ProductsPage = () => {
//   const productsData = [
//     { id: 1, name: 'Shoe 1', image: pic1, sizes: ['7', '8', '9'], price: 49.99 },
//     { id: 2, name: 'Shoe 2', image: pic2, sizes: ['8', '9', '10'], price: 59.99 },
//     { id: 3, name: 'Shoe 3', image: pic3, sizes: ['9', '10', '11'], price: 69.99 },
//     // Add more product data...
//   ];
// const [selectedShoeImage, setSelectedShoeImage]=useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showPaymentSummary, setShowPaymentSummary] = useState(false);

//   const productsPerPage = 9;
//   const totalPages = Math.ceil(productsData.length / productsPerPage);

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
//   };

//   const handleSizeClick = (productId, size) => {
//     setSelectedSizes((prevSelectedSizes) => ({
//       ...prevSelectedSizes,
//       [productId]: size,
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const { id, name, image, price } = product;
//     const size = selectedSizes[id];
//     if (size) {
//       const newItem = { id, name, image, size, price };
//       setCartItems((prevCartItems) => [...prevCartItems, newItem]);
//       setShowCheckout(true);
//       setSelectedShoeImage(image);
//     }
//   };

//   const handleProceedToPayment = () => {
//     setShowCheckout(false);
//     setShowPaymentSummary(true);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1 style={{ fontSize: '24px', marginTop: '20px' }}>Products</h1>

//       <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {currentProducts.map((product) => (
//           <div
//             key={product.id}
//             className="product-card"
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               width: '250px',
//               margin: '20px',
//               padding: '20px',
//               textAlign: 'center',
//               backgroundColor: '#fff',
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{
//                 width: '180px',
//                 height: '180px',
//                 objectFit: 'cover',
//                 borderRadius: '8px',
//                 marginBottom: '10px',
//               }}
//             />
//             <div style={{ marginBottom: '10px' }}>
//               <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{product.name}</h3>
//               <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className={`size-button ${selectedSizes[product.id] === size ? 'selected' : ''}`}
//                     onClick={() => handleSizeClick(product.id, size)}
//                     style={{
//                       backgroundColor: selectedSizes[product.id] === size ? '#f44336' : '#fff',
//                       color: selectedSizes[product.id] === size ? '#fff' : '#000',
//                     }}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//               <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Price: ${product.price.toFixed(2)}</p>
//             </div>
//             <button
//               className="add-to-cart"
//               onClick={() => handleAddToCart(product)} // Pass the product as an argument
//               style={{
//                 backgroundColor: '#f44336',
//                 color: '#fff',
//                 border: 'none',
//                 padding: '8px 16px',
//                 borderRadius: '4px',
//                 fontSize: '14px',
//                 cursor: 'pointer',
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {showCheckout && cartItems.length > 0 && (
       
//         <div style={{ marginBottom: '20px' }}>
//            <Payment cartItems={cartItems} selectedShoeImage={selectedShoeImage}/>
//           <button
//             onClick={handleProceedToPayment}
//             style={{
//               backgroundColor: '#f44336',
//               color: '#fff',
//               border: 'none',
//               padding: '8px 16px',
//               borderRadius: '4px',
//               fontSize: '14px',
//               cursor: 'pointer',
//             }}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}

//       <div style={{ margin: '20px' }}>
//         <button
//           onClick={goToPrevPage}
//           disabled={currentPage === 1}
//           style={{
//             backgroundColor: '#f44336',
//             color: '#fff',
//             border: 'none',
//             padding: '8px 16px',
//             borderRadius: '4px',
//             fontSize: '14px',
//             cursor: 'pointer',
//             marginRight: '10px',
//             opacity: currentPage === 1 ? 0.5 : 1,
//             pointerEvents: currentPage === 1 ? 'none' : 'auto',
//           }}
//         >
//           Previous Page
//         </button>
//         <span style={{ fontSize: '14px', color: '#666' }}>
//           {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}

//           style={{
//             backgroundColor: '#f44336',
//             color: '#fff',
//             border: 'none',
//             padding: '8px 16px',
//             borderRadius: '4px',
//             fontSize: '14px',
//             cursor: 'pointer',
//             marginLeft: '10px',
//             opacity: currentPage === totalPages ? 0.5 : 1,
//             pointerEvents: currentPage === totalPages ? 'none' : 'auto',
//           }}
//         >
//           Next Page
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage
