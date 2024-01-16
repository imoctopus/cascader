/* eslint-disable no-console */
import React, { useState } from 'react';
import Cascader, { CascaderProps } from '../src';
import '../assets/index.less';

const generateVirtualOptions = (name: string): CascaderProps['options'] => {
  return Array.from({ length: 1000 }, (_, i) => ({
    label: `${name} - ${i + 1}`,
    value: i + 1,
  }));
};

const options = generateVirtualOptions('A');
options[0].children = generateVirtualOptions('B');
options[0].children[0].children = generateVirtualOptions('C');

const Demo = () => {
  const [inputValue, setInputValue] = useState();

  const onChange = (_, selectedOptions) => {
    setInputValue(selectedOptions.map(o => o.label).join(', '));
  };

  return (
    <Cascader expandTrigger="hover" options={options} onChange={onChange}>
      <input placeholder="please select" value={inputValue} readOnly />
    </Cascader>
  );
};

export default Demo;
