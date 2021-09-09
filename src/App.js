import React from 'react';
import { Formik, } from 'formik';
import './App.css';


function App() {
	return (
		<div>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					console.log(JSON.stringify(values, null, 2));
				}}
			>
			{({ handleSubmit , handleChange})=>(
					<form onSubmit= {handleSubmit}>
					<label htmlFor="firstName">First Name</label>
					<input id="firstName" onChange={ handleChange}/>
					{/* <Field id="firstName" name="firstName" placeholder="Jane" /> */}

					<br />
					<br />

					<label htmlFor="lastName">Last Name</label>
					<input id="lastName" onChange={ handleChange}/>
					{/* <Field id="lastName" name="lastName" placeholder="Doe" /> */}

					<br />
					<br />

					<label htmlFor="email">Email</label>
					<input id="email" onChange={ handleChange}/>
					{/* <Field
						id="email"
						name="email"
						placeholder="jane@acme.com"
						type="email"
					/> */}
					<br />
					<br />
					<button type="submit">Submit</button>
				</form>
			)
			}
			</Formik>
		</div>
	);
}
export default App;
