import React from 'react'
import { Layout } from 'antd';
import './Layout.css'

import Intro from '../Components/Intro/Intro'


const HOCLayout = () => {
	const { Content } = Layout;

	return (
		<>
			<Layout className='layout'>
				<Content >
					<div className="layout__content">
						<Intro/>
					</div>
				</Content>
			</Layout>
		</>
	)

}

export default HOCLayout