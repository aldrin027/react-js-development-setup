import React from 'react';

import OneComponent from './component/OneComponent';

const App = () => {
	return (
		<>
			<h1>React Page</h1>
			<OneComponent
				style={{ width: 200, height: 200, backgroundColor: 'blue' }}
			>
				<button>Button 1</button>
				<button>Button 2</button>
				<button>Button 3</button>
				<button>Button 4</button>
			</OneComponent>
		</>
	);
};

export default App;
