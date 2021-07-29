import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import { getAnswersPerPage } from "../../../redux/ui/selectors";
import { Select } from "../../Select";
import { Option } from "../../Select/Option";

export const AnswersPerPageSelect = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const answersPerPage = useAppSelector(getAnswersPerPage);
  const change = (count: number) => dispatch(uiSlice.actions.setAnswersPerPage(count));

  return (
    <Select label={t("Answers per page")} value={answersPerPage} onChange={(val) => change(val)}>
      <Option value={25}>25</Option>
      <Option value={50}>50</Option>
      <Option value={100}>100</Option>
    </Select>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(p) => p.theme.colors.primary100};
  padding: 8px;
`;
