import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../favoritesSlice";
import * as userActions from "../../store/user/userActions"

const rootActions = {//прокидываем все экшены
  ...actions,//из favoritesSlice
  ...userActions//импортим сразу все из userActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
