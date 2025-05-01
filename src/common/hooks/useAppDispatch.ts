import {useDispatch} from "react-redux";
import {Dispatch} from "../../app/store.ts";

export const useAppDispatch = useDispatch.withTypes<Dispatch>()