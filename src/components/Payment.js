import React from 'react';

const Payment = ({ cartItems,selectedShoeImage }) => {
  const getTotalAmount = () => {
   
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', marginTop: '20px' }}>Payment</h1>
     

      <div className="payment-summary" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <table style={{ width: '60%', borderCollapse: 'collapse' }}>
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
                <td style={{
                border: '1px solid #ccc', padding: '8px'}}>
               
        
            
            <img 
            // src={selectedShoeImage}
            key={item.id}
            src={item.image}
            alt={item.name}
            style={{
               
            width:'180px',
            height:'180px',
            objectFit:'cover',
            borderRadius:'8px',
            }}
            
            />

            
          
      </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.name}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.size}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ textAlign: 'right', border: '1px solid #ccc', padding: '8px' }} colSpan={2}>
                Total Amount:
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>${getTotalAmount()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div style={{ margin: '20px' }}>
        <button
          onClick={() => alert('Payment Successful!')} // Replace with actual payment logic
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
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Payment
