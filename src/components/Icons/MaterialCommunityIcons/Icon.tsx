import {default as MaterialIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

import React from 'react';
import {ColorValue} from 'react-native';

interface TypedIconProps {
  iconName: string | keyof typeof MaterialCommunityIconsGlyphs;
  iconColor?: ColorValue | number;
  iconSize?: number;
}

const Icon: React.FC<TypedIconProps> = props => {
  const {iconName, iconColor, iconSize} = props;

  return <MaterialIcon name={iconName} color={iconColor} size={iconSize} />;
};

export default Icon;
