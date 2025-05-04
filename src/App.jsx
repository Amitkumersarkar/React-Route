
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateForm from './components/StateForm/StateForm'
// import SimpleForm from './components/SimpleForm/SimpleForm';
function App() {
  // const handleSignUpSubmit = data => {
  //   // e.preventDefault();
  //   console.log('sign up data', data);
  // }
  // const handleUpdateProfile = data => {
  //   // e.preventDefault();
  //   console.log('update profile', data);
  // }
  return (
    <>
      {/* <div>
        <h2>This is a Form section</h2>
      </div> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm> */}

      <GrandPa></GrandPa>
    </>
  )
}

export default App
