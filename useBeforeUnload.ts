import { useCallback } from "react";
import {
  useBeforeUnload as _useBeforeUnload,
  unstable_usePrompt as usePrompt,
} from "react-router-dom";

export function useBeforeUnload(doBlock?: boolean) {
  _useBeforeUnload(
    useCallback(
      (e) => {
        if (doBlock) {
          e.preventDefault();
          // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
          return (e.returnValue = "");
        }
      },
      [doBlock]
    )
  );

  usePrompt({
    when: doBlock ?? false,
    message: "ページを移動しますか？",
  });
}
