def display_board(board):
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("--+---+--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--+---+--")
    print(f"{board[6]} | {board[7]} | {board[8]}")


def player_input(player):
    position = int(input(f"Player {player}, enter your position (1-9): ")) - 1
    return position


def check_win(board, player):
    win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]  # Diagonals
    ]
    for combination in win_combinations:
        if all(board[pos] == player for pos in combination):
            return True
    return False


def is_board_full(board):
    return all(square != ' ' for square in board)


def play():
    board = [' '] * 9
    players = ['X', 'O']
    current_player = 0

    while True:
        display_board(board)
        position = player_input(players[current_player])

        if board[position] == ' ':
            board[position] = players[current_player]

            if check_win(board, players[current_player]):
                display_board(board)
                print(f"Player {players[current_player]} wins!")
                break

            if is_board_full(board):
                display_board(board)
                print("It's a tie!")
                break

            current_player = 1 - current_player  # Switch players for the next turn
        else:
            print("Position already taken. Try again.")


if __name__ == "__main__":
    print("Welcome to Tic Tac Toe!")
    play()
