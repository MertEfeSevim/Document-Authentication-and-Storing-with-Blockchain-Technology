class Block {
	constructor(timestamp, lasthash, hash, data) {
		this.timestamp = timestamp;
		this.lasthash = lasthash;
		this.hash = hash;
		this.data = data;
	}

	toString() {
		return `Block-
		Time stamp: ${this.timestamp}
		Last hash:  ${this.lasthash}
		Hash:       ${this.hash}
		Data:       ${this.data}`;
	}

	static genesis() {
		return new this('Genesis', 'as', 'asa', []);
	}

	static mineBlock(lastBlock, data) {
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = "todo-hash";

		return new this(timestamp, lastHash, hash, data);
	}
}
module.exports = Block;
