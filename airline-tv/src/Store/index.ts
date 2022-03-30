import { TypedUseSelectorHook, useSelector } from "react-redux";
import EpisodeReducer from "./Reducer";
import { applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { StoreState } from "./StoreState";

export const store = createStore(
    EpisodeReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const useTypedSelector: TypedUseSelectorHook <StoreState> = useSelector;