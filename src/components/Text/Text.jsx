import styles from './Text.module.scss'

export const Text = () => {
  return (
    <div className={styles.textWrapper}>
      <div className={styles.textContainer}>
        <div className='typogaphy'>
          <h1>Computer Science and Algorithms</h1>

          <h2>Why Should I Refactor My Code?</h2>

          <p>By making refactoring part of the way you develop a project, you're ensuring two things:</p>

          <ul>
            <li>You focus on solving the right problem at the right time. In other words, you start by writing some code that works, and you improve it later on.</li>
            <li>You end up with clean, well-designed code that is easy to add on to and easy for other developers to collaborate on.</li>
          </ul>

          <p>Refactoring is a common part of the development cycle. You may have heard the term "red, green, refactor". This describes the process of first creating a test for code you haven't written yet. If you run that test, it will fail, or be "red". Then, you write some code (any code!) just to get that test passing, or make your test run result in "green". Once you get your tests passing, you know you have code that works. Only then should you look over your code and clean it up.</p>

          <p>Whether or not you practice this test-driven approach, the basic idea of starting with some code that behaves how you want it to behave and solves the problem at hand is the right one. If you focus too much on implementing the best solution, you might end up with no solution at all. Get something working, then make it better.</p>

          <h2>How Can I Refactor My Code?</h2>

          <p>Exactly how you go about refactoring your code depends on the project you're working on, but there are three general approaches:</p>

          <ul>
            <li>Making our code more semantic and declarative.</li>
            <li>Improving performance.</li>
            <li>Improving design.</li>
          </ul>

          <p>Let's take a look at some brief examples of how we could refactor some code using each of these approaches.</p>

          <h2>Scenario 1: Making Our Code<br />Semantic and Declarative</h2>

          <p>Semantic code is code that speaks for itself. Declarative code is code that tells your program what to do, not how to do it. Here's a basic example of some code that isn't very semantic or declarative in Ruby:</p>

          <h4>Scenario 1: Making Our Code<br />Semantic and Declarative</h4>

          <p><small>Semantic code is code that speaks for itself. Declarative code is code that tells your program what to do, not how to do it. Here's a basic example of some code that isn't very semantic or declarative in Ruby:</small></p>

          <h5>Scenario 1: Making Our Code<br />Semantic and Declarative</h5>

          <p><small>Semantic code is code that speaks for itself. Declarative code is code that tells your program what to do, not how to do it. Here's a basic example of some code that isn't very semantic or declarative in Ruby:</small></p>
        </div>
      </div>
    </div>
  )
}
