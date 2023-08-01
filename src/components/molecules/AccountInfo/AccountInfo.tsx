import React from "react";

const AccountInfo = () => {
  return (
    <div className="w-full h-full bg-info p-4 rounded-3xl flex justify-between p-6">
      <div className="flex flex-col items-start justify-center">
        <div className="pb-4 text-infoName font-bold text-2xl">
          Ms Barbara Lawns
        </div>
        <div className="flex flex-col items-start text-xl">
          <div>Account Number: 12345678</div>
          <div>Branch Code: 0780-809</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 justify-center">
        <div className="text-xl">Balance</div>
        <div className="text-5xl font-bold">£2,810.99</div>
      </div>
    </div>
  );
};

export default AccountInfo;
