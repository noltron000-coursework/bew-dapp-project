# Proposal: Custom Ðapp Project

## Overview
1. [Project Repository](https://github.com/noltron000/bew-dapp-project)
1. [proposal.md](https://github.com/noltron000/bew-dapp-project/blob/master/proposal.md), [README.md](https://github.com/noltron000/bew-dapp-project/blob/master/README.md)
1. Details
  - **Token**: `ERC-721x` Why use this one...? This protocol of token is *multi-fungible*, which means an item in this blockchain can be either *fungible* or *non-fungible*. Since this is a crafting game, many of the base resources will be identical. Multiple resources must be identical. For example, maybe we need a wood material and a stone material to make a basic hammer. Multiple players can own identical stone materials, but each individual stone cannot be broken down, and can only be owned by one player. At the same time, some of our super-rare items--like golden sunglasses--are one of a kind, and so are non-fungible.
    - *Fungible*: define this...
    - *Non-Fungible*: define that...
  - **Use Case**: Justify why your project uses a blockchain...? *(1-3 sentences)*
  - **Examine**: Does the blockchain support a solution to your problem...?
  - **Description**: GAME_NAME is a crafting game. You can get materials by playing, and combine them into various items. The main crafting system revolves around building sandwiches.

## High Level Plan
| Date           | Items Due                                                                       |
|----------------|---------------------------------------------------------------------------------|
| Fri, June 14th | prettified repository, solidified ideas, cool markdown                          |
| Fri, June 21st | integrate w/ganache, environment set up, contract initialized, 1+ token working |
| Fri, June 28th | basic react setup, *discover project trajectory*                                |
| Fri, July 5th  | live frontend, can generate a token, has a basic frontend                       |
