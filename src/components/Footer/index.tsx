import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	font-size: 18px;
`

const NamesContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	margin-top: 10px;
	padding: 15px;
	transition: font-size 0.2s;
	&:hover{font-size: 20px}
`

function Footer()
{
	return (<Container>
				Creators
				<NamesContainer>
					<StyledLink to="https://profile.intra.42.fr/users/rben-tkh" target="_blank">rben-tkh</StyledLink>
					<StyledLink to="https://profile.intra.42.fr/users/lkurdy" target="_blank">lkurdy</StyledLink>
					<StyledLink to="https://profile.intra.42.fr/users/mabid" target="_blank">mabid</StyledLink>
					<StyledLink to="https://profile.intra.42.fr/users/aperis" target="_blank">aperis</StyledLink>
				</NamesContainer>
			</Container>);
}

export default Footer;
