# yahtzee
Just some fun with HTML5/CSS3/Javascript!

Still To Do:

- Basic game logic
  - Game Flow
    - User has 3 rolls
    - On first roll, all die are new/random.  User can click aligned button to "hold" die until after roll 3.
    - On second roll, unheld die are changed.  User can click aligned button to "hold" die until after roll 3.
    - On third roll, user must choose scoring category with current dice.
    - Once scoring category is chosen, total score is updated and flow is restarted.
    - 'isGameOver' is false, but true when all scoring categories are fulfilled.
  - Logic Stuff
    - Each button awards points per game rules.
    - Total score adds points each round.
  - Scoreboard
    - Once score category has been selected, button needs to be permanently disabled until isGameOver = true
    - Logic needs to be made to figure in bonuses for upper and lower sections of scorecard
- Dice selection - DONE
  - Checkbox + Label = Fancy checkbox
- CSS layout - Try to find something easy, yet pleasing to the eye.
  - Grid layout!
  - Responsive?
  - Colors - #4a4e4d • #0e9aa7 • #3da4ab • #f6cd61 • #fe8a71
  - Need a detailed scoreboard - Maybe something in the middle?
- Scoreboard - DONE
  - 13 scoring buttons
  - Upper section bonus
  - Lower section bonus
  - Final Score
- Animations
  - Dice Selection Items
  - Scoring Category Buttons
- Email/Telegram Integration - Let me know when you finish a game via Email or Telegram Bot

BUGS
- Large Straight shows up every time
- Small straight doesn't work because of repeating numbers (1,2,2,3,4) - Maybe fixed now
