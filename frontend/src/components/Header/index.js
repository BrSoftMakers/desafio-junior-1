import React from 'react';

import logo from '../../images/logo-petshop.png';

import * as S from './styles';

const Header = () => {
    return (
        <S.Wrapper>
            <S.Title>
                <h1>Sublime Petshop</h1>
            </S.Title>
            <S.Logo>
                <img src={logo} alt="Logo" />
            </S.Logo>
        </S.Wrapper>
    );
};

export default Header;
