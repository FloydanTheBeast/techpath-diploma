import React from 'react';

import { SegmentedControl, SegmentedControlItem } from '@mantine/core';
import { IconLayoutGrid, IconTable } from '@tabler/icons-react';

import { DataViewType } from './constants';

const SWITCH_ITEMS: SegmentedControlItem[] = [
  {
    value: DataViewType.Table,
    label: <IconTable size="1rem" />,
  },
  {
    value: DataViewType.Grid,
    label: <IconLayoutGrid size="1rem" />,
  },
];

type DataViewSwitchProps = {
  value: DataViewType;
  onChange: (value: DataViewType) => void;
};

export const DataViewSwitch: React.FC<DataViewSwitchProps> = ({ value, onChange }) => {
  return <SegmentedControl size="sm" data={SWITCH_ITEMS} value={value} onChange={onChange} />;
};
