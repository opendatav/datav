import { sharedSingleStatPanelChangedHandler } from 'src/packages/datav-core/src';
import { PanelPlugin } from 'src/packages/datav-core/src';
import { BarGaugePanel } from './BarGaugePanel';
import { BarGaugeOptions, displayModes } from './types';
import { addStandardDataReduceOptions } from '../stat/types';

export const plugin = new PanelPlugin<BarGaugeOptions>(BarGaugePanel)
  .useFieldConfig()
  .setPanelOptions(builder => {
    addStandardDataReduceOptions(builder);
    builder
      .addRadio({
        path: 'displayMode',
        name: 'Display mode',
        settings: {
          options: displayModes,
        },
        defaultValue: 'gradient',
      })
      .addBooleanSwitch({
        path: 'showUnfilled',
        name: 'Show unfilled area',
        description: 'When enabled renders the unfilled region as gray',
        defaultValue: true,
        showIf: (options: BarGaugeOptions) => options.displayMode !== 'lcd',
      });
  })
  .setPanelChangeHandler(sharedSingleStatPanelChangedHandler)
