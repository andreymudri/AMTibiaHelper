import { useState } from 'react';
import { Main, Title } from './classStyledComponents';

export function ClassPaladin() {
  const [values, setValues] = useState({
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Title>
      Paladin
      </Title>
      <Main>
        <div id="Healing">
          <div>Healing</div>
          <div>Spell: Weak Healing<input type="text" name="weakHealing" value={values.weakHealing} onChange={handleChange} /></div>
          <div>Spell: Medium Healing<input type="text"  name="mediumHealing" value={values.mediumHealing} onChange={handleChange} /></div>
          <div>Spell: Strong Healing<input type="text" name="strongHealing" value={values.strongHealing} onChange={handleChange}/></div>
          <div>Potion: Medium Healing<input type="text" name="mediumHealingPotion" value={values.mediumHealingPotion} onChange={handleChange} /></div>
          <div>Potion: Strong Healing<input type="text" name="strongHealingPotion" value={values.strongHealingPotion} onChange={handleChange}/></div>
        </div>
        <div id="Damage">
          <div >DPS Rotation</div>
          <div>Priority 1<input type="text" value="" /></div>
          <div>Priority 2<input type="text" value="" /></div>
          <div>Priority 3<input type="text" value="" /></div>
          <div>Priority 4<input type="text" value="" /></div>
          <div>Priority 5<input type="text" value="" /></div>
        </div>
    </Main>
    </div>
  )
}

