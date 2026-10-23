
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';

import "./App.css";


const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
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
    </>




  );
}

