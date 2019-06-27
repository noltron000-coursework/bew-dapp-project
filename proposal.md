# Proposal: Custom Ðapp Project

## Overview
1. [Project Repository](https://github.com/noltron000/bew-dapp-project)
1. [proposal.md](https://github.com/noltron000/bew-dapp-project/blob/master/proposal.md), [README.md](https://github.com/noltron000/bew-dapp-project/blob/master/README.md)
1. Details
  - **Token Protocol**: `ERC-721`. The protocol that we are using is *non-fungible*, which means an item on the blockchain using our contracts are all unique. No two items are alike! We originally wanted to use `ERC-721x`, which is *multi-fungible* &mdash; but found that the documentation was difficult for us, and that its implementation was not within the scope of our limited time.
    - Our game is a crafting game. Many of the base resources will be identical, or atleast quite similar. This is why we wanted to use `ERC-721x`, but it won't be too difficult to add a parameter or function to the `ERC-721` that declares an item's shared type, despite the fact that each item is unqiue.
    - *Fungible*: Every item in our contract means exactly the same thing &mdash; like two quarters.
    - *Non-Fungible*: Every item in our contract is totally different &mdash; like two snowflakes.
    - *Multi-Fungible*: Two items in our contract could be the same, or could be totally different &mdash; like two MTG trading cards.
  - **Use Case**:
    - *Real-World Value*: A person must spend real-world money to obtain these assets, intrinsically. The game itself is an economic game!
    - *Security*: The blockchain has many nodes computing outputs of various transactions to ensure output integrity. This makes it anti-cheat!
    - *Decentralized*: As the owner of the game, we don't have to own any physical servers or equipment.
  - **Examine**: Does the blockchain support a solution to your problem...?
    - Yes, because it supports the above use cases. Additionally, the whole idea of trading things is pretty much the basis of blockchain.
  - **Description**: DecentralizedDeli is a crafting game. You can get materials by playing, and combine them into various items. The main crafting system revolves around building sandwiches.

## High Level Plan
| Date           | Items Due                                                                       |
|----------------|---------------------------------------------------------------------------------|
| Fri, June 14th | prettified repository, solidified ideas, cool markdown                          |
| Fri, June 21st | integrate w/ganache, environment set up, contract initialized, 1+ token working |
| Fri, June 28th | basic react setup, *discover project trajectory*                                |
| Wed, July 3rd  | live frontend, can generate a token, has a basic frontend                       |

## Token Attributes
deli-type:
  - bread
  - meat
  - cheese
  - veggie
  - sauce
  - garnish
