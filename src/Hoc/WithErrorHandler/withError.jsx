import React from 'react';
import Model from '../../Components/Model/Model';
import ErrorMeg from '../../Util/ErrorMes'

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
						<ErrorMeg />
					</Model>
					<WrapperComponent {...this.props} />
				</React.Fragment>
			);
		}
	};
};
export default withErrorHadler;
