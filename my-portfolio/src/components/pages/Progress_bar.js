import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 10
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'right',
		
	}
	
	// const progresstext = {
	// 	padding: 10,
	// 	color: 'white',
	// 	fontWeight: 900
	// }
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		{/* <span style={progresstext}>{`${text}`}</span> */}
	</div>
	</div>
	)
}

export default Progress_bar;
