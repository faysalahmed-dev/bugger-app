import React from 'react';
import Model from '../../Components/Model/Model';

const STYLES = {
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};
const ERROR_TEXT = {
     fontSize:'2rem',
     width: "90%",
     margin:'auto',
     lineHeight:'1.7',
     textAlign:"center",
     color:'rgba(0,0,0,.7)',
     textTransform:'capitalize'
}

const withErrorHadler = (WrapperComponent, axios) => {
	return class extends React.Component {
		state = {
			error: null
		};
		componentDidMount() {
			axios.interceptors.request.use((res) => {
				this.setState({ error: null });
				return res;
			});
			axios.interceptors.response.use(
				(res) => res,
				(error) => {
					this.setState({ error });
				}
			);
		}
		handleClick = () => {
               this.setState({ error: null })
          };

		render() {
			return (
				<React.Fragment>
					<Model show={this.state.error} handleClick={this.handleClick}>
						<div style={STYLES}>
                                   <h2 style={ERROR_TEXT}>Some thing went wrong please check your network</h2>
						</div>
					</Model>
					<WrapperComponent {...this.props} />
				</React.Fragment>
			);
		}
	};
};
export default withErrorHadler;
