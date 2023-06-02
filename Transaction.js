import sha256 from 'crypto-js/sha256.js'

class Transaction {
  constructor(sender, recipient, amount) {
    this.sender = sender;
    this.recipient = recipient;
    this.amount = amount;
    this.timestamp = new Date().getTime();
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const data = JSON.stringify({
      sender: this.sender,
      recipient: this.recipient,
      amount: this.amount,
      timestamp: this.timestamp,
    });
    // 计算数据的 SHA256 哈希值
    const sha256 = require("crypto-js/sha256");
    return sha256(data).toString();
  }
}

// 创建一个示例交易
const transaction = new Transaction("alice", "bob", 10);
console.log(transaction.hash); // 打印输出交易的哈希值
