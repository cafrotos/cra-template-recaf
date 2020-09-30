import { useDispatch } from "react-redux";
import { TFunction } from "types";

export const wrapDispatch = <Actions, R>(actions: Actions) => () => {
  const dispatch = useDispatch();
  return (fns: TFunction<Actions, R>) => {
    dispatch(fns(actions))
  }
}