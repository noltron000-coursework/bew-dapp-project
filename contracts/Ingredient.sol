pragma solidity ^0.5.8;

import "node_modules/erc721x/contracts/Core/ERC721X/ERC721XToken.sol";
import "node_modules/erc721x/contracts/Libraries/ObjectsLib.sol";

/**
 * @title Common tier sandwich ingredients
 */
contract Ingredient is ERC721XToken, Ownable {

  // constructor (string memory name, string memory symbol) public {
  //   name = "Common";
  //   symbol = "COM";
  // }
  
  mapping (uint=>uint8) tokenToIndividualSupply;
  
  function individualSupply(uint _tokenId) {
    return tokenToIndividualSupply[_tokenId];
  }

  function mintToken(uint _tokenId, uint8 _supply) public onlyOwner {
    require(!exists(_tokenId), "Error: Token already exists");
    _mint(_tokenId, msg.sender, _supply);
    tokenIdToIndividualSupply[_tokenId] = _supply;
  }
}
