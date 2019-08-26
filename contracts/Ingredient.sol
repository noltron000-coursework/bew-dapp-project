pragma solidity ^0.5.8;

import "./TradeableERC721Token.sol";

/**
*** @title Ingredient
*** Ingredient - a contract for my non-fungible sandwich ingredients.
**/
contract Ingredient is TradeableERC721Token {

  /// @dev  this is empty on purpose
  // solium-disable no-empty-blocks
  constructor(address _proxyRegistryAddress) TradeableERC721Token("Ingredient", "SWI", _proxyRegistryAddress) public { }

  function baseTokenURI() public view returns (string memory) {
    return "https://distributed-deli.herokuapp.com";
  }
}
