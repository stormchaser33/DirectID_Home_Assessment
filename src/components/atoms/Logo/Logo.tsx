import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <img src="/logo.png" className="w-72" />
        <p className="text-main text-4xl font-bold pt-5">
          {t("user_transactions")}
        </p>
      </div>
    </>
  );
};

export default Logo;
