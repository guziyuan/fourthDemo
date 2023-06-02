import UTXOPool from './UTXOPool.js'

Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
      - 名字
      - 创世区块
      - 存储区块的映射
  */
      constructor(Name,Genesis,block) {
        this.Name=Name
        this.Genesis=Genesis
        this.blocks={}
      }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
    longestChain() {
      let resArray=Array();
      var tail=this.Genesis
      for(let i of this.blocks){
        if (i.height>tail.index) {
          tail=i; 
        } 
        let key=tail.hash;
        while(key!=this.Genesis.hash){
          resArray.unshift(this.blocks[key]);
          key=this.blocks[key].preHash;
  
        }
      }
      return resArray;
    }

  // 判断当前区块链是否包含
  containsBlock(block) {
    // 添加判断方法
    return false
  }

  // 获得区块高度最高的区块
  maxHeightBlock() {
    // return Block
  }

  // 添加区块
  /*

  */
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return

    // 添加 UTXO 快照与更新的相关逻辑
  }
}

export default Blockchain
