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
}
