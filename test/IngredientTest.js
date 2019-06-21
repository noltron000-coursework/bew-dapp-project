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

    it("Should make first account an owner", async () => {
      let instance = await Ingredient.deployed();
      let owner = await instance.owner();
      assert.equal(owner, accounts[0]);
    });

    it("Should create 1 slice of bread.", async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

    it("Should have bread owned by the bakery.", async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function

    it("Should mint 24 slices of bread; for a bag of bread.", async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

    it("Should trade 1 slice of bread for another slice of bread properly.", async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

    it("Should trade 1 slice of bread for nothing correctly.", async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });

/*
    it("Should call another function on your deployed contract", async () => {
      let instance = await Ingredient.deployed();
      // TODO: Write the code here to call a contract function
    });
*/
  });
});
