import React from 'react'
import { Layout } from 'antd';
import './Layout.css'

import Intro from '../Pages/Intro/Intro'
import Compensar from '../Pages/Compensar/Compensar'
import Beneficios from '../Pages/Beneficios/Beneficios'



const HOCLayout = () => {
	const { Content } = Layout;

	return (
		<>
			<Layout className='layout'>
				<Content >
					<div className="layout__content">
						<Intro/>
						<Compensar/>
						<Beneficios/>
					</div>
				</Content>
			</Layout>
		</>
	)

}

export default HOCLayout