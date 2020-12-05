export default class MathUtils {
  static isPrime(number: number): boolean {
    if (number <= 1) {
      throw new Error('Numbers smaller than or equal to 1 are not prime; best consult a mathematician.')
    }
    if (number % 2 === 0 && number !== 2) {
      return false
    }
    let divisor = 2
    while (divisor <= number) {
      if (number % divisor === 0) {
        break
      }
      if (divisor >= (number / 2)) {
        // If we're past n/2 and have yet to find a non-trivial divisor, we can quit searching and assert it's prime
        return true
      }
      divisor++
    }
    const hasANonTrivialDivisor = divisor !== 1 && divisor !== number
    return !hasANonTrivialDivisor
  }

  static findNextPrimeNumber(num: number) {
    let x = num + 1
    while (!this.isPrime(x)) {
      x++
    }
    return x
  }
}
