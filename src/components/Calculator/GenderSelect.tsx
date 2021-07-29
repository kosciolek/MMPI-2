import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mmpiSlice } from "../../redux/mmpi";
import { getGender } from "../../redux/mmpi/selectors";
import { Select } from "../Select";
import { Option } from "../Select/Option";

export const GenderSelect = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const gender = useAppSelector(getGender);

  return (
    <Select
      value={gender}
      onChange={(value) => dispatch(mmpiSlice.actions.setGender(value))}
      label={t("Gender")}
    >
      <Option value="male">{t("Male")}</Option>
      <Option value="female">{t("Female")}</Option>
    </Select>
  );
};
