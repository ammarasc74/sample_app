import * as React from 'react';
import {Theme} from '../Theme';
import Box from './Box';

interface LayoutProps {
  children: React.ReactNode;
  background?: keyof Theme['colors'];
  title?: string;
  disablePadding?: Boolean;
  isLoading?: Boolean;
  isShowBackButton?: Boolean;
  isShowSkipButton?: Boolean;
  isHome?: Boolean;
  isShowSave?: Boolean;
  onPressSkip?: any;
  onPressSave?: () => void;
}

const Layout = ({
  children,
  background = 'background',
  disablePadding,
}: LayoutProps) => {
  return (
    <Box flex={1} backgroundColor={background}>
      <Box flex={1} padding={!disablePadding ? 'xl' : 'null'} overflow="hidden">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
