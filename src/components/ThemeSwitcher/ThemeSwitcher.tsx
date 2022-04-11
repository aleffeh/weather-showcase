import React, {useContext} from 'react';
import {Container, DarkModeIcon, IconContainer, LightModeIcon} from './styles';
import {AppThemeContext} from '@context/AppTheme';

export const ThemeSwitcher: React.FC = () => {
  const {toggleTheme} = useContext(AppThemeContext);

  return (
    <Container onPress={() => toggleTheme()}>
      <IconContainer lightIcon>
        <LightModeIcon />
      </IconContainer>
      <IconContainer>
        <DarkModeIcon />
      </IconContainer>
    </Container>
  );
};
