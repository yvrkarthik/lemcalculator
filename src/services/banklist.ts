interface IBankDetails {
  name: string;
  bankWebsite: string;
  bankLvrLink: string;
  fee: ILvrFee;
}

export interface IBankData {
  bankData: IBankDetails[];
}
interface ILvrFee {
  loanOver95: number;
  loanBetween90To95: number;
  loanBetween85to90: number;
  loanBetween80to85: number;
}

const t1: IBankData = {
  bankData: [
    {
      name: "BNZ",
      bankWebsite: "https://www.bnz.co.nz",
      bankLvrLink: "https://www.bnz.co.nz",
      fee: {
        loanOver95: 1.15,
        loanBetween90To95: 1.0,
        loanBetween85to90: 0.75,
        loanBetween80to85: 0.35
      }
    },
    {
      name: "ASB",
      bankWebsite: "https://www.anz.co.nz",
      bankLvrLink:
        "https://www.asb.co.nz/home-loans-mortgages/interest-rates-fees.html",
      fee: {
        loanOver95: 1.5,
        loanBetween90To95: 1.3,
        loanBetween85to90: 0.75,
        loanBetween80to85: 0.3
      }
    },
    {
      name: "ANZ",
      bankWebsite: "https://www.asb.co.nz",
      bankLvrLink:
        "https://anz.co.nz/auxiliary/rates-fees-agreements/home-loans/#Fees",
      fee: {
        loanOver95: 2.0,
        loanBetween90To95: 2.0,
        loanBetween85to90: 0.75,
        loanBetween80to85: 0.25
      }
    },
    {
      name: "Westpac",
      bankWebsite: "https://www.westpac.co.nz",
      bankLvrLink: "https://www.westpac.co.nz",
      fee: {
        loanOver95: 1.15,
        loanBetween90To95: 1.0,
        loanBetween85to90: 0.75,
        loanBetween80to85: 0.35
      }
    },
    {
      name: "Kiwibank",
      bankWebsite: "https://www.westpac.co.nz",
      bankLvrLink: "https://www.westpac.co.nz",
      fee: {
        loanOver95: 1.15,
        loanBetween90To95: 1.0,
        loanBetween85to90: 0.75,
        loanBetween80to85: 0.35
      }
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
export function getBankDetails() {
  return t1;
}
export { getBanks, IBankDetails };
