import { useEffect, useState } from 'react';
import { Main, Title } from './classStyledComponents';

export function ClassPaladin() {
  const [values, setValues] = useState({
    class: 'Paladin',
    activeHealing: false,
    activeDamage: false,
    weakHealing: '',
    mediumHealing: '',
    strongHealing: '',
    strongHealingPotion: '',
    mediumHealingPotion: '',
    priority1: '',
    priority2: '',
    priority3: '',
    priority4: '',
    priority5: '',
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div>
      <Title>
      Paladin
      </Title>
      <Main>
        <div id="Healing">
          <div>Healing <input type="checkbox" name="activeHealing" checked={values.activeHealing} onChange={handleChange} /></div>
          <div>Spell: Weak Healing<input type="text" name="weakHealing" value={values.weakHealing} onChange={handleChange} /></div>
          <div>Spell: Medium Healing<input type="text"  name="mediumHealing" value={values.mediumHealing} onChange={handleChange} /></div>
          <div>Spell: Strong Healing<input type="text" name="strongHealing" value={values.strongHealing} onChange={handleChange}/></div>
          <div>Potion: Medium Healing<input type="text" name="mediumHealingPotion" value={values.mediumHealingPotion} onChange={handleChange} /></div>
          <div>Potion: Strong Healing<input type="text" name="strongHealingPotion" value={values.strongHealingPotion} onChange={handleChange}/></div>
        </div>
        <div id="Damage">
          <div >DPS Rotation <input type="checkbox" name="activeHealing" checked={values.activeDamage} onChange={handleChange} /></div>
          <div>Priority 1<input type="text" name='priority1' value={values.priority1} onChange={handleChange} /></div>
          <div>Priority 2<input type="text" name='priority2' value={values.priority2} onChange={handleChange} /></div>
          <div>Priority 3<input type="text" name='priority3' value={values.priority3} onChange={handleChange} /></div>
          <div>Priority 4<input type="text" name='priority4' value={values.priority4} onChange={handleChange} /></div>
          <div>Priority 5<input type="text" name='priority5' value={values.priority5} onChange={handleChange} /></div>
        </div>
    </Main>
    </div>
  )
}

