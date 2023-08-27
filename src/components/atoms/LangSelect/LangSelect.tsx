import { useState } from "react";
import { languages } from "./language";
import { useTranslation } from "react-i18next";

const LangSelect = () => {
  const options = languages.map((language) => {
    return (
      <option value={language.code} key={language.code}>
        {language.name}
      </option>
    );
  });
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const onChange = (e: any) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLanguage(e.target.value);
  };

  return (
    <div className="w-full flex justify-end pt-5 pr-5">
      <select value={currentLanguage} onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

export default LangSelect;
