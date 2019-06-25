const Ingredient = artifacts.require('./Ingredient.sol');
const _ = '        ';


contract('Ingredient', async function (accounts) {
  let token;

  before(done => {
    (async () => {
      try {
        // TODO: All setup steps belong here, including contract deployment.
        token = await Ingredient.new();
        var tx = await web3.eth.getTransactionReceipt(token.transactionHash);
        totalGas = totalGas.plus(tx.gasUsed);
        console.log(_ + tx.gasUsed + ' - Deploy Ingredient');
        token = await Ingredient.deployed();

        // Output how much gas was spent
        console.log(_ + '-----------------------');
        console.log(_ + totalGas.toFormat(0) + ' - Total Gas');
        done();
      }
      catch (error) {
        console.error(error);
        done(false);
      }
    })();
  });

  describe('Ingredient.sol', function () {
    it('Should always pass this canary test', async () => {
      assert(true === true, 'this is true');
    });

    it('Should make first account an owner', async () => {
      // TODO:
      // - What does deployed() do?
      // - Where is from?
      let instance = await Ingredient.deployed();
      let owner = await instance.owner();
      assert.equal(owner, accounts[0]);
    });

    it('Should start with no existing tokens', async () => {
      let instance = await Ingredient.deployed();
      // Begin with zero balance
      let zeroBalance = await instance.totalSupply();
      assert(
        // TODO:
        // - What is toString()?
        // - Why does it take in a parameter of 10?
        zeroBalance.toString(10) === '0',
        'Contract should have no tokens at this point'
      )
    });

    it('Should bake 1 slice of bread when asked', async () => {
      let instance = await Ingredient.deployed();
      // Try minting (baking) a new token
      try {
        const address = '';
        const tokenId = '';
        await instance.mint(address, tokenId);
        // TODO:
        // - What parameters would this take?
        // - Where do they come from?
      } catch (error) {
        console.log(error);
        assert(false, error);
      }

      // Ensure totalSupply is increased to 1
      let totalSupply = await instance.totalSupply();
      assert(
        totalSupply.toString(10) === '1',
        'Contract should have balance of 1 instead it has: ' + totalSupply.toString(10)
      );

      // make sure the token at index 0 has id 1
      let tokenId = await instance.tokenOfOwnerByIndex(accounts[0], '0');
      assert(
        tokenId.toString(10) === '1',
        'Token at index 0 is ' + tokenId.toString(10) // TODO: why 10?
      )

    });

    it("Should mint an item to the owner only", async () => {
      let instance = await Ingredient.deployed();
      let other = accounts[1];
      const address = '';
      const tokenId = '';

      await instance.transferOwnership(other);
      await assertRevert(instance.mint(address, tokenId));
    });

    it('Should mint 24 slices of bread to the deli; for a bag of bread', async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

    it('Should trade 1 slice of bread for another slice of bread properly', async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

    it('Should trade 1 slice of bread for nothing correctly', async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

/*
    it('Should call another function on your deployed contract', async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });
*/
  });
});
