import { useTranslation } from "react-i18next";

interface IHeaderProps {
  accountHolderNames: string;
  accountNumber: string;
  bankCode: string;
  balance: string;
}

const AccountDetails: React.FC<IHeaderProps> = ({
  accountHolderNames,
  accountNumber,
  bankCode,
}) => {
  const { t } = useTranslation();
  return (
    <div className="col-end-2 flex flex-col gap-5">
      <div className="text-infoName text-2xl font-bold">
        {accountHolderNames}
      </div>
      <div className="flex flex-col text-xl">
        <div>
          {t("account_number")}: {accountNumber}
        </div>
        <div>
          {t("branch_code")}: {bankCode}
        </div>
      </div>
    </div>
  );
};

const Balance: React.FC<{ balance: string }> = ({ balance }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between pt-4 sm:pt-0 sm:items-end">
      <div className="text-002554 text-2xl">{t("balance")}</div>
      <div className="text-4xl xl:text-6xl">{balance}</div>
    </div>
  );
};

const Header: React.FC<{ data: IHeaderProps }> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="lg:flex mb-5 justify-between">
      <div className="justify-center flex flex-col">
        <img src="/logo.png" className="w-1/2" alt="logo" />
        <p className="text-main font-bold pt-4 text-3xl">
          {t("user_transactions")}
        </p>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <div className="bg-info rounded-3xl p-8 lg:p-10 sm:flex gap-8 justify-between">
          <AccountDetails {...data} />
          <Balance balance={data.balance} />
        </div>
      </div>
    </div>
  );
};

export default Header;
