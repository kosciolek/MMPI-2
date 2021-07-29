import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { ViewMode } from "../../mmpi-2/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mmpiSlice } from "../../redux/mmpi";
import { getViewMode } from "../../redux/mmpi/selectors";
import { Select } from "../Select";
import { Option } from "../Select/Option";

export const ViewModeSelect = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const changeMode = (mode: ViewMode) => dispatch(mmpiSlice.actions.setViewMode(mode));
  const mode = useAppSelector(getViewMode);

  return (
    <Select label="View mode" value={mode} onChange={(val) => changeMode(val)}>
      <Option value="k">{t("K-corrected")}</Option>
      <Option value="raw">{t("Raw")}</Option>
      <Option value="ten">{t("Ten")}</Option>
    </Select>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(p) => p.theme.colors.primary100};
  padding: 8px;
`;
