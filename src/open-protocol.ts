import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  OpenProtocol,
  DepositAdded,
  DepositWithdrawal,
  NewDeposit,
  Liquidation,
  AddCollateral,
  MarketSwapped,
  WithdrawCollateral,
  WithdrawPartialLoan,
  NewLoan,
  LoanRepaid,
} from "../generated/OpenProtocol/OpenProtocol";
import { Deposit, Loan } from "../generated/schema";

//////////////////////////////////////////////////////////////
////////////////// DEPOSIT EVENT LOGIC ///////////////////////
//////////////////////////////////////////////////////////////

export function handleDepositAdded(event: DepositAdded): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.address = event.params.account.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.fee = new BigInt(0);
  deposit.action = "AddToDeposit";
  deposit.date = date.toString();
  deposit.timestamp = event.params.time.toI32();
  deposit.save();
}

export function handleDepositWithdrawal(event: DepositWithdrawal): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.address = event.params.account.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.fee = event.params.fee;
  deposit.action = "WithdrawDeposit";
  deposit.date = date.toString();
  deposit.timestamp = event.params.timestamp.toI32();
  deposit.save();
}

export function handleNewDeposit(event: NewDeposit): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.address = event.params.account.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.fee = new BigInt(0);
  deposit.action = "NewDeposit";
  deposit.date = date.toString();
  deposit.timestamp = event.params.time.toI32();
  deposit.save();
}

//////////////////////////////////////////////////////////////
//////////////////// LOAN EVENT LOGIC ////////////////////////
//////////////////////////////////////////////////////////////

//done
export function handleLiquidation(event: Liquidation): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.loanMarket = "";
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = new BigInt(0);
  loan.amount = event.params.amount;
  loan.market = event.params.market.toString();
  loan.collateralMarket = "";
  loan.collateralAmount = new BigInt(0);
  loan.currentMarket = "";
  loan.isSwapped = false;
  loan.repaidAmount = new BigInt(0);
  loan.feePaid = new BigInt(0);
  loan.action = "Liquidated";
  loan.date = date.toString();
  loan.timestamp = event.params.time.toI32();

  loan.save();
}

//do
export function handleAddCollateral(event: AddCollateral): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.loanMarket = "";
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = new BigInt(0);
  loan.amount = event.params.amount;
  loan.market = event.params.market.toString();
  loan.collateralMarket = "";
  loan.collateralAmount = new BigInt(0);
  loan.currentMarket = "";
  loan.isSwapped = false;
  loan.repaidAmount = new BigInt(0);
  loan.feePaid = new BigInt(0);
  loan.action = "AddCollateral";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();

  loan.save();
}

//done
export function handleMarketSwapped(event: MarketSwapped): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());


  loan.address = event.params.account.toHexString();
  loan.loanMarket = event.params.loanMarket.toString();
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = new BigInt(0);
  loan.amount = event.params.amount;
  loan.market = "";
  loan.collateralMarket = "";
  loan.collateralAmount = new BigInt(0);
  loan.currentMarket = event.params.currentMarket;
  loan.isSwapped = event.params.isSwapped;
  loan.repaidAmount = new BigInt(0);
  loan.feePaid = new BigInt(0);
  loan.action = "SwappedLoan";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();
  
  loan.save();
}

//done
export function handleWithdrawCollateral(event: WithdrawCollateral): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.loanMarket = "";
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = new BigInt(0);
  loan.amount = event.params.amount;
  loan.market = event.params.market.toString();
  loan.collateralMarket = "";
  loan.collateralAmount = new BigInt(0);
  loan.currentMarket = "";
  loan.isSwapped = false;
  loan.repaidAmount = new BigInt(0);
  loan.feePaid = new BigInt(0);
  loan.action = "WithdrawCollateral";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();

  loan.save();
}

//done
export function handleWithdrawPartialLoan(event: WithdrawPartialLoan): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.loanMarket = "";
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = new BigInt(0);
  loan.amount = event.params.amount;
  loan.market = event.params.market.toString();
  loan.collateralMarket = "";
  loan.collateralAmount = new BigInt(0);
  loan.currentMarket = "";
  loan.isSwapped = false;
  loan.repaidAmount = new BigInt(0);
  loan.feePaid = new BigInt(0);
  loan.action = "WithdrawLoan";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();

  loan.save();
}

//done
export function handleNewLoan(event: NewLoan): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.loanMarket = event.params.loanMarket.toString();
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = event.params.loanAmount;
  loan.amount = new BigInt(0);
  loan.market = "";
  loan.collateralMarket = event.params.collateralMarket.toString();
  loan.collateralAmount = event.params.collateralAmount;
  loan.currentMarket = "";
  loan.isSwapped = false;
  loan.repaidAmount = new BigInt(0);
  loan.feePaid = event.params.feePaid;
  loan.action = "NewLoan";
  loan.date = date.toString();
  loan.timestamp = event.params.time.toI32();
  
  loan.save();
}

//done
export function handleLoanRepaid(event: LoanRepaid): void {
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());
  loan.address = event.params.account.toHexString();
  loan.loanMarket = "";
  loan.commitment = event.params.commitment.toString();
  loan.loanAmount = new BigInt(0);
  loan.amount = event.params.amount;
  loan.market = event.params.market.toString();
  loan.collateralMarket = "";
  loan.collateralAmount = new BigInt(0);
  loan.currentMarket = "";
  loan.isSwapped = false;
  loan.repaidAmount = event.params.repaidAmount;
  loan.feePaid = new BigInt(0);
  loan.action = "LoanRepaid";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();
  
  loan.save();
}
