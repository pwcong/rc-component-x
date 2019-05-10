import presets from './presets';
import { OpaqueConfig, SpringHelperConfig } from './types';

const defaultConfig = {
  ...presets.noWobble,
  precision: 0.01
};

export default function spring(
  val: number,
  config?: SpringHelperConfig
): OpaqueConfig {
  return { ...defaultConfig, ...config, val };
}
