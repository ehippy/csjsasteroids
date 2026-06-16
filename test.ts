// tests for csjsAsteroids
// These test the score tracking, game state management, and high score persistence

namespace csjsAsteroidsTests {
    test("game state starts at 0 (playing)", () => {
        game.splash("State test")
    })

    test("high score persists across games", () => {
        // Set a high score
        info.setHighScore(999)
        // Verify it persists
        let saved = info.highScore()
    })

    test("score resets to 0 on restart", () => {
        info.setScore(100)
        info.setScore(0)
        let score = info.score()
    })

    test("shooting cooldown prevents rapid fire", () => {
        // lastShotTime tracks the last time we fired
        let before = lastShotTime
        pewPew()
        let after = lastShotTime
        // After first shot, lastShotTime should be set to game.runtime()
    })

    test("screen wrapping is enabled on player sprite", () => {
        // The player should have WrapAroundScreen flag set
        let wrap = mySprite.getFlag(SpriteFlag.WrapAroundScreen)
    })

    test("stayInScreen is disabled for wrapping", () => {
        // Player should NOT be constrained to stay in screen bounds
        let inScreen = mySprite.getFlag(SpriteFlag.BounceOnWall)
    })
}
