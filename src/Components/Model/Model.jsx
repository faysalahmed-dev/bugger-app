import React from 'react';
import BackDrop from '../UI/BackDrop/BackDrop';
import BurderIcon from '../../Assets/images/burger-logo.svg'
import './Model.scss';
class Model extends React.Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}
	render() {
          const { children, show, handleClick } = this.props;
		return (
			<React.Fragment>
                    <BackDrop show={show} handleClick={handleClick} />
				{/* <div className={`model ${show && 'show'}`}>{children}</div> */}
				<div className={`model ${show && 'show'}`}>
					<div className="model__burger-icon">
						<img src={BurderIcon} alt="burger-icon"/>
					</div>
					<div className="model__chart">
						{children}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Model;
