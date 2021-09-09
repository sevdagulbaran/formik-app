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
					gender: 'female',
					hobies: [],
					country: "Turkey",
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					console.log(JSON.stringify(values, null, 2));
				}}
			>
				{({ handleSubmit, handleChange, values }) => (
					<form onSubmit={handleSubmit}>
						<label htmlFor="firstName">First Name</label>
						<input name="firstName" onChange={handleChange} />
						{/* <Field id="firstName" name="firstName" placeholder="Jane" /> */}

						<br />
						<br />

						<label htmlFor="lastName">Last Name</label>
						<input name="lastName" onChange={handleChange} />
						{/* <Field id="lastName" name="lastName" placeholder="Doe" /> */}

						<br />
						<br />


						<span>Male </span>
						<input
							name="gender"
							value="male"
							type="radio"
							onChange={handleChange}
							checked={values.gender === "male"}
						/>

						<span>Female </span>
						<input
							name="gender"
							type="radio"
							onChange={handleChange}
							checked={values.gender === "female"}
						/>


						<br />
						<br />

						<label htmlFor="email">Email</label>
						<input name="email" onChange={handleChange} />
						{/* <Field
						id="email"
						name="email"
						placeholder="jane@acme.com"
						type="email"
					/> */}

						<br />
						<br />

						<button type="submit">Submit</button>

						<br />
						<br />

						<div>
							<input
								type="checkbox"
								name="hobies"
								value="Football"
								onChange={handleChange}
							/>
							Football
						</div>

						<div>
							<input
								type="checkbox"
								name="hobies"
								value="Cinema"
								onChange={handleChange}
							/>
							Cinema
						</div>

						<div>
							<input
								type="checkbox"
								name="hobies"
								value="Photography"
								onChange={handleChange}
							/>
							Photography
						</div>

						<br />
						<br />

						<select
							name="country"
							value={values.country}
							onChange={handleChange}
						>
							<option value="turkey">Turkey</option>
							<option value="england">England</option>
							<option value="usa">USA</option>
						</select>

						<br />
						<br />
						<code>{JSON.stringify(values)} </code>

					</form>
				)
				}
			</Formik>
		</div >
	);
}
export default App;
