
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';

import "./App.css";

/* For the UserProfileCard */
const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
  
};

/* For the ProductDisplay */

const product = {
  id: '1',
  name: 'Wireless HeadPhones',
  price: 199,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

export default function App() {
  return (
    <>
      {/* For the AlertBox */}
      <div>

        <h2>Alert Box Examples</h2>
        <AlertBox
          type="success"
          message="Saved Successfully"
          onClose={() => alert("Alert closed!")}
        >
          <strong>Your changes have been saved</strong>


        </AlertBox>
      </div>

      {/*  For the User Profile  */}
      <div>
        <h2> User Profile Example</h2>

        <UserProfileCard user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)} >
          <div> Last login: 2 hours ago </div>
        </UserProfileCard>
      </div>

      {/*  For the Product Profile  */}
      <div>
        <h2> Product Profile Example</h2>

        <ProductDisplay product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) => alert(`Added product ${productId} to cart`)} >
        </ProductDisplay >
      </div >
    </>






  );
}

