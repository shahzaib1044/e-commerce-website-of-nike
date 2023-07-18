
import React, { useState } from 'react';
import axios from 'axios';

const PaymentSummaryPage = ({ cartItems }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !country || !city) {
      setError('Please fill in all the required fields.');
    } else {
      try {
        console.log('Submitting registration:', name, country, city);
  
        const response = await axios.post('http://localhost:3001/PaymentSummaryPage', {
          name,
          country,
          city,
          cartItems: cartItems.map((item) => ({
            image: item.image,
            name: item.name,
            size: item.size,
            price: item.price,
          })),
        });
  
        console.log('Order placed successfully:', response.data);
  
        setSent(true);
        setName('');
        setCountry('');
        setCity('');
      } catch (error) {
        console.error('Failed to place order:', error);
        // Handle error
      }
    }
  };
  
  return (
    <div>
      <h1>Payment Summary</h1>
      {sent ? (
        <p>Thank you for Placing Order! You will receive Confirmation Shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={handleChangeName}
            style={{
              marginRight: '29%',
              borderRadius: '10px',
              width: '30%',
              height: '30px',
              fontSize: '26px',
              marginTop: '30px',
              marginBottom: '1px',
            }}
          />
          <input
            type="text"
            value={country}
            placeholder="Country"
            onChange={handleChangeCountry}
            style={{
              marginRight: '29%',
              borderRadius: '10px',
              width: '30%',
              height: '30px',
              fontSize: '26px',
              marginTop: '20px',
              marginBottom: '1px',
            }}
          />
          <input
            type="text"
            value={city}
            placeholder="City"
            onChange={handleChangeCity}
            style={{
              marginRight: '29%',
              borderRadius: '10px',
              width: '30%',
              height: '30px',
              fontSize: '26px',
              marginTop: '20px',
              marginBottom: '30px',
            }}
          />

          <table style={{ marginLeft: '20%', width: '60%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Pic</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Item</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Size</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '180px',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.size}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    ${item.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  style={{ textAlign: 'right', border: '1px solid #ccc', padding: '8px' }}
                  colSpan={3}
                >
                  Total Amount:
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>${getTotalAmount()}</td>
              </tr>
            </tfoot>
          </table>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              backgroundColor: '#e50914',
              color: 'white',
              border: 'none',
              borderRadius: '0.65rem',
              cursor: 'pointer',
            }}
          >
            Place Order
          </button>
        </form>
      )}

      {error && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '4px',
            }}
          >
            <p>{error}</p>
            <button
              style={{ padding: '8px 16px', borderRadius: '3px' }}
              onClick={() => setError('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSummaryPage;
