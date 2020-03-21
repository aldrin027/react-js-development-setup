import React from 'react';
import PropTypes from 'prop-types';

const OneComponent = props => {
	const { children, ...otherProps } = props;

	return <div {...otherProps}>{children}</div>;
};
OneComponent.propTypes = {
	children: PropTypes.any,
	data: PropTypes.any
};
export default OneComponent;
