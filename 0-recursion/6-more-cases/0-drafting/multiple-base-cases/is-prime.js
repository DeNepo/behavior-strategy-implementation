// https://www.geeksforgeeks.org/recursive-program-prime-number/

/*
bool isPrime(int n, int i = 2)
{
    // Base cases
    if (n <= 2)
        return (n == 2) ? true : false;
    if (n % i == 0)
        return false;
    if (i * i > n)
        return true;
 
    // Check for next divisor
    return isPrime(n, i + 1);
}
*/