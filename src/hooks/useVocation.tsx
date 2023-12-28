import { useState, useEffect } from 'react';
import { ClassPaladin } from '../components/ClassPaladin';
import { ClassDruid } from '../components/ClassDruid';
import { ClassSorcerer } from '../components/ClassSorcerer';
import { ClassKnight } from '../components/ClassKnight';

export function useVocation(userVocation: string) {
  const [VocationComponent, setVocationComponent] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    switch(userVocation) {
      case 'Paladin':
        setVocationComponent(<ClassPaladin />);
        break;
      case 'Druid':
        setVocationComponent(<ClassDruid />);
        break;
      case 'Sorcerer':
        setVocationComponent(<ClassSorcerer />);
        break;
      case 'Knight':
        setVocationComponent(<ClassKnight />);
        break;
      default:
        setVocationComponent(<></>);
    }
  }, [userVocation]);

  return VocationComponent;
}