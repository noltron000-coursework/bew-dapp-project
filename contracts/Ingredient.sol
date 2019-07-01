pragma solidity ^0.5.8;

import "./TradeableERC721Token.sol";

/**
*** @title Ingredient
*** Ingredient - a contract for my non-fungible sandwich ingredients.
**/
contract Ingredient is TradeableERC721Token {

  constructor(address _proxyRegistryAddress) TradeableERC721Token("Ingredient", "SWI", _proxyRegistryAddress) public {
    // TODO:
    // why is this constructor empty?
  }
}
