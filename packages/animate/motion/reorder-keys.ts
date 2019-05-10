import { warning } from '@rc-x/utils';

let hasWarned = false;
export default function reorderKeys() {
  warning(
    !hasWarned,
    'Motion:reorder-keys',
    "`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API."
  );
  hasWarned = true;
}
