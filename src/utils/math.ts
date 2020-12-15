export default class MathUtils {
  static isPrime(number: number): boolean {
    if (number <= 1) {
      throw new Error('Numbers smaller than or equal to 1 are not prime; best consult a mathematician.')
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }

  static findNextPrimeNumber(num: number) {
    let x = num + 1
    while (!this.isPrime(x)) {
      x++
    }
    return x
  }
}
