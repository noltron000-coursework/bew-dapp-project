pragma solidity ^0.5.8;

import "node_modules/erc721x/contracts/Core/ERC721X/ERC721XToken.sol";
import "node_modules/erc721x/contracts/Libraries/ObjectsLib.sol";

/**
 * @title Common tier sandwich ingredients
 */
contract Ingredient is ERC721XToken, Ownable {
  
  mapping (uint=>uint8) internal tokenToIndividualSupply;
  mapping (uint=>uint) internal tokenIdtoMouldId;

  uint nftTokenIdIndex = 1000000;

  event TokenAwarded(uint indexed tokenId, address claimer, uint8 amount);

  function name() returns(string) {
    return "Some Ingredient";
  }

  function symbol() returns(string) {
    return "ING";
  }
  
  function individualSupply(uint _tokenId) {
    return tokenToIndividualSupply[_tokenId];
  }

  function batchMintTokens(uint[] _tokenIds, uint8[] _tokenSupplies) external onlyOwner {
    for (uint i = 0; i < _tokenIds.length; i++) {
      mintToken(_tokenIds[i], _tokenSupplies[i]);
    }
  }
  function mintToken(uint _tokenId, uint8 _supply) public onlyOwner {
    require(!exists(_tokenId), "Error: Token already exists");
    _mint(_tokenId, msg.sender, _supply);
    tokenIdToIndividualSupply[_tokenId] = _supply;
  }

  function awardToken(uint _tokenId, address _to, uint8 _amount) public onlyOwner {
    require(exists(_tokenId), "That token does not exist!");

    if (individualSupply[_tokenId] > 0) {
      require(_amount <= balanceOf(_from, _tokenId), "Not enough tokens to send!");
      _updateTokenBalance(msg.sender, _tokenId, _amount, ObjectLib.Operations.SUB);
    }
    
    _updateTokenBalance(_to, _tokenId, _amount, ObjectLib.Operations.ADD);
    emit TokenAwarded(_tokenId, _to, _amount);
  }

  function convertToNFT(uint _tokenId, uint8 amount) public {
    require(tokenType[_tokenId] == FT);
    require(_amount <= balanceOf(msg.sender, _tokenId), "You do not own enough tokens");
    _updateTokenBalance(msg.sender, _tokenId, _amount, ObjectLib.Operations.SUB);
    for (uint i = 0; i < _amount; i++) {
      _mint(nftTokenIdIndex, msg.sender);
      nftTokenIdToMouldId[nftTokenIdIndex] = _tokenId;
      nftTokenIdIndex++;
    }
  }

  function convertToFT(uint _tokenId) public {
    require(tokenType[_tokenId] == NFT);
    require(ownerOf(_tokenId) == msg.sender, "You do not own this token");
    _updateTokenBalance(msg.sender, _tokenId, 0, ObjectLib.Operations.REPLACE);
    _updateTokenBalance(msg.sender, nftTokenIdToMouldId[_tokenId], 1, ObjectLib.Operations.ADD);
    emit TransferWithQuantity(address(this), msg.sender, nftTokenIdToMouldId[_tokenId], 1);
  }
}
