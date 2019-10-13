class TicTacToe {
    constructor() {
        this.currPlayer = 'x';
        this.winner = null;

        //matrix[row][col]

        this.matrix = [];
        this.n = 3;
        for(var i=0; i<this.n; i++) {
            this.matrix[i] = [];
            for(var j=0; j<this.n; j++) {
                this.matrix[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.currPlayer;
            this.currPlayer = (this.currPlayer == 'x' ? 'o' : 'x');
            return true;
        }   
        return false;    
    }

    win() {
        if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]) {
            return this.matrix[0][0];
        }
        if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0]) {
            return this.matrix[0][2];
        }
        //rows
        for(var i=0; i<this.n; i++) {
            if (this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][0] == this.matrix[i][2]) {
                return this.matrix[i][0];
            }
        }
        //columns
        for(var i=0; i<this.n; i++) {
            if (this.matrix[0][i] == this.matrix[1][i] && this.matrix[0][i] == this.matrix[2][i]) {
                return this.matrix[0][i];
            }
        }
        return null;
    }

    isFinished() {
        this.winner = this.win();
        if (this.isDraw() || this.winner != null) {
            return true;
        }  else {
            return false;          
        }
              
    }

    getWinner() {
        this.winner = this.win();
        return this.winner;
    }

    noMoreTurns() {
        for(var i=0; i<this.n; i++) {
            for(var j=0; j<this.n; j++) {
                if (this.matrix[i][j] == null) {
                    return false;
                } 
            }
        }
        return true;
    }

    isDraw() {
        this.winner = this.win();
        if (this.noMoreTurns() && this.winner == null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
