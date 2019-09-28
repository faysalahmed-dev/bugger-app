import React, {useState,useEffect} from 'react';
import Model from '../../Components/Model/Model';
import ErrorMeg from '../../Util/ErrorMes'

const withErrorHadler = (WrapperComponent, axios) => {
	return props => {
		const [error,setError] = useState(null)
		const reqInter = axios.interceptors.request.use((res) => {
			setError(null);
			return res;
		});
		const resInter = axios.interceptors.response.use((res) => res,
			(error) => setError(error)
		);
	
		useEffect(() => {
			return () => {
				axios.interceptors.request.eject(reqInter)
				axios.interceptors.request.eject(resInter)
			};
		}, [reqInter,resInter])
		

		const handleClick = () => setError(null)

		return (
			<React.Fragment>
				<Model show={error} handleClick={handleClick}>
					<ErrorMeg />
				</Model>
				<WrapperComponent {...props} />
			</React.Fragment>
		);
	};
};
export default withErrorHadler;
