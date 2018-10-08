interface IBankDetails {
  name: string;
  bankWebsite: string;
  bankLvrLink: string;
}

interface IBankData {
  bankData: IBankDetails[];
}

const t1: IBankData = {
  bankData: [
    {
      name: "BNZ",
      bankWebsite: "https://www.bnz.co.nz",
      bankLvrLink: "https://www.bnz.co.nz"
    },
    {
      name: "ANZ",
      bankWebsite: "https://www.anz.co.nz",
      bankLvrLink: "https://www.anz.co.nz"
    },
    {
      name: "ASB",
      bankWebsite: "https://www.asb.co.nz",
      bankLvrLink: "https://www.asb.co.nz"
    },
    {
      name: "Westpac",
      bankWebsite: "https://www.westpac.co.nz",
      bankLvrLink: "https://www.westpac.co.nz"
    },
    {
      name: "Co-Operative Bank",
      bankWebsite: "https://www.coop.co.nz",
      bankLvrLink: "https://www.coop.co.nz"
    }
  ]
};
function getBanks() {
  const bankList: string[] = [];
  t1.bankData.map(bankName => bankList.push(bankName.name));
  return bankList.sort();
}
export function getBanksData(bankName: string) {
  return t1.bankData.filter(b => b.name === bankName);
}
export { getBanks, IBankDetails };
